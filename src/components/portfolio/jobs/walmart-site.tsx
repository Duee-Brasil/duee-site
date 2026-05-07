import React from 'react'

import { CaseBase } from '../caseBase'

export const WalmartM = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Walmart Brasil"
      color="black"
      description={
        <p>
          Ação de divulgação do site walmart.com para reforçar a campanha de
          compras de natal.
        </p>
      }
      header={
        <h2 style={{ color: 'black' }}>DIVULGAÇÃO DO SITE WALMART.COM</h2>
      }
      name="WalmartM"
      year="2012"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2014/02/walm2.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2014/02/walm3.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2014/02/walm1.jpg"
        />
      </div>
    </CaseBase>
  )
}
