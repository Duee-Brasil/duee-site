import React from "react"
import { CaseBase } from "../caseBase"

export const Trova = () => {
  return (
    <CaseBase
      backgroundColor="white"
      color="black"
      name="Trova"
      client="Trova"
      year="2017"
      description={
        <p>
          Desenvolvemos o site da Trova, empresa de importação especializada no
          Travertino Romano, com mais de 15 anos de mercado. Além do site,
          também criamos e gerenciamos a campanha de mídia para a divulgação da
          marca e do endereço eletrônico.
        </p>
      }
      header={<h2 style={{ color: "black" }}>WEBSITE – TROVA TRAVERTINO</h2>}
    >
      <div className="col-xs-12">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Ftrova.jpg?alt=media&token=56e5c5cc-cd67-4cd3-80b8-9d63bc0ac9bb"
          alt=""
        />
        <img
          src="https://portfolio.duee.com.br/wp-content/uploads/2018/01/trova02.jpg"
          alt=""
        />
        <img
          src="https://portfolio.duee.com.br/wp-content/uploads/2018/01/trova03.jpg"
          alt=""
        />
      </div>
    </CaseBase>
  )
}
