import React from 'react'

import { CaseBase } from '../caseBase'

export const SentirBem = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Walmart Brasil"
      color="black"
      description={
        <p>
          Realizamos uma blitz de divulgação dos produtos Sentir Bem, em
          parceria com o Walmart, com direito à massagem e degustação no local.
        </p>
      }
      header={
        <h2 style={{ color: 'black' }}>AÇÕES DE SAMPLING – SENTIR BEM</h2>
      }
      name="SentirBem"
      year="2012"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/sentirbem01.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/sentirbem02.jpg"
        />
      </div>
    </CaseBase>
  )
}
