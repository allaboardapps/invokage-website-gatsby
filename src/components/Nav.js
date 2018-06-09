import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy items={ ['intro', 'first', 'second', 'cta'] } currentClassName="is-active" offset={-300}>
      <li>
        <Scroll type="id" element="intro">
          <a href="#introduction">Introduction</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="products">
          <a href="#products">Products</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="podcasts">
          <a href="#podcasts">Podcasts</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="footer">
          <a href="#footer">Contact Us</a>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
)

export default Nav
