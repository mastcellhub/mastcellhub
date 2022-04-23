const PubmedApi = require('pubmed-api');
const fetch = require('node-fetch');
const {XMLParser} = require('fast-xml-parser');

const pubMedApi = new PubmedApi();
const parser = new XMLParser();

const getMastoIds = async () => {
  const options = {
      minDate: '2022/01/01',
      maxDate: '2022/02/02',
      retMode: 'json',
      dateType: 'edat',
      useHistory: true,
  };
  try {
      const ids = await pubMedApi.eSearch.search('pubmed', 'mastocytosis', options).then(
        results => JSON.parse(results)
      ).then(
        json => json.esearchresult.idlist
      )
      return ids
  } catch (error) {
      console.log(error);
  }
}

const getArticleInfo = async() => {
  const ids = (await getMastoIds()).join(',')
  let articlesInfo = [];
  const searchQuery = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=${ids}&retmode=xml&rettype=abstract`
  const info = await fetch(searchQuery)
    .then((xml) => xml.text())
    .then((textResponse) => {
      const parsed = parser.parse(textResponse).PubmedArticleSet.PubmedArticle;
      let articlesSet = parsed.length > 0 ? parsed : [parsed]
      const infoSets = articlesSet.map(set => {
        const abstract = getAbstract(set.MedlineCitation.Article.Abstract)
        const date = `${set.MedlineCitation.DateRevised.Year}/${set.MedlineCitation.DateRevised.Month}/${set.MedlineCitation.DateRevised.Day}`
        return ({
          pmid: set.MedlineCitation.PMID,
          date,
          title: set.MedlineCitation.Article.ArticleTitle,
          abstract
        }
      )})
      articlesInfo.push(infoSets)
      return articlesInfo
    })
    .catch((error) => {
      console.log(error);
  });
  console.log(info)
  return info
}

const getAbstract = (abstract) => {
  if (!abstract) return `No Abstract`
  if (typeof abstract?.AbstractText === `object`) {    
    if (typeof abstract.AbstractText[0] === `object`) {
      return abstract?.AbstractText[0][`#text`]
    } else if (typeof abstract.AbstractText[0] === `undefined`) {
      return abstract?.AbstractText[`#text`]
    }
    else return abstract?.AbstractText[0]
  }
  else return abstract.AbstractText
}

getArticleInfo()
