import React from 'react'

import { CaseBase } from '../caseBase'

export const Cascola = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Cascola"
      color="black"
      description={
        <p>
          Desenvolvemos projetos digitais, incluindo site, SEO, chat online,
          wikis, fóruns de discussões, FAQ e concursos culturais para promover a
          marca e seus produtos.
        </p>
      }
      header={<h2 style={{ color: 'black' }}>CASCOLA – DIGITAL</h2>}
      name="Cascola"
      year="2011"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/cascola03.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/cascola02.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/cascola01.jpg"
        />
      </div>
    </CaseBase>
  )
}
