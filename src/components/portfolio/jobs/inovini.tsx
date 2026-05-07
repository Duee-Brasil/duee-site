import React from 'react'

import { CaseBase } from '../caseBase'

export const Inovini = () => {
  return (
    <CaseBase
      backgroundColor="rgb(65, 20, 45)"
      client="Inovini"
      description={
        <p>
          A Aurora, tradicional importadora do mercado brasileiro, lançou em
          2009 a marca INOVINI, divisão dedicada exclusivamente ao mercado de
          vinhos finos. A INOVINI importa com exclusividade rótulos de vinícolas
          reconhecidas mundialmente por sua qualidade e pioneirismo para agradar
          os mais variados paladares.
        </p>
      }
      header="https://portfolio.duee.com.br/wp-content/uploads/2020/03/Untitled-1.png"
      name="Inovini"
      year="2020"
    >
      <div className="col-xs-12 col-md-4 col-sm-6">
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/03/Inovini_post_3-cópia.mp4"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/03/Captura-de-Tela-2020-03-19-às-19.03.10.png"
        />
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/03/Inovini_post_2.mp4"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/03/Inovini_post_2-cópia.mp4"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/03/Captura-de-Tela-2020-03-19-às-19.02.42.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/03/Captura-de-Tela-2020-03-19-às-19.01.00.png"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/03/Captura-de-Tela-2020-03-19-às-18.59.30.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/03/Captura-de-Tela-2020-03-19-às-18.59.10.png"
        />
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/03/Inovini_post_1.mp4"
        />
      </div>
    </CaseBase>
  )
}
