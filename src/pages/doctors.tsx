import * as React from "react"
import {indexPageStyle, pageHeroStyle} from '../styles.css'
import Header from '../components/Header'
import ComingSoon from '../components/ComingSoon'

const DoctorsPage = () => {
  return (
    <main className={indexPageStyle}>
      <title>Mast Cell Hub - Doctors</title>
      <Header />
      <div className={pageHeroStyle}>
        <h1>Doctors</h1>
        <p>Weekly hand-picked sets of beneficial articles about Mastocytosis and Mast Cell Activation Syndrome</p>
      </div>
      <ComingSoon />
    </main>
  )
}

export default DoctorsPage
