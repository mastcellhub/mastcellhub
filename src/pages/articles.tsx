import * as React from "react"
import { graphql, PageProps, Link } from "gatsby"
import {
  indexPageStyle,
  pageHeroStyle,
  articleGridStyle,
  articleGridTitle,
  articleGridDescription,
  artlcePublisherStyle,
  collectionTitle,
  articleLink,
} from '../styles.css'
import {DataProps} from '../types'
import Header from '../components/Header'

const ArticlesPage = ({data}: PageProps<DataProps>) => {
  const collections = data.allMarkdownRemark.nodes
  return (
    <main className={indexPageStyle}>
      <title>Mast Cell Hub - Curated Artcles</title>
      <Header />
      <div className={pageHeroStyle}>
        <h1>Curated Articles</h1>
        <p>Monthly hand-picked sets of beneficial articles about Mastocytosis and Mast Cell Activation Syndrome</p>
      </div>
        {collections.map(({frontmatter, fields}) => 
          <div key={frontmatter.title}>
            <h2 className={collectionTitle} >
              <Link className={articleLink} to={`/articles${fields.slug}`}>
                {frontmatter.title}
              </Link>
            </h2>
            <div className={articleGridStyle}>
              {frontmatter.articles.map(({title, publication, description, link}) => 
                <div key={link}>
                  <h3 className={articleGridTitle}>{title}</h3>
                  <span className={artlcePublisherStyle}>By: {publication}</span>
                  <p className={articleGridDescription}>{description}</p>
                  <a className={articleLink} href={link} target="_blank">Read full article</a>
                </div>
              )}
            </div>
          </div>
        )}
    </main>
  )
}

export default ArticlesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          articles {
            title
            description
            publication
            link
          }
        }
      }
    }
  }
`
