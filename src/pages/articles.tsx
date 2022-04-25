import * as React from "react"
import { graphql, PageProps, Link } from "gatsby"
import {
  indexPageStyle,
  pageHeroStyle,
  articleGridStyle,
  articleGridTitle,
  articleGridDescription,
  artlcePublisherStyle,
  articleLink,
  articleTag,
  articleTagGroup
} from '../styles.css'
import {DataProps} from '../types'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ArticlesPage = ({data}: PageProps<DataProps>) => {
  const posts = data.allMarkdownRemark.nodes
  return (
    <main className={indexPageStyle}>
      <title>Mast Cell Hub - Curated Artcles</title>
      <Header />
      <div className={pageHeroStyle}>
        <h1>Curated Articles</h1>
        <p>Frequently updated hand-picked articles about Mastocytosis and Mast Cell Activation Syndrome</p>
      </div>
      <div className={articleGridStyle}>
        {posts.map(({frontmatter, excerpt, fields}) => {
          const {title, id, publication, tags, batch} = frontmatter
          return (
            <div key={id} data-batch={batch} data-tags={tags}>
              <h3 className={articleGridTitle}>{title}</h3>
              <div className={artlcePublisherStyle}>By: {publication}</div>
              <div className={articleTagGroup}>{tags?.map((tag: string) => <a href={`#${tag}`} className={articleTag}>{tag}</a>)}</div>
              <p className={articleGridDescription}>{excerpt}</p>
              <Link className={articleLink} to={`/articles${fields.slug}`}>
                Read and comment <FontAwesomeIcon icon={faArrowRight}  size="xs" />
              </Link>
            </div>
          )}
        )}
        </div>
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
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          batch
          publication
          link
          id
          tags
        }
      }
    }
  }
`
