import React from 'react'

import { CaseBase } from '../caseBase'

export const BBCNet = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="BBC"
      color="black"
      description={
        <p>
          Em conjunto com a BBC HD Brasil, realizamos a cobertura em tempo real
          dos 5 dias da convenção anual de vendas NET – O Controle é Nosso.
        </p>
      }
      header={<h2 style={{ color: 'black' }}>CONVENÇÃO NET – BBC HD</h2>}
      name="BBCNet"
      year="2014"
    >
      <div className="col-xs-12">
        <iframe
          allowFullScreen
          frameBorder="0"
          id="vimeo"
          src="https://player.vimeo.com/video/65856195"
          title="vimeo-player"
        ></iframe>
      </div>
    </CaseBase>
  )
}
