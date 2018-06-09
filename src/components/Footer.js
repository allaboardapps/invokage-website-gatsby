import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
  <footer id="footer">
    <section>
      <h2>Invokage</h2>
      <p>Need the advice of seasoned CTOs for a startup idea? Need a team to build your app? Give us a buzz!</p>
    </section>
    <section>
      <h2>Contact Us</h2>
      <dl className="alt">
        <dt>Locations</dt>
        <dd>Chicago, IL and Orlando, FL</dd>
        <dt>Phone</dt>
        <dd>(773) 551-6808</dd>
        <dt>Email</dt>
        <dd><a href="mailto:hello@invokage.com">hello@invokage.com</a></dd>
      </dl>
      <ul className="icons">
        {/* <li><a href="#" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li> */}
        {/* <li><a href="#" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li> */}
        {/* <li><a href="#" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li> */}
        {/* <li><a href="#" className="icon fa-github alt"><span className="label">GitHub</span></a></li> */}
        {/* <li><a href="#" className="icon fa-dribbble alt"><span className="label">Dribbble</span></a></li> */}
      </ul>
    </section>
    <p className="copyright">&copy; 2018 Invokage, LLC. All Rights Reserved.</p>
  </footer>
)

export default Footer
