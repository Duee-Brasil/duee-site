import React from 'react'

import { CaseBase } from '../caseBase'

export const Calminex = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Hypermarcas"
      color="black"
      description={
        <p>
          Nada melhor do que receber massagens depois de uma dura e desafiadora
          caminhada, né? Pensando nisso, nós criamos e montamos o Espaço
          Calminex, com profissionais especializados em massagem durante a
          Corrida e Caminhada Walmart.
        </p>
      }
      header={<h2 style={{ color: 'black' }}>ESTANDE CALMINEX</h2>}
      name="Calminex"
      year="2013"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fcalminex.jpg?alt=media&token=a2709bd3-f110-4c98-b981-6b03f1d1c0ce"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/calminex02.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/calminex03.jpg"
        />
      </div>
    </CaseBase>
  )
}
