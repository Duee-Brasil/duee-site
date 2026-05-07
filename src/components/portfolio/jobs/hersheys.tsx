import React from 'react'

import { CaseBase } from '../caseBase'

export const Hersheys = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Hershey’s"
      color="black"
      description={
        <p>
          Nossa equipe criou uma campanha de ação para o lançamento do Mini
          Mais. A ativação aconteceu no Rio de Janeiro e em São Paulo e contou
          com promotores e sampling do novo produto.
        </p>
      }
      header={<h2 style={{ color: 'black' }}>HERSHEY’S – AÇÃO DE SAMPLING</h2>}
      name="Hersheys"
      year="2016"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fhersheys.jpg?alt=media&token=ebad1aab-48ab-4909-b4ff-87314eacac50"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/06/04-1.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/06/01-1.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/06/02-1.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/06/05.jpg"
        />
      </div>
    </CaseBase>
  )
}
