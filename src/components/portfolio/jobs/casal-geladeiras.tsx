import React from 'react'

import { CaseBase } from '../caseBase'

export const Geladeiras = () => {
  return (
    <CaseBase
      backgroundColor="#67c3b3"
      client="Casal Garcia"
      description={
        <>
          <p>
            As charmosas geladeiras de Casal Garcia estão presentes em
            diferentes pontos de venda e foram uma ação de posicionamento da
            marca em PDV.
          </p>
          <p>
            Essas geladeiras deixam Casal Garcia na temperatura ideal para o
            consumo, aproximando o produto do público final.
          </p>
        </>
      }
      header="https://portfolio.duee.com.br/wp-content/uploads/2020/01/banner-casal.png"
      name="Geladeiras"
      year="2019"
    >
      <div className="col-xs-12 col-md-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Casal_podqws.png"
        />
      </div>
      <div className="col-xs-12 col-md-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Casal_geladeira.png"
        />
      </div>
    </CaseBase>
  )
}
