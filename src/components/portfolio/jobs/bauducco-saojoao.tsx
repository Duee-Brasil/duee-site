import React from 'react'

import { CaseBase } from '../caseBase'

export const SaoJoao = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Bauducco"
      color="black"
      description={
        <p>
          Desenvolvemos uma campanha de ativação especial para a data de São
          João, com sampling de produtos, em Campina Grande e Caruaru –
          consideradas as cidades com as maiores festas de São João do país.
        </p>
      }
      header={
        <h2 style={{ color: 'black' }}>ATIVAÇÃO DE SÃO JOÃO – BAUDUCCO</h2>
      }
      name="SaoJoao"
      year="2011"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco03-1.jpg"
        />
        <img
          alt=""
          src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fbauducco-sao-joao.jpg?alt=media&token=6430e220-32ee-4311-8c3d-8e14465a9bc7"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco02-1.jpg"
        />
      </div>
    </CaseBase>
  )
}
