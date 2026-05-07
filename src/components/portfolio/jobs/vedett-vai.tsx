import React from 'react'

import { CaseBase } from '../caseBase'

export const VaiVedett = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Interfood"
      color="black"
      description={
        <p>
          A Vedett é uma daquelas cervejas especiais que caiu no gosto do
          público. Nós fizemos uma pesquisa de público para alinhar com os
          conteúdos e estética das redes sociais e reforçar a comunicação
          digital. Em seguida, fizemos o reposicionamento de marca, a criação do
          conceito criativo e demos uma repaginada nos perfis digitais da
          empresa.
        </p>
      }
      header="https://portfolio.duee.com.br/wp-content/uploads/2019/06/HEADER_1-5-2.png"
      name="VaiVedett"
      year="2019"
    >
      <div className="col-xs-12 col-md-3 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Post-Vedett-9.png"
        />
      </div>
      <div className="col-xs-12 col-md-3 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Post-Vedett-8.png"
        />
      </div>
      <div className="col-xs-12 col-md-3 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Post-Vedett-7.png"
        />
      </div>
      <div className="col-xs-12 col-md-3 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Post-Vedett-5.png"
        />
      </div>
    </CaseBase>
  )
}
