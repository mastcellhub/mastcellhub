import * as React from "react"
import { Link, graphql, PageProps } from "gatsby"
import Layout from '../components/Layout'
import {curatedPostStyle} from './styles.css'
import {CuratedProps} from '../types'

const CuratedTemplate = ({ data }: PageProps<CuratedProps>) => {
  const { previous, next } = data
  const post = data.markdownRemark
  const {title, date, link, publication, id, tags} = post.frontmatter

  return (
    <Layout>
      <article
        className={curatedPostStyle}
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1>{title}</h1>
          <p>{date}</p>
        </header>
        <hr />
        <div>
          <h3>{title}</h3>
          <span>From: {publication}</span>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <a href={link}>Read original</a>
        </div>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default CuratedTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    } 
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        id
        link
        publication
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
