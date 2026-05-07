import React from 'react'

import { CaseBase } from '../caseBase'

export const BauduccoS = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Bauducco"
      color="black"
      description={
        <p>
          Realizamos uma campanha de ativação para Bauducco, com sampling de
          produtos. As promotoras devidamente uniformizadas distribuíram mais de
          430 mil amostras dos produtos.
        </p>
      }
      header={<h2 style={{ color: 'black' }}>AÇÕES DE SAMPLING – BAUDUCCO</h2>}
      name="BauduccoS"
      year="2014"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco01.jpg"
        />
        <img
          alt=""
          src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fbauducco.jpg?alt=media&token=c67daf8c-16b6-4fdb-bc45-5077fe0f4111"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco03.jpg"
        />
      </div>
    </CaseBase>
  )
}
