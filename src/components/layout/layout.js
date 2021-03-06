
import React from "react"
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet'
// import { useStaticQuery, graphql } from "gatsby"

import Logo from '../../images/logo_claro.svg'
import Navbar from '../../components/navbar/navbar'
import Wpp from '../../images/whatsapp.svg'
// import MouseIcon from '../../components/mouseIcon/mouseIcon'

// import Header from "./header"
import './sass/main.scss'

export default class Layout extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cases: []
    }
    this.cases = []
  }

    render() {
      return (
        <>
          <Helmet>
            <script src="https://kit.fontawesome.com/67a84c91e8.js"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" ></link>
            <meta http-equiv="Cache-control" content="public, max-age=0, must-revalidate"></meta>
            
            {/* <script src="https://unpkg.com/scroll-out/dist/scroll-out.min.js"></script> */}
            {/* <script src="https://cdn.jsdelivr.net/npm/simple-parallax-js@5.0.2/dist/simpleParallax.min.js"></script> */}
          </Helmet>
          
          <Navbar urlImg={Logo}/>

          <div>
            <main>{this.props.children}</main>
          </div>
          {/* <i className="fab fa-whatsapp-square"/> */}
          <a href="https://api.whatsapp.com/send?phone=5511951322976" target="_blank" className="wppbutton"><img src={Wpp} /></a>
        </>
      )
    }
  }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
