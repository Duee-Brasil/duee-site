import React from 'react'

import { CaseBase } from '../caseBase'

export const LivingHNK = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Grupo Fit"
      color="black"
      description={
        <p>
          Desenvolvemos o planejamento estratégico e posicionamento de marca no
          Facebook, além da gestão e criação de conteúdos, compra de mídia e
          monitoramento de publicações, resultados, concorrentes e público.
        </p>
      }
      header={<h2 style={{ color: 'black' }}>LIVING HNK – SOCIAL MEDIA</h2>}
      name="LivingHNK"
      year="2016"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/07/living01.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/07/living02.jpg"
        />
      </div>
    </CaseBase>
  )
}
