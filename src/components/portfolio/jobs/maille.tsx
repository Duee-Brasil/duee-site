import React from 'react'

import { CaseBase } from '../caseBase'

export const Maille = () => {
  return (
    <CaseBase
      backgroundColor="#241e1d"
      client="Maille"
      description={
        <>
          <p>
            A Maille uma marca tradicional na França, que une mais de 260 anos
            de tradição com a modernidade de pertencer a uma empresa global como
            a Unilever. A excelência em mostarda Dijon se deve aos Maître
            Moutardiers, que elaboram e escolhem os ingredientes de cada
            produto, e ao uso de sementes de mostarda de melhor qualidade, a
            Brassica Juncea. A DUEE Brasil é responsável por toda a comunicação
            da marca no Brasil.{' '}
          </p>
        </>
      }
      header="https://portfolio.duee.com.br/wp-content/uploads/2020/06/banner_img_site_1.png"
      name="Maille"
      year="2020"
    >
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/site_1.jpg"
        />
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-maille-6.mp4"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/stories_3.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/site_4.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-maille-5.png"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-maille-1.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/site_3.jpg"
        />
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/stories_1.mp4"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-maille-2.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/site_3.jpg"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-maille-3.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/site_2.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-maille-4.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/stories_2.png"
        />
      </div>
    </CaseBase>
  )
}
