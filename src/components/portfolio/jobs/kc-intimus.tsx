import React from 'react'

import { CaseBase } from '../caseBase'

export const Intimus = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Kimberly Clark"
      color="black"
      description={
        <p>
          Precisávamos promover a categoria de higiene feminina da Intimus, em
          grandes redes de varejo. Como gerar grande impacto para o público? Nós
          criamos uma ação de flashmob, com diversas promotoras dançando e
          divulgando os produtos da marca.
        </p>
      }
      header={<h2 style={{ color: 'black' }}>FLASHMOB INTIMUS</h2>}
      name="Intimus"
      year="2012"
    >
      <div className="col-xs-12">
        <iframe
          allowFullScreen
          frameBorder="0"
          id="vimeo"
          src="https://player.vimeo.com/video/76434798"
          title="vimeo-player"
        ></iframe>
      </div>
    </CaseBase>
  )
}
