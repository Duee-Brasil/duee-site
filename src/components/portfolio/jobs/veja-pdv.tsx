import React from 'react'

import { CaseBase } from '../caseBase'

export const VejaPDV = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Editora Abril"
      color="black"
      description={
        <p>
          Ativação da revista Veja em diversas bancas de jornal espalhadas pela
          cidade de São Paulo, e realização de pesquisa de opinião sobre a
          marca.
        </p>
      }
      header={<h2 style={{ color: 'black' }}>VEJA – AÇÃO EM PDV</h2>}
      name="VejaPDV"
      year="2014"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/veja03.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/veja01.jpg"
        />
      </div>
    </CaseBase>
  )
}
