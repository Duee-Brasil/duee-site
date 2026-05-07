import React from 'react'

import { CaseBase } from '../caseBase'

export const Giglio = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Giglio Neto Advogados"
      color="black"
      description={
        <p>
          Giglio Neto Advogados oferece a advocacia empresarial de excelência,
          de forma personalizada, a empresas, instituições financeiras, famílias
          e indivíduos. A Duee Brasil foi responsável pelo desenvolvimento e
          conteúdo presente no site da firma.
        </p>
      }
      header="https://portfolio.duee.com.br/wp-content/uploads/2020/06/banner_img_site_giglio.png"
      name="Giglio"
      year="2020"
    >
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/Giglio_linkdln_PT.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/index-giglio.png"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/Logo_GN.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/ID_Mockup_V2.png"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/AssEmail_mockup_V3.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/66.png"
        />
      </div>
    </CaseBase>
  )
}
