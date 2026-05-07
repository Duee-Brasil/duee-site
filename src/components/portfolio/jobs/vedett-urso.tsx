import React from 'react'

import { CaseBase } from '../caseBase'

export const Urso = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Interfood"
      color="black"
      description={
        <p>
          Realizamos uma ação integrada para promover a cerveja Vedett. Nosso
          planejamento e criação criaram uma websérie, com a presença do
          embaixador da marca, o urso polar Blanche Le Bear. Levamos o mascote
          para conhecer a maior cidade do país, descobrir mais sobre o povo
          brasileiro e divulgar a marca.
        </p>
      }
      header={<h2 style={{ color: 'black' }}>VEDETT – VEDETT ON THE ROAD</h2>}
      name="Urso"
      year="2017"
    >
      <div className="col-xs-12">
        <iframe
          allowFullScreen
          frameBorder="0"
          id="vimeo"
          src="https://player.vimeo.com/video/208827987"
          title="vimeo-player"
        ></iframe>
        <iframe
          allowFullScreen
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          id="vimeo"
          src="https://www.youtube.com/embed/LkVp7koxDEU"
        ></iframe>
        <iframe
          allowFullScreen
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          id="vimeo"
          src="https://www.youtube.com/embed/WEVfALGI85A"
        ></iframe>
      </div>
    </CaseBase>
  )
}
