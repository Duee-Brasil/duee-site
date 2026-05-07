import React from 'react'

import { CaseBase } from '../caseBase'

export const DevOito = () => {
  return (
    <CaseBase
      backgroundColor="#65519e"
      client="Oito App"
      description={
        <>
          <p>
            A OITO é uma plataforma que permite que profissionais autônomos
            anunciem os seus trabalhos e adicionem as suas habilidades, para que
            clientes os encontrem quando precisarem desses serviços, tudo de
            forma gratuita.
          </p>
          <p>
            A Duee Brasil é responsável pelo desenvolvimento da plataforma,
            branding, comunicação e campanhas de mídia.
          </p>
        </>
      }
      header="https://portfolio.duee.com.br/wp-content/uploads/2020/01/banner-oito.png"
      name="DevOito"
      year="2019"
    >
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Oito_post_7.png"
        />
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Oito_post_3.mp4"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Oito_post_3.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Oito_post_2.png"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Oito_stories_2.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Oito_post_4.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Oito_post_1.png"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/POST_OITO_S3_8.png"
        />
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Oito_stories_1.mp4"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Oito_post_4-2.png"
        />
      </div>
      <div className="col-xs-12">
        <iframe
          allowFullScreen
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          id="vimeo"
          src="https://www.youtube.com/embed/XTUJJF9g1i4"
        ></iframe>
      </div>
    </CaseBase>
  )
}
