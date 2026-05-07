import React from 'react'

import { CaseBase } from '../caseBase'

export const PetShop = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Hasbro"
      color="black"
      description={
        <p>Desenvolvimento de site, game e aplicações interativas.</p>
      }
      header={
        <h2 style={{ color: 'black' }}>HOTSITE LITTLELEST PET SHOP – HASBRO</h2>
      }
      name="PetShop"
      year="2010"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/KV_Hasbro_Natal_V4.jpg"
        />
      </div>
    </CaseBase>
  )
}
