import React from 'react'

import { CaseBase } from '../caseBase'

export const Corrida = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Walmart Brasil"
      color="black"
      description={
        <p>
          Planejamos uma campanha de ativação, com ações específicas para a
          Corrida Anual Walmart. A produção completa do evento também foi feita
          por nossa equipe.
        </p>
      }
      header={<h2 style={{ color: 'black' }}>CORRIDA WALMART 2013</h2>}
      name="Corrida"
      year="2011/2012/2013"
    >
      <div className="col-xs-12">
        <iframe
          allowFullScreen
          frameBorder="0"
          id="vimeo"
          src="https://player.vimeo.com/video/76434799"
          title="vimeo-player"
        ></iframe>
      </div>
    </CaseBase>
  )
}
