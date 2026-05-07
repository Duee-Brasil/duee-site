import React from 'react'

import { CaseBase } from '../caseBase'

export const Namorados = () => {
  return (
    <CaseBase
      backgroundColor="#c1272d"
      client="Starbucks"
      description={
        <>
          <p>
            O Dia dos Namorados é uma época para transbordar de amor! Pensando
            nisso, criamos uma caneca exclusiva para a Starbucks, com um texto e
            uma arte que combinam com as conexões e o contato que essa época
            pede. Quando colocamos duas, lado a lado, os desenhos se completam.
          </p>
        </>
      }
      header="https://portfolio.duee.com.br/wp-content/uploads/2019/06/HEADER_1-2.jpg"
      name="Namorados"
      year="2019"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/5_SBUX_CANECA_VALENTINES_V1.jpg"
        />
      </div>
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/caneca-aplicada-pequena-V2.jpg"
        />
      </div>
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/caneca-aplicada-grande-V3.jpg"
        />
      </div>
    </CaseBase>
  )
}
