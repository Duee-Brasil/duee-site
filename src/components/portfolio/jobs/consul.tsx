import React from 'react'

import { CaseBase } from '../caseBase'

export const Consul = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Whirlpool"
      color="black"
      description={
        <p>
          Nosso time criou espaços com promotores, estandes e demonstração dos
          produtos para divulgar os benefícios da nova linha da Consul, com
          ambientações diferenciadas e atrativas.
        </p>
      }
      header={<h2 style={{ color: 'black' }}>SHOWROOM CONSUL</h2>}
      name="Consul"
      year="2015"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fconsul.jpg?alt=media&token=ee1a8915-abf7-450f-8a58-0f2cfa4c5bf8"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Consul2.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Consul4.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/consul9.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Consul5.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Consul7.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Consul8.jpg"
        />
      </div>
    </CaseBase>
  )
}
