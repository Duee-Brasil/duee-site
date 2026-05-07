import React from 'react'

import { CaseBase } from '../caseBase'

export const Confraternizacao = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Walmart Brasil"
      color="black"
      description={
        <p>
          Evento de confraternização de fim de ano para colaboradores do Walmart
          Brasil.
        </p>
      }
      header={
        <h2 style={{ color: 'black' }}>CONFRATERNIZAÇÃO WALMART BRASIL</h2>
      }
      name="Confraternizacao"
      year="2010/2011/2012/2013"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/festa03.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/festa01.jpg"
        />
      </div>
    </CaseBase>
  )
}
