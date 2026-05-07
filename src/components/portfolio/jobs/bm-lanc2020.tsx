import React from 'react'

import { CaseBase } from '../caseBase'

export const BML2020 = () => {
  return (
    <CaseBase
      backgroundColor="#00143a"
      client="Blue Moon"
      description={
        <p>
          Mais uma sessão de fotos para Blue Moon, com locações em bares de São
          Paulo, harmonização com diferentes pratos, ambientes, situações e
          pessoas. A Duee Brasil planejou, roteirizou e acompanhou o projeto e
          execução completos.
        </p>
      }
      header="https://portfolio.duee.com.br/wp-content/uploads/2020/06/banner_img_site_1-1.png"
      name="BML2020"
      year="2020"
    >
      <div className="col-xs-12 col-md-4 col-sm-6">
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/stories-bm-2.mp4"
        />
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-bm-fb-2.mp4"
        />
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-bm-8.mp4"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-blue-moon-1_01.png"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/stories-bm.png"
        />
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-bm-5.mp4"
        />
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-bm-2.mp4"
        />
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/stories-bm-1-.mp4"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-bm-7.mp4"
        />
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-bm-2-cópia.mp4"
        />
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-blue-moon-2.mp4"
        />
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-bm-6.mp4"
        />
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-bm-4-2.mp4"
        />
      </div>
    </CaseBase>
  )
}
