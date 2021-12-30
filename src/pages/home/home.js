import React, {useState} from "react"
import ReactPageScroller from "react-page-scroller";
import { Link, navigate } from "gatsby"

import './home.scss'
import Layout from "../../components/layout/layout"
// import Navbar from '../../components/navbar/navbar'
import MouseIcon from '../../components/mouseIcon/mouseIcon'
import SlideCounter from '../../components/slideCounter'
import SEO from "../../components/seo"

import StarbucksLogo from '../../images/home/starbucks_logo.svg'
import FaxeLogo from '../../images/home/FAXE-LOGO.svg'
import LollaLogo from '../../images/home/MadeNoLolla.svg'
import LogoVideoMobileWEB from '../../images/home/MOBILE_LETRAS.webm'
import StarbucksWEB from '../../images/home/HOME_STARBUCKS.webm'
import FaxeBgWEB from '../../images/home/HOME_FAXE.webm'
import LollaBgWEB from '../../images/home/HOME_MADE.webm'
import LogoVideoPcWEB from '../../images/home/LETRAS_FINALIZADOS.webm'
import Oito from '../../images/home/Oito_videoportifolio.mp4'
import OitoLogo from '../../images/home/LOGO_Branco.svg'

const HomePage = () => {

  const [currentPage, setCurrentPage] = useState(0)

  const pageOnChange = (number) => setCurrentPage(number)

    return <Layout>
      <SEO title="Home" />
      <script src="https://kit.fontawesome.com/67a84c91e8.js"></script>

      {/*<Navbar urlImg={Logo}/>*/}

      <MouseIcon />
      <SlideCounter page={currentPage} />

      <ReactPageScroller pageOnChange={pageOnChange}>
        <div id="home" className="page-content">
          <Link to="/leoes">
            {window.screen.width > 768 ?
              <video autoPlay muted loop className="videologo" playsInline onError={(e) => console.log(e)} >
                <source src={LogoVideoPcWEB} type="video/webm" />
                <source src="https://portfolio.duee.com.br/wp-content/uploads/2020/02/LETRAS_FINALIZADOS.mp4" type="video/mp4" />
              </video>
            :
              <video autoPlay={true} muted={true} loop className="videologo" preload="metadata" playsInline  onError={(e) => console.log(e)}>
                <source src={LogoVideoMobileWEB} type="video/webm" />
                <source src="https://portfolio.duee.com.br/wp-content/uploads/2020/02/MOBILE_LETRAS.mp4" type="video/mp4" />
              </video>
            }
          </Link>
        </div>

        <div id="portifolio1" className="page-content">
          <Link to="/starbucks">
              <video autoPlay={true} muted={true} loop id="videoport" preload="metadata" playsInline  onError={(e) => console.log(e)}>
                <source src={StarbucksWEB} type="video/webm" />
                <source src="https://portfolio.duee.com.br/wp-content/uploads/2020/02/HOME_STARBUCKS.mp4" type="video/mp4" />
              </video>
            <div className="BgOpacity"></div>
            <div className="LogoContainer">
              <img className="starbucks" src={StarbucksLogo} style={{ maxWidth: "300px" }} alt="Starbucks Logo" />
            </div>
          </Link>
        </div>

        <div id="portifolio2" className="page-content">
          <Link to="/faxe">
              <video autoPlay={true} muted={true} loop id="videoport" preload="metadata" playsInline  onError={(e) => console.log(e)}>
                <source src={FaxeBgWEB} type="video/webm" />
                <source src="https://portfolio.duee.com.br/wp-content/uploads/2020/02/HOME_FAXE.mp4" type="video/mp4" />
              </video>
            <div className="BgOpacity"></div>
            <div className="LogoContainer">
              <img src={FaxeLogo} alt="Faxe Logo" />
            </div>
          </Link>
        </div>

        <div id="portifolio3" className="page-content">
          <Link to="/madeinbrazil">
              <video autoPlay={true} muted={true} loop id="videoport" preload="metadata" playsInline  onError={(e) => console.log(e)}>
                <source src={LollaBgWEB} type="video/webm" />
                <source src="https://portfolio.duee.com.br/wp-content/uploads/2020/02/HOME_MADE.mp4" type="video/mp4" />
              </video>
            <div className="BgOpacity"></div>
            <div className="LogoContainer">
              <img src={LollaLogo} alt="Lolla Logo" />
            </div>
          </Link>
        </div>

        <div id="portifolio4" className="page-content">
          <Link to="/oito">
            <video src={Oito} autoPlay={true} muted={true} loop id="videoport" preload="metadata" playsInline onError={(e) => console.log(e)} />
            <div className="BgOpacity"></div>
            <div className="LogoContainer">
              <img src={OitoLogo} alt="Lolla Logo" />
            </div>
          </Link>
        </div>

      </ReactPageScroller>
    </Layout>
  }

export default HomePage
