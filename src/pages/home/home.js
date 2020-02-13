import React from "react"
import ReactPageScroller from "react-page-scroller";
import { Link } from "gatsby"

import './home.scss'
import Layout from "../../components/layout/layout"
// import Navbar from '../../components/navbar/navbar'
import MouseIcon from '../../components/mouseIcon/mouseIcon'
import SlideCounter from '../../components/slideCounter/slideCounter'
import SEO from "../../components/seo"

import Starbucks from '../../images/home/HOME_STARBUCKS~1.mp4'
import StarbucksLogo from '../../images/home/starbucks_logo.svg'
import FaxeBg from '../../images/home/HOME_FAXE~1.mp4'
import FaxeLogo from '../../images/home/FAXE-LOGO.svg'
import LollaBg from '../../images/home/HOME_MADE~1.mp4'
import LollaLogo from '../../images/home/MadeNoLolla.svg'
import LogoVideoPc from '../../images/home/LETRAS_FINALIZADOS~1.mp4'
import LogoVideoMobile from '../../images/home/MOBILE_LETRAS~1.mp4'
import LogoVideoMobileWEB from '../../images/home/MOBILE_LETRAS.webm'
import StarbucksWEB from '../../images/home/HOME_STARBUCKS.webm'
import FaxeBgWEB from '../../images/home/HOME_FAXE.webm'
import LollaBgWEB from '../../images/home/HOME_MADE.webm'
import LogoVideoPcWEB from '../../images/home/LETRAS_FINALIZADOS.webm'
import Oito from '../../images/home/Oito_videoportifolio.mp4'
import OitoLogo from '../../images/home/LOGO_Branco.svg'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      width: 0
    };
    this._pageScroller = null;
  }

  goToPage = (eventKey) => {
    this._pageScroller.goToPage(eventKey);
  };

  pageOnChange = (number) => {
    this.setState({ currentPage: number });
    // console.log("pagina mudou " + this.state.currentPage)
  }

  componentDidMount() {
    this.pageOnChange(1)
    this.setState({ width: window.screen.width })
  }

  render() {

    //const pagesNumbers = this.getPagesNumbers();

    return <Layout>
      <SEO title="Home" />
      <script src="https://kit.fontawesome.com/67a84c91e8.js"></script>

      {/*<Navbar urlImg={Logo}/>*/}

      <MouseIcon />
      <SlideCounter page={this.state.currentPage} />

      <ReactPageScroller ref={c => this.reactPageScroller = c} pageOnChange={this.pageOnChange}>
        <div id="home" className="page-content">
          <Link to="/leoes">
            {/* <img src={Logoanimado} alt="#somosleoes" /> */}
            {this.state.width > 768 ?
              // <video autoPlay={true} muted={true} loop id="videologo" preload="metadata" playsInline>
              //   <source src={LogoVideoPcWEB} type="video/webm" />
              //   <source src={LogoVideoPc} type="video/mp4" />
              // </video>
              // <picture className="videologo">
              // <source srcset={LogoVideoPc} type="video/mp4" className="videologo" />
              <video autoPlay muted loop className="videologo" playsInline onError={(e) => console.log(e)} >
                <source src={LogoVideoPcWEB} type="video/webm" />
                <source src={LogoVideoPc} type="video/mp4" />
              </video>
            // </picture> 
            :
              // <video autoPlay={true} muted={true} loop id="videologo" preload="metadata" playsInline>
              //   <source src={LogoVideoMobileWEB} type="video/webm" />
              //   <source src={LogoVideoMobile} type="video/mp4" />
              // </video>
              // <picture className="videologo">
              // <source srcset={LogoVideoMobile} type="video/mp4" className="videologo" />
              <video autoPlay={true} muted={true} loop className="videologo" preload="metadata" playsInline  onError={(e) => console.log(e)}>
                <source src={LogoVideoMobileWEB} type="video/webm" />
                <source src={LogoVideoMobile} type="video/mp4" />
              </video>
            // </picture>
            }
          </Link>
        </div>

        <div id="portifolio1" className="page-content">
          <Link to="/starbucks">
            {/* <video autoPlay={true} muted={true} loop id="videoport" preload="metadata" playsInline >
              <source src={StarbucksWEB} type="video/webm" />
              <source src={Starbucks} type="video/mp4" />

            </video> */}
            {/* <picture id="videoport">
              <source srcset={Starbucks} type="video/mp4" id="videoport" /> */}
              <video autoPlay={true} muted={true} loop id="videoport" preload="metadata" playsInline  onError={(e) => console.log(e)}>
                <source src={StarbucksWEB} type="video/webm" />
                <source src={Starbucks} type="video/mp4" />
              </video>
            {/* </picture> */}
            {/* <img src= alt=" BackgroStarbucksund" /> */}
            <div className="BgOpacity"></div>
            <div className="LogoContainer">
              <img className="starbucks" src={StarbucksLogo} style={{ maxWidth: "300px" }} alt="Starbucks Logo" />
            </div>
            {/*<div className="content">*/}
            {/*  <div className="title col-12 col-md-4">*/}
            {/*    <h1>Portifólio</h1>*/}
            {/*    <a>Saiba mais sobre o projeto</a>*/}
            {/*  </div>*/}
            {/*  <div className="col-md-4"></div>*/}
            {/*  <div className="col-md-4"></div>*/}
            {/*</div>*/}
          </Link>
        </div>

        <div id="portifolio2" className="page-content">
          <Link to="/faxe">
            {/* <img src={FaxeBg} alt="Faxe Background" /> */}
            {/* <video autoPlay={true} muted={true} loop id="videoport" preload="metadata" playsInline>
              <source src={FaxeBgWEB} type="video/webm" />
              <source src={FaxeBg} type="video/mp4" />
            </video> */}
            {/* <picture id="videoport">
              <source srcset={FaxeBg} type="video/mp4" id="videoport" /> */}
              <video autoPlay={true} muted={true} loop id="videoport" preload="metadata" playsInline  onError={(e) => console.log(e)}>
                <source src={FaxeBgWEB} type="video/webm" />
                <source src={FaxeBg} type="video/mp4" />
              </video>
            {/* </picture> */}
            <div className="BgOpacity"></div>
            <div className="LogoContainer">
              <img src={FaxeLogo} alt="Faxe Logo" />
            </div>
            {/*<div className="content">*/}
            {/*  <div className="title col-12 col-md-4">*/}
            {/*    <h1>Portifólio</h1>*/}
            {/*    <a>Saiba mais sobre o projeto</a>*/}
            {/*  </div>*/}
            {/*  <div className="col-md-4"></div>*/}
            {/*  <div className="col-md-4"></div>*/}
            {/*</div>*/}
          </Link>
        </div>

        <div id="portifolio2" className="page-content">
          <Link to="/madeinbrazil">
            {/* <img src={LollaBg} alt="Lolla Background"/> */}
            {/* <video autoPlay={true} muted={true} loop id="videoport" preload="metadata" playsInline>
              <source src={LollaBgWEB} type="video/webm" />
              <source src={LollaBg} type="video/mp4" />
            </video> */}
            {/* <picture id="videoport">
              <source srcset={LollaBg} type="video/mp4" id="videoport" /> */}
              <video autoPlay={true} muted={true} loop id="videoport" preload="metadata" playsInline  onError={(e) => console.log(e)}>
                <source src={LollaBgWEB} type="video/webm" />
                <source src={LollaBg} type="video/mp4" />
              </video>
            {/* </picture> */}
            <div className="BgOpacity"></div>
            <div className="LogoContainer">
              <img src={LollaLogo} alt="Lolla Logo" />
            </div>
            {/*<div className="content">*/}
            {/*  <div className="title col-12 col-md-4">*/}
            {/*    <h1>Portifólio</h1>*/}
            {/*    <a>Saiba mais sobre o projeto</a>*/}
            {/*  </div>*/}
            {/*  <div className="col-md-4"></div>*/}
            {/*  <div className="col-md-4"></div>*/}
            {/*</div>*/}
          </Link>
        </div>

        <div id="portifolio2" className="page-content">
          <Link to="/oito">
            {/* <img src={LollaBg} alt="Lolla Background"/> */}
            <video src={Oito} autoPlay={true} muted={true} loop id="videoport" preload="metadata" playsInline onError={(e) => console.log(e)} />
            <div className="BgOpacity"></div>
            <div className="LogoContainer">
              <img src={OitoLogo} alt="Lolla Logo" />
            </div>
            {/*<div className="content">*/}
            {/*  <div className="title col-12 col-md-4">*/}
            {/*    <h1>Portifólio</h1>*/}
            {/*    <a>Saiba mais sobre o projeto</a>*/}
            {/*  </div>*/}
            {/*  <div className="col-md-4"></div>*/}
            {/*  <div className="col-md-4"></div>*/}
            {/*</div>*/}
          </Link>
        </div>

      </ReactPageScroller>
    </Layout>
  }
}

          //export default HomePage
