import React from 'react'

import { CaseBase } from '../caseBase'

export const Pilao = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Café Pilão/Walmart Brasil"
      color="black"
      description={
        <p>
          Criamos um projeto de degustação anual de produtos parceiros em 400
          lojas Walmart, promovendo o Café Pilão, com promotoras e sampling.
        </p>
      }
      header={
        <h2 style={{ color: 'black' }}>
          AÇÃO DE CHECKOUT WALMART – CAFÉ PILÃO
        </h2>
      }
      name="Pilao"
      year="2013"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/pilao01-1.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/pilao02-1.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/pilao03.jpg"
        />
      </div>
    </CaseBase>
  )
}
