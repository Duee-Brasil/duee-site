import React from 'react'

import { CaseBase } from '../caseBase'

export const BFMade = () => {
  return (
    <CaseBase
      backgroundColor="black"
      client="Made In Brazil"
      description={
        <>
          <p>
            A Made In Brazil esteve presente na Black Friday de 2019 com preços
            e ofertas especiais em diversos produtos, em todas as lojas.
          </p>
          <p>
            A Duee foi responsável por desenvolver uma campanha integrada, com
            todo o material para essa data especial. Desde materiais para o PDV
            até material de divulgação nas plataformas digitais.
          </p>
        </>
      }
      header="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Made_bannersite.jpg"
      name="BFMade"
      year="2019"
    >
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/yagakbd.png"
        />
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/esquenta_black_friday_whatsapp.mp4"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/dsds.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/dsadwff.png"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/aiudhad.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/post1.png"
        />
      </div>
    </CaseBase>
  )
}
