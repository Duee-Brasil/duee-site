import React from 'react'

import { CaseBase } from '../caseBase'

export const Roll = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Bauducco"
      color="black"
      description={
        <p>
          Realizamos ações para o produto Roll, da Bauducco, com teatro
          infantil, oficina de customização do produto, sampling, promotores e
          um mascote fantasiado.
        </p>
      }
      header={
        <h2 style={{ color: 'black' }}>
          BAUDUCCO – TEATRO INFANTIL E OFICINA ROLL
        </h2>
      }
      name="Roll"
      year="2014"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco1.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco2.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco3.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco4-1.jpg"
        />
      </div>
    </CaseBase>
  )
}
