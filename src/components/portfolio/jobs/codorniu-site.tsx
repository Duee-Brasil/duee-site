import React from 'react'

import { CaseBase } from '../caseBase'

export const CodorniuSite = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Codorníu"
      color="black"
      description={
        <p>
          Criamos o posicionamento e o planejamento estratégico da marca para
          construir os conteúdos das redes sociais. Fazemos também a constante
          compra de mídia, gestão de conteúdos e monitoramento de publicações,
          público e concorrentes.
        </p>
      }
      header={
        <h2 style={{ color: 'black' }}>
          CODORNÍU – WEB SÉRIE – SOMOS CODORNÍU
        </h2>
      }
      name="CodorniuSite"
      year="2015"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2017/05/Captura-de-Tela-2017-05-26-a%CC%80s-16.45.37.png"
        />
      </div>
    </CaseBase>
  )
}
