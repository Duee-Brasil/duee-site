import React from 'react'

import { CaseBase } from '../caseBase'

export const Panetone = () => {
  return (
    <CaseBase
      backgroundColor="#106242"
      client="Starbucks"
      description={
        <>
          <p>
            O Panetone e o Mini Panetone da Starbucks, recheados com delicioso
            chocolate de qualidade, foram um sucesso de vendas em 2019.
          </p>
          <p>
            E essas embalagens incríveis com tema natalino foram criadas e
            desenvolvidas pela Duee Brasil.
          </p>
          <p>
            Além disso, desenvolvemos a arte dos Marshmallows e do Gingerbread,
            também com temas inspirados nas festas de fim de ano.
          </p>
        </>
      }
      header="https://portfolio.duee.com.br/wp-content/uploads/2020/01/banner_img_site_1.jpg"
      name="Panetone"
      year="2019"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/site_img_starbucks_4.jpg"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/site_img_starbucks_5.jpg"
        />
        <video
          controls
          loop
          autoPlay={true}
          muted={true}
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/video_site_starbucks.mp4"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/site_img_starbucks_3.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/site_img_starbucks_1.jpg"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/site_img_site_marshmallow.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/site_img_starbucks_6.jpg"
        />
      </div>
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/img_site_starbucks_2.jpg"
        />
      </div>
      <div className="col-xs-12 col-md-6 col-sm-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/site_img_starbucks_9.jpg"
        />
      </div>
      <div className="col-xs-12 col-md-6 col-sm-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/site_img_starbucks_8.jpg"
        />
      </div>
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/img_site_starbucks.jpg"
        />
      </div>
    </CaseBase>
  )
}
