import React from 'react'

import { CaseBase } from '../caseBase'

export const Farmacia = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Walmart Brasil"
      color="black"
      description={
        <p>
          Planejamos uma campanha de ativação com ações específicas para as
          Farmácias Walmart, em 21 praias de todo o Brasil.
        </p>
      }
      header={
        <h2 style={{ color: 'black' }}>
          FARMÁCIAS WALMART – AÇÕES DE SAMPLING
        </h2>
      }
      name="Farmacia"
      year="2011/2012/2013"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/farmacia01.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/farmacia02.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/farmacia03.jpg"
        />
      </div>
    </CaseBase>
  )
}
