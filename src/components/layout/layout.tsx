import React, { FC, Fragment } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import GlobalStyled from "./globalStyle"
import Navbar from "@components/navbar/navbar"
import Wpp from "@images/whatsapp.svg"

// import "./init-firebase"

const Wppbutton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 40px;
  font-size: 3em;
  color: #25d366;
  width: fit-content;
  height: fit-content;
  text-decoration: none;
  text-shadow: 0 0 5px gray;
  z-index: 100000;

  img {
    width: 60px;
    height: 60px;
  }
`

const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100vw;
  overflow-x: hidden;
`

const Layout: FC<{
  description?: string,
  lang?: string,
  title: string,
}> = ({ children, description = '', lang = 'en', title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Fragment>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
          // {
          //   name: `Cache-control`,
          //   content: "public, max-age=0, must-revalidate",
          // },
          {
            name: "facebook-domain-verification",
            content: "in976elwnpkst1rkegkf4itp8ua53z"
          }
        ]}
      >
        <script src="https://kit.fontawesome.com/67a84c91e8.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap" rel="stylesheet"></link>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Julius+Sans+One&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </Helmet>
      <GlobalStyled />

      <Content>{children}</Content>

      <Wppbutton
        href="https://api.whatsapp.com/send?phone=5511951322976"
        target="_blank"
      >
        <img src={Wpp} />
      </Wppbutton>

      <Navbar />

      <script src="https://kit.fontawesome.com/67a84c91e8.js"></script>
    </Fragment>
  )
}

export default Layout
