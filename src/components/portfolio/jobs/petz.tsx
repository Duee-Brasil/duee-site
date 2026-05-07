import React from 'react'

import { CaseBase } from '../caseBase'

export const Petz = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Petz"
      color="black"
      description={
        <p>
          Planejamos uma websérie para a Petz. Os episódios abordam dicas e
          informações fundamentais sobre alimentação, cuidados, saúde dos pets,
          entre outras.
        </p>
      }
      header={<h2 style={{ color: 'black' }}>PETZ TV – PETZ</h2>}
      name="Petz"
      year="2016"
    >
      <div className="col-xs-12">
        <iframe
          allowFullScreen
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          id="vimeo"
          src="https://www.youtube.com/embed/p6frgKZKTgk"
        ></iframe>
      </div>
    </CaseBase>
  )
}
