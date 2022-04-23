import * as React from "react"
import {indexPageStyle, pageHeroStyle} from '../styles.css'
import Header from '../components/Header'
import ComingSoon from '../components/ComingSoon'

const ArticlesPage = () => {
  return (
    <main className={indexPageStyle}>
      <title>Mast Cell Hub - Curated Artcles</title>
      <Header />
      <div className={pageHeroStyle}>
        <h1>Curated Articles</h1>
        <p>Weekly hand-picked sets of beneficial articles about Mastocytosis and Mast Cell Activation Syndrome</p>
      </div>
      <ComingSoon />
    </main>
  )
}

export default ArticlesPage
