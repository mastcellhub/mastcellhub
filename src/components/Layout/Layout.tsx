import * as React from "react"
import {FC} from "react"
import {layoutStyle} from './styles.css'
import Header from '../Header'

const Layout: FC = ({children}) => {
  return (
    <main className={layoutStyle}>
      {/* <title>Mast Cell Hub</title> */}
      <Header />
      <div>
        {children}
      </div>
    </main>
  )
}

export default Layout
