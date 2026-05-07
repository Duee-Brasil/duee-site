import React from 'react'

import { CaseBase } from '../caseBase'

export const Mondelez = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Mondelez"
      color="black"
      description={
        <p>
          Para o lançamento do novo Halls Soft, criamos ações de ativação de
          marca, com promotoras, panfletagem e sampling, em diversas escolas e
          eventos.
        </p>
      }
      header={<h2 style={{ color: 'black' }}>AÇÕES DE SAMPLING – MONDELEZ</h2>}
      name="Mondelez"
      year="2013"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fmondolez-halls.jpg?alt=media&token=2a2ce425-6c8e-449c-95a2-86d5c90b10ba"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/mondelez02.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/mondelez01.jpg"
        />
      </div>
    </CaseBase>
  )
}
