import React from 'react'

import { CaseBase } from '../caseBase'

export const Sorteio = () => {
  return (
    <CaseBase
      backgroundColor="#f3732b"
      client="Casal Garcia"
      description={
        <>
          <p>
            Com o intuito de espalhar o conceito de "alegria" de Casal Garcia, o
            concurso cultural teve como objetivo premiar os 10 seguidores mais
            criativos do Instagram da marca. Era necessário apenas postar um
            Reels com o tema "Alegria em Boa Companhia", deixar o perfil da
            conta aberta e utilizar a #AlegriaEmBoaCompanhia para concorrer. Os
            melhores conteúdos ganharam um kit verão contendo uma câmera Instax,
            duas boias de flamingo, adesivos personalizados e um vinho Casal
            Garcia. A Duee Brasil foi responsável pela ideia de criação,
            desenvolvimento e aplicação do concurso.
          </p>
        </>
      }
      header="https://portfolio.duee.com.br/wp-content/uploads/2021/03/header.png"
      name="Sorteio"
      year="2020"
    >
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/premios.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/cover.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/kit-verao.png"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/kit-feed.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/premios-feed.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/participando.png"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/ultima.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/regras.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/summer.png"
        />
      </div>
    </CaseBase>
  )
}
