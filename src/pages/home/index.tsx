import React, { useState, ReactElement } from "react"
import ReactPageScroller from "react-page-scroller"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "@components/layout/layout"
import MouseIcon from "@components/mouseIcon/mouseIcon"
import SlideCounter from "@components/slideCounter"

import StarbucksLogo from "@images/home/starbucks_logo.svg"
import FaxeLogo from "@images/home/FAXE-LOGO.svg"
import LollaLogo from "@images/home/MadeNoLolla.svg"
import LogoVideoMobileWEB from "@images/home/MOBILE_LETRAS.webm"
import StarbucksWEB from "@images/home/HOME_STARBUCKS.webm"
import FaxeBgWEB from "@images/home/HOME_FAXE.webm"
import LollaBgWEB from "@images/home/HOME_MADE.webm"
import LogoVideoPcWEB from "@images/home/LETRAS_FINALIZADOS.webm"
import Oito from "@images/home/Oito_videoportifolio.mp4"
import OitoLogo from "@images/home/LOGO_Branco.svg"

const PageContent = styled.div`
  a {
    width: 100%;
    height: 100%;
    display: flex;
    transition: all 0.5s ease;
  }
`

const LogoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`

const VideoPortf = styled.video`
  top         : 50%;
  left        : 50%;
  min-width   : 100%;
  min-height  : 100%;
  width       : 100vw;
  height      : auto;
  object-fit  : cover;
`

const BgOpacity = styled.div`
  position        : absolute;
  width           : 100vw;
  height          : 100%;
  background-color: black;
  opacity         : 0.7;
`

const VideoDuee = styled.video`
  min-width   : 100%;
  min-height  : 100%;
  width       : 100vw;
  height      : auto;
  object-fit  : cover;
`

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(0)

  const pageOnChange = (number: number) => setCurrentPage(number)

  return (
    <Layout title="Home">
      <MouseIcon />
      <SlideCounter page={currentPage} />

      <ReactPageScroller pageOnChange={pageOnChange}>
        <PageContent id="home">
          <Link to="/leoes">
            {window.screen.width > 768 ? (
              <VideoDuee
                autoPlay
                muted
                loop
                playsInline
                onError={(e) => console.log(e)}
              >
                <source src={LogoVideoPcWEB} type="video/webm" />
                <source
                  src="https://portfolio.duee.com.br/wp-content/uploads/2020/02/LETRAS_FINALIZADOS.mp4"
                  type="video/mp4"
                />
              </VideoDuee>
            ) : (
              <VideoDuee
                autoPlay={true}
                muted={true}
                loop
                preload="metadata"
                playsInline
                onError={(e) => console.log(e)}
              >
                <source src={LogoVideoMobileWEB} type="video/webm" />
                <source
                  src="https://portfolio.duee.com.br/wp-content/uploads/2020/02/MOBILE_LETRAS.mp4"
                  type="video/mp4"
                />
              </VideoDuee>
            )}
          </Link>
        </PageContent>

        <PageContent id="portifolio1">
          <Link to="/starbucks">
            <VideoPortf
              autoPlay={true}
              muted={true}
              loop
              preload="metadata"
              playsInline
              onError={(e) => console.log(e)}
            >
              <source src={StarbucksWEB} type="video/webm" />
              <source
                src="https://portfolio.duee.com.br/wp-content/uploads/2020/02/HOME_STARBUCKS.mp4"
                type="video/mp4"
              />
            </VideoPortf>
            <BgOpacity />
            <LogoContainer>
              <img
                className="starbucks"
                src={StarbucksLogo}
                style={{ maxWidth: "300px" }}
                alt="Starbucks Logo"
              />
            </LogoContainer>
          </Link>
        </PageContent>

        <PageContent id="portifolio2">
          <Link to="/faxe">
            <VideoPortf
              autoPlay={true}
              muted={true}
              loop
              preload="metadata"
              playsInline
              onError={(e) => console.log(e)}
            >
              <source src={FaxeBgWEB} type="video/webm" />
              <source
                src="https://portfolio.duee.com.br/wp-content/uploads/2020/02/HOME_FAXE.mp4"
                type="video/mp4"
              />
            </VideoPortf>
            <BgOpacity />
            <LogoContainer>
              <img src={FaxeLogo} alt="Faxe Logo" />
            </LogoContainer>
          </Link>
        </PageContent>

        <PageContent id="portifolio3">
          <Link to="/madeinbrazil">
            <VideoPortf
              autoPlay={true}
              muted={true}
              loop
              preload="metadata"
              playsInline
              onError={(e) => console.log(e)}
            >
              <source src={LollaBgWEB} type="video/webm" />
              <source
                src="https://portfolio.duee.com.br/wp-content/uploads/2020/02/HOME_MADE.mp4"
                type="video/mp4"
              />
            </VideoPortf>
            <BgOpacity />
            <LogoContainer>
              <img src={LollaLogo} alt="Lolla Logo" />
            </LogoContainer>
          </Link>
        </PageContent>

        <PageContent id="portifolio4">
          <Link to="/oito">
            <VideoPortf
              src={Oito}
              autoPlay={true}
              muted={true}
              loop
              preload="metadata"
              playsInline
              onError={(e) => console.log(e)}
            />
            <BgOpacity />
            <LogoContainer>
              <img src={OitoLogo} alt="Oito Logo" />
            </LogoContainer>
          </Link>
        </PageContent>
      </ReactPageScroller>
    </Layout>
  )
}

export default HomePage
