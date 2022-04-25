export type DataProps = {
  allMarkdownRemark: {
    nodes: {
      frontmatter: {
        date?: Date
        title?: string
        id: string
        publication: string
        link: string
        tags?: string[]
        batch?: string
      },
      fields: {
        slug: string
      }
      excerpt: string
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
    html: string
    excerpt?: string
    frontmatter: {
      date?: string
      title?: string
      link?: string
      publication?: string
      id?: string
      tags?: string[]
    }
  }
}
