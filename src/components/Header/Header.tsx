import React from 'react'
import { Link } from 'gatsby'
import { navStyle, navLinkStyle, navItemListStyle, navItemStyle } from './styles.css'
import logo from "../../svg/logo.svg"

// type Props = {}

const Header = () => {
  return (
    <nav className={navStyle}>
      <Link to='/'>
        <img src={logo} alt="logo"/>
      </Link>
      <ul className={navItemListStyle}>
        <li className={navItemStyle}><Link className={navLinkStyle} to="/">Home</Link></li>
        {/* <li className={navItemStyle}><Link className={navLinkStyle} to="/quiz">Quiz</Link></li> */}
        <li className={navItemStyle}><Link className={navLinkStyle} to="/articles">Articles</Link></li>
        <li className={navItemStyle}><Link className={navLinkStyle} to="/community">Community</Link></li>
        <li className={navItemStyle}><Link className={navLinkStyle} to="/doctors">Doctors</Link></li>
        <li className={navItemStyle}><Link className={navLinkStyle} to="/sign-in">Sign in</Link></li>
      </ul>
    </nav>
  )
}

export default Header
