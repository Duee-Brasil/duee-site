import React from 'react'

import { CaseBase } from '../caseBase'

export const IntimusS = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Kimberly Clark"
      color="black"
      description={
        <p>
          Sampling da nova linha Intimus Evolution. Ativação da nova linha
          Intimus Evolution em todo Brasil. Mais de 200 PDVs entre farmácias,
          hipermercados e supermercados de diversas bandeiras.
        </p>
      }
      header={<h2 style={{ color: 'black' }}>INTIMUS EVOLUTION – SAMPLING</h2>}
      name="IntimusS"
      year="2012"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/intimus02.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/intimus01.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/intimus03.jpg"
        />
      </div>
    </CaseBase>
  )
}
