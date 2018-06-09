import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/invokage_logo.png';

const Header = (props) => (
  <header id="header" className="alt">
    <h1><span className="logo"><img src={logo} alt="" /></span></h1>
    <p>An applicattion development firm <br/>building new interfaces <br/>for modern communications</p>
  </header>
)

export default Header
