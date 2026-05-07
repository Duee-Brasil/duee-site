import React from 'react'

import { CaseBase } from '../caseBase'

export const Intel = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Intel"
      color="black"
      description={
        <p>
          Planejamos uma campanha de incentivo para a equipe interna de
          distribuidores da Intel, com cartazes, folders e canecas
          personalizadas.
        </p>
      }
      header={
        <h2 style={{ color: 'black' }}>INTEL RACING – CAMPANHA DE INCENTIVO</h2>
      }
      name="Intel"
      year="2014"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/intel2.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/intel3.jpg"
        />
        <img
          alt=""
          src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fintel.png?alt=media&token=6a4d5235-faf6-4acb-a410-c904c611643f"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/intel4.jpg"
        />
      </div>
    </CaseBase>
  )
}
