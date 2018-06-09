import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import whoWeAre from '../assets/images/who_we_are_image.png'
import ctoThinkLogo from '../assets/images/cto_think_logo.png'
import thisOldAppLogo from '../assets/images/this_old_app_logo.jpg'
import '../assets/scss/index.scss';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Who We Are</h2>
                </header>
                <p>Don VanDemark and Randy Burgess are the founders of Invokage. Friends for over a decade, they finally decided to put their heads together and build things.</p>
              </div>
              <span className="image"><img src={whoWeAre} alt="Don VanDemark and Randy Burgess portraits" /></span>
            </div>
          </section>

          <section id="products" className="main special">
            <header className="major">
              <h2>Our Products</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style3 fa-microphone"></span>
                <h3>Ref Check</h3>
                <p>A voice interface (think Alexa, Siri, and Google Assistant) for training football referees.</p>
              </li>
              <li>
                <span className="icon major style1 fa-comments"></span>
                <h3>Chasms</h3>
                <p>A system to allow "folks in the field" to communicate via low-cost, low-bandwidth means (think SMS) to a single channel with mutliple dispatchers.</p>
              </li>
            </ul>
          </section>

          <section id="podcasts" className="main special">
            <header className="major">
              <h2>Our Podcasts</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon">
                  <a href="https://www.ctothink.com">
                    <img src={ctoThinkLogo} style={{width: 200, height: 200}} alt="CTO Think Podcast Logo" />
                  </a>
                </span>
                <p>A pragmatic podcast about leadership, product dev, and tech decisions between two recovering Chief Technology Officers.</p>
              </li>
              <li>
                <span className="icon">
                  <a href="https://thisoldapp.online">
                    <img src={thisOldAppLogo} style={{ width: 200, height: 200 }} alt="This Old App Podcast Logo" />
                  </a>
                </span>
                <p>A podcast about learning, coding, smashing stuff together, breaking things apart, startups, failing, winning, and any other buzzwords we can think of.</p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
