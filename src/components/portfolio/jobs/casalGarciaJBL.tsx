import React from 'react'

import { CaseBase } from '../caseBase'

export const JBL = () => {
  return (
    <CaseBase
      backgroundColor="#169193"
      client="Casal Garcia"
      description={
        <>
          <p>
            Para comemorar o dia mais significativo do conceito da alegria de
            Casal Garcia, o “ Dia da Alegria”, fizemos um concurso cultural nas
            redes sociais para que os seguidores postassem uma foto ou vídeo que
            envolva o espírito dessa data. Os conteúdos mais criativos ganharam
            uma caixinha de som JBL.
          </p>
          <p>
            A Duee Brasil foi responsável pela criação, desenvolvimento e
            aplicação do concurso.
          </p>
        </>
      }
      header="https://portfolio.duee.com.br/wp-content/uploads/2021/08/header-2.png"
      name="casal garcia jbl"
      year="2021"
    >
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/06-1.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/01-1.jpg"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/05-1.jpg"
        />
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/04.mp4"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/02-1.jpg"
        />
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/03.mp4"
        />
      </div>
    </CaseBase>
  )
}
