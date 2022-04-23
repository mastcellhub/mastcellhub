import * as React from "react"
import {indexPageStyle, pageHeroStyle} from '../styles.css'
import Header from '../components/Header'
// import ComingSoon from '../components/ComingSoon'

const IndexPage = () => {
  return (
    <main className={indexPageStyle}>
      <title>Mast Cell Hub - Home</title>
      <Header />
      <div className={pageHeroStyle}>
        <h1>Mast Cell Hub - all Mast Cell Disease Information in one spot</h1>
        <p>A platform built to help aggregate helpful information and research related to Mastocytosis, MCAS and HAT, which are rare conditions involving mast cell abnormalities.</p>
      </div>
      {/* <ComingSoon /> */}
    </main>
  )
}

export default IndexPage
