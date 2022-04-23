import * as React from "react"
import {indexPageStyle, pageHeroStyle} from '../styles.css'
import Header from '../components/Header'
import ComingSoon from '../components/ComingSoon'

const CommunityPage = () => {
  return (
    <main className={indexPageStyle}>
      <title>Mast Cell Hub - Community</title>
      <Header />
      <div className={pageHeroStyle}>
        <h1>Community</h1>
        <p>Stats, polls, and community posts</p>
      </div>
      <ComingSoon />
    </main>
  )
}

export default CommunityPage
