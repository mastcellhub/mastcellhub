import * as React from "react"
import {indexPageStyle} from '../styles.css'
import Header from '../components/Header'
import ComingSoon from '../components/ComingSoon'

const SignInPage = () => {
  return (
    <main className={indexPageStyle}>
      <Header />
      <ComingSoon />
    </main>
  )
}

export default SignInPage
