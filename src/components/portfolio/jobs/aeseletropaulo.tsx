import React from 'react'

import { CaseBase } from '../caseBase'

export const AESEletropaulo = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="AES Eletropaulo"
      color="black"
      description={
        <p>
          Em parceria com a Phillips, criamos um projeto de casa automatizada,
          que usa a tecnologia SmartGrid, para promover o sistema.
        </p>
      }
      header={<h2 style={{ color: 'black' }}>SMART HOUSE – AES ELETROPAULO</h2>}
      name="AESEletropaulo"
      year="2012"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/aes02.jpg"
        />
        <img
          alt=""
          src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Faes-eletropaulo.jpg?alt=media&token=49e1a9f8-115d-4584-a5d6-f862d19fc73d"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/aes03.jpg"
        />
      </div>
    </CaseBase>
  )
}
