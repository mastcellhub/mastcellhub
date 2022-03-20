import * as React from "react"
import {indexPageStyle} from '../styles.css'
import Header from '../components/Header'
import ComingSoon from '../components/ComingSoon'

// markup
const IndexPage = () => {
  return (
    <main className={indexPageStyle}>
      <title>Mast Cell Hub - Home</title>
      <Header />
      <ComingSoon />
    </main>
  )
}

export default IndexPage
