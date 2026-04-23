import React from "react"
import { CaseBase } from "../caseBase"

export const Serasa = () => {
  return (
    <CaseBase
      backgroundColor="white"
      color="black"
      name="Serasa"
      client="Serasa Experian"
      year="2011"
      description={
        <p>
          Criação digital e campanhas para lançamento do Alerta de Identidade.
          Realização de campanhas de anúncios gráficos e links patrocinados em
          diversas redes para o lançamento do produto.
        </p>
      }
      header={<h2 style={{ color: "black" }}>SERASA EXPERIAN</h2>}
    >
      <div className="col-xs-12">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fserasa.jpg?alt=media&token=ee61d04b-f12e-4fef-be78-d830d6602524"
          alt=""
        />
      </div>
    </CaseBase>
  )
}
