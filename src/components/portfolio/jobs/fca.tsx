import React from 'react'

import { CaseBase } from '../caseBase'

export const FCA = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="FCA – Fiat Chrysler Automobiles"
      color="black"
      description={
        <p>
          Criamos materiais e o planejamento para o Digital Day, evento da Fiat
          Chrysler Automobiles, para as concessionárias, com palestras e
          relacionamento digital entre colaboradores e parceiros.
        </p>
      }
      header={
        <h2 style={{ color: 'black' }}>
          DIGITAL DAY – FCA – FIAT CHRYSLER AUTOMOBILES
        </h2>
      }
      name="FCA"
      year="2016"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Ffca.jpg?alt=media&token=9d158bb7-1c8f-4055-8b5f-47106d41a0de"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/11/img_3930.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/11/img_4173.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/11/img_4096.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/11/img_4159.jpg"
        />
      </div>
    </CaseBase>
  )
}
