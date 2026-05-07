import React from 'react'

import { CaseBase } from '../caseBase'

export const Belvedere = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Vodka Belvedere"
      color="black"
      description={
        <>
          <p>
            Essa ação de Drinks Secretos para a vodka Belvedere teve como foco
            ativar os canais digitais com uma promoção inédita.
          </p>
          <p>
            Foram criados três drinks secretos, feitos pelo embaixador da marca,
            em que o consumidor comprava o kit, sem saber qual deles iria
            receber. Junto com os kits, recebia um qr code com o passo a passo
            das receitas e também os insumos necessários para a preparação da
            bebida.
          </p>
          <p>
            A Duee Brasil foi responsável pela criação, planejamento e
            desdobramento da campanha.
          </p>
        </>
      }
      header="https://portfolio.duee.com.br/wp-content/uploads/2022/01/header-1.png"
      name="Belvedere"
      year="2021"
    >
      <div className="col-xs-12 col-md-3 col-sm-4">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Story_1080x1920psd-scaled.jpg"
        />
      </div>
      <div className="col-xs-12 col-md-9 col-sm-8">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/1920x445.png"
        />
        <div className="col-xs-12 col-md-8 col-sm-6">
          <img
            alt=""
            src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Banner_840x315-1.png"
          />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
          <img
            alt=""
            src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Banner_1080x1080.png"
          />
        </div>
      </div>
      <div className="col-xs-12">
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Making-Off-DS_v5.mp4"
        />
      </div>

      <div className="col-xs-12 col-md-3 col-sm-6">
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Teaser-Belvedere.mp4"
        />
      </div>
      <div className="col-xs-12 col-md-3 col-sm-6">
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Drink-3-The-“pink”-of-the-crop.mp4"
        />
      </div>
      <div className="col-xs-12 col-md-3 col-sm-6">
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Drink-2-Orange’n-Ale.mp4"
        />
      </div>
      <div className="col-xs-12 col-md-3 col-sm-6">
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Drink-1-BEL-Citrus-Fusion.mp4"
        />
      </div>
    </CaseBase>
  )
}
