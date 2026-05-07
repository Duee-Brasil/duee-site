import React from 'react'

import { CaseBase } from '../caseBase'

export const Yelloween = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Veuve Clicquot"
      color="black"
      description={
        <>
          <p>
            Para comemorar o Yelloween da Veuve Clicquot, fizemos uma campanha
            em parceria com a Pati Piva, com o tema "Doces ou Travessuras".
          </p>
          <p>
            Essa ativação teve como foco a conversão, na compra de uma Veuve
            Clicquot Brut 750ML, ganhava os doces exclusivos da Pati Piva
            inspirados no halloween. A Duee Brasil foi responsável pela criação,
            desenvolvimento e execução da campanha.
          </p>
        </>
      }
      header="https://portfolio.duee.com.br/wp-content/uploads/2022/01/header.png"
      name="Yelloween"
      year="2021"
    >
      <div className="col-xs-12 col-md-2 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Anúncio-parte-cima.png"
          style={{ marginBottom: 0 }}
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Anúncio-parte-baixo.png"
          style={{ marginTop: 0 }}
        />
      </div>
      <div className="col-xs-12 col-md-5 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Banner_1080x1920.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Banner_200x200.png"
        />
      </div>
      <div className="col-xs-12 col-md-5 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Post_1080x1080.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Banner_840x315.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Banner_300x250.png"
        />
      </div>
    </CaseBase>
  )
}
