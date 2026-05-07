import React from 'react'

import { CaseBase } from '../caseBase'

export const Serie = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Codorníu"
      color="black"
      description={
        <p>
          Para promover o conceito de lifestyle de Codorníu, criamos uma
          websérie com diversos episódios. Organizamos jantares com grandes
          especialistas em moda, arte, gastronomia e turismo, onde eles podem
          trocar experiências e confraternizar assuntos com o sabor de Codorníu.
        </p>
      }
      header={
        <h2 style={{ color: 'black' }}>
          CODORNÍU – WEB SÉRIE – SOMOS CODORNÍU
        </h2>
      }
      name="Serie"
      year="2016"
    >
      <div className="col-xs-12">
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://duee.com.br/Site_2016/wp-content/uploads/2016/06/video_codorniu.webmhd.webm"
        />
      </div>
    </CaseBase>
  )
}
