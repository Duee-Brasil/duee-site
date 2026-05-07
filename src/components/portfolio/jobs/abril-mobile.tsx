import React from 'react'

import { CaseBase } from '../caseBase'

export const AbrilMobile = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Editora Abril"
      color="black"
      description={
        <p>
          Campanha de ativação de marca para a Revista Veja, em diversas bancas
          de jornal espalhadas por São Paulo. Junto, realizamos pesquisas de
          opinião sobre a marca.
        </p>
      }
      header="https://portfolio.duee.com.br/wp-content/uploads/2021/08/header-2.png"
      name="abrilmobile"
      year="2016"
    >
      <div className="col-xs-12">
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://duee.com.br/Site_2016/wp-content/uploads/2016/06/video_abril.webmhd.webm"
        />
      </div>
    </CaseBase>
  )
}
