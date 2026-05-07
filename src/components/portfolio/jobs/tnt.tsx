import React from 'react'

import { CaseBase } from '../caseBase'

export const TNT = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="TNT Energy Drink/Grupo Petrópolis"
      color="black"
      description={
        <p>
          Nossa equipe produziu um estande exclusivo e uma ativação para a TNT
          Energy Drink, durante o 42º São Paulo Fashion Week, que compartilhava
          GIFs da transformação feita com maquiagem.
        </p>
      }
      header={
        <h2 style={{ color: 'black' }}>SUA CARA SUA LUTA – TNT NO SPFW</h2>
      }
      name="TNT"
      year="2016"
    >
      <div className="col-xs-12">
        <iframe
          allowFullScreen
          frameBorder="0"
          id="vimeo"
          src="https://player.vimeo.com/video/191199581"
          title="vimeo-player"
        ></iframe>
      </div>
    </CaseBase>
  )
}
