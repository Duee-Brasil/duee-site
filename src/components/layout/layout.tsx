import React, { FC } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import GlobalStyled from "./globalStyle"
import Navbar from "@components/navbar/navbar"
import Wpp from "@images/whatsapp.svg"

import "./init-firebase"

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
    <>
      <GlobalStyled />
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
        {
          name: `Cache-control`,
          content: "public, max-age=0, must-revalidate",
        },
      ]}
    >
        <script src="https://kit.fontawesome.com/67a84c91e8.js"></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css"
          type="text/css"
        ></link>
      </Helmet>
      

      <Navbar />

      <div>
        <main>{children}</main>
      </div>
      <Wppbutton
        href="https://api.whatsapp.com/send?phone=5511951322976"
        target="_blank"
      >
        <img src={Wpp} />
      </Wppbutton>

      <script src="https://kit.fontawesome.com/67a84c91e8.js"></script>
    </>
  )
}

export default Layout
