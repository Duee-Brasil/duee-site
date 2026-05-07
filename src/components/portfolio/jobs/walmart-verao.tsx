import React from 'react'

import { CaseBase } from '../caseBase'

export const Verao = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Walmart Brasil"
      color="black"
      description={
        <p>Ativações da farmácia Walmart em 21 praias de todo Brasil.</p>
      }
      header={
        <h2 style={{ color: 'black' }}>AÇÕES DE VERÃO – FARMÁCIA WALMART</h2>
      }
      name="Verao"
      year="2011/2012"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/praia01.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/praia02.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/praia03.jpg"
        />
      </div>
    </CaseBase>
  )
}
