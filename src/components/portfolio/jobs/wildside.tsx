import React from 'react'

import { CaseBase } from '../caseBase'

export const Wildside = () => {
  return (
    <CaseBase
      backgroundColor="#fff"
      client="Wild Side"
      color="black"
      description={
        <p>
          Nosso cliente Wild Side nos procurou para desenvolver o rótulo de sua
          nova garrafa. Criamos um rótulo para transmitir a inspiração clássica
          do original Whiskey americano de Kentucky e que também trouxesse o tom
          moderno característico da Wild Side. A Duee Brasil foi responsável por
          todo o conceito e criação deste rótulo, um produto que temos orgulho
          de ter no nosso portfólio.
        </p>
      }
      header="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fwildside%2Fheadder.png?alt=media&token=0a65c8ee-8f88-4700-8e89-5d642464edb0"
      name="Wildside"
      year="2023"
    >
      <div className="col-xs-12 col-sm-6">
        <img
          alt=""
          src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fwildside%2FPSX_20230206_165824.png?alt=media&token=e3d510e4-10f6-4eea-82dc-8763886696ee"
        />
      </div>
      <div className="col-xs-12 col-sm-6">
        <div className="col-xs-6">
          <img
            alt=""
            src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fwildside%2FPSX_20230206_165052.png?alt=media&token=cd3cc4df-0da8-450e-ac29-d3fa4852e437"
          />
        </div>
        <div className="col-xs-6">
          <img
            alt=""
            src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fwildside%2FPSX_20230206_164848.png?alt=media&token=b5134d8e-c733-4cdc-9d52-c0d56f25b452"
          />
        </div>
        <img
          alt=""
          src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fwildside%2Fwild_side_rotulo.png?alt=media&token=0a5c66e5-5aaa-463e-bbda-7a39f3c126e3"
        />
      </div>
    </CaseBase>
  )
}
