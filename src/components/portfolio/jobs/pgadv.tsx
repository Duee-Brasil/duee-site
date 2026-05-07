import React from 'react'

import { CaseBase } from '../caseBase'

export const PGadv = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Pires e Gonçalves Advogados"
      color="black"
      description={
        <p>
          Criamos todo o planejamento estratégico e posicionamento da marca no
          Facebook e Linkedin, passando pela gestão de conteúdos, compra de
          mídia e monitoramento de público, concorrentes e alcance das
          publicações.
        </p>
      }
      header={<h2 style={{ color: 'black' }}>PG ADVOGADOS – SOCIAL MEDIA</h2>}
      name="PGadv"
      year="2015/2016"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/07/pg_adv_01.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/07/pg_adv_02.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/07/pg_adv_03.jpg"
        />
      </div>
    </CaseBase>
  )
}
