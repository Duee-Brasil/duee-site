import React from 'react'

import { CaseBase } from '../caseBase'

export const Posto = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Walmart Brasil"
      color="black"
      description={
        <p>Ação de panfletagem e evento de inauguração do posto Walmart.</p>
      }
      header={
        <h2 style={{ color: 'black' }}>
          INAUGURAÇÕES DE POSTOS WALMART EM TODO BRASIL
        </h2>
      }
      name="Posto"
      year="2011/2012"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/posto-1.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/posto-3.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/posto-4.jpg"
        />
      </div>
    </CaseBase>
  )
}
