export type DataProps = {
  allMarkdownRemark: {
    nodes: {
      frontmatter: {
        date?: string
        title?: string
        articles: {
          title?: string
          description?: string
          link?: string
          publication?: string
        }[]
      },
      fields: {
        slug: string
      }
     }[]
  }
}

export type CuratedProps = {
  previous: {
    fields: {
      slug: string
    },
    frontmatter: {
      title: string
    }
  },
  next: {
    fields: {
      slug: string
    },
    frontmatter: {
      title: string
    }
  },
  markdownRemark: {
    frontmatter: {
      date?: string
      title?: string
      articles: {
        title?: string
        description?: string
        link?: string
        publication?: string
      }[]
      }
    }
}
