import React from 'react'

import { CaseBase } from '../caseBase'

export const Veja450 = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Grupo Abril"
      color="black"
      description={
        <p>
          Criamos uma campanha de ativação para a Revista Veja para celebrar os
          450 anos da cidade do Rio de Janeiro. Nossa ação contou com promotores
          e sampling na Praia do Leblon, um dos pontos turísticos mais visitados
          da cidade.
        </p>
      }
      header={<h2 style={{ color: 'black' }}>REVISTA VEJA – RIO 450 ANOS</h2>}
      name="Veja450"
      year="2015"
    >
      <div className="col-xs-12">
        <iframe
          allowFullScreen
          frameBorder="0"
          id="vimeo"
          src="https://player.vimeo.com/video/156904234"
          title="vimeo-player"
        ></iframe>
      </div>
    </CaseBase>
  )
}
