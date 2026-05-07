import React from 'react'
import Swiper from 'react-id-swiper'

import { CaseBase } from '../caseBase'

export const MadeM = () => {
  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }

  return (
    <CaseBase
      backgroundColor="black"
      client="Made In Brazil"
      description={
        <p>
          Realizamos todo o planejamento estratégico e posicionamento da marca
          nas redes sociais, bem como a gestão e criação de conteúdos. Nossa
          equipe também faz a compra de mídia e monitoramento de publicações,
          público e concorrentes.
        </p>
      }
      header="https://portfolio.duee.com.br/wp-content/uploads/2019/03/HEADER_1-5.png"
      name="MadeM"
      year="2019"
    >
      <div className="col-xs-12 col-md-4 col-sm-6">
        <Swiper {...params}>
          <div>
            <img
              alt=""
              className="carrosel"
              src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/1-1_POST_MIB_V1.png"
            />
          </div>
          <div>
            <img
              alt=""
              className="carrosel"
              src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/1-2_POST_MIB_V1.png"
            />
          </div>
          <div>
            <img
              alt=""
              className="carrosel"
              src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/1-3_POST_MIB_V1.png"
            />
          </div>
          <div>
            <img
              alt=""
              className="carrosel"
              src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/1-4_POST_MIB_V1.png"
            />
          </div>
          <div>
            <img
              alt=""
              className="carrosel"
              src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/1-5_POST_MIB_V1.png"
            />
          </div>
          <div>
            <img
              alt=""
              className="carrosel"
              src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/1-6_POST_MIB_V1.png"
            />
          </div>
        </Swiper>
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <Swiper {...params}>
          <div>
            <img
              alt=""
              className="carrosel"
              src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/2-1_POST_MIB_V1.png"
            />
          </div>
          <div>
            <img
              alt=""
              className="carrosel"
              src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/2-2_POST_MIB_V1.png"
            />
          </div>
          <div>
            <img
              alt=""
              className="carrosel"
              src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/2-3_POST_MIB_V1.png"
            />
          </div>
          <div>
            <img
              alt=""
              className="carrosel"
              src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/2-4_POST_MIB_V1.png"
            />
          </div>
          <div>
            <img
              alt=""
              className="carrosel"
              src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/2-5_POST_MIB_V1.png"
            />
          </div>
          <div>
            <img
              alt=""
              className="carrosel"
              src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/2-6_POST_MIB_V1.png"
            />
          </div>
        </Swiper>
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <Swiper {...params}>
          <div>
            <img
              alt=""
              className="carrosel"
              src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/1-1_POST_MIB_V2.png"
            />
          </div>
          <div>
            <img
              alt=""
              className="carrosel"
              src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/1-2_POST_MIB_V2.png"
            />
          </div>
          <div>
            <img
              alt=""
              className="carrosel"
              src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/1-3_POST_MIB_V2.png"
            />
          </div>
          <div>
            <img
              alt=""
              className="carrosel"
              src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/1-4_POST_MIB_V2.png"
            />
          </div>
          <div>
            <img
              alt=""
              className="carrosel"
              src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/1-5_POST_MIB_V2.png"
            />
          </div>
          <div>
            <img
              alt=""
              className="carrosel"
              src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/1-6_POST_MIB_V2.png"
            />
          </div>
        </Swiper>
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          className="carrosel"
          src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/4_POST_MIB_V1.png"
        />
        <img
          alt=""
          className="carrosel"
          src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/3_POST_MIB_V1.png"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          className="carrosel"
          src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/5_POST_MIB_V1-1.png"
        />
        <img
          alt=""
          className="carrosel"
          src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/5_POST_MIB_V1.png"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          className="carrosel"
          src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/3_POST_MIB_V1-1.png"
        />
        <img
          alt=""
          className="carrosel"
          src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/4_POST_MIB_V1-1.png"
        />
      </div>
    </CaseBase>
  )
}
