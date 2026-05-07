import React from 'react'

import { CaseBase } from '../caseBase'

export const BauduccoM = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Bauducco"
      color="black"
      description={
        <p>
          Monitoramento dos comentários e publicações relacionados à Bauducco,
          Visconti e concorrentes, em todas as redes sociais. Desenvolvimento de
          estratégias de ativação.
        </p>
      }
      header={<h2 style={{ color: 'black' }}>BAUDUCCO MONITORAMENTO</h2>}
      name="BauduccoM"
      year="2013/2014"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/huggies_gde.jpg"
        />
      </div>
    </CaseBase>
  )
}
