import React from "react"
import { CaseBase } from "../caseBase"

export const Exto = () => {
  return (
    <CaseBase
      backgroundColor="white"
      color="black"
      name="Exto"
      client="EXTO"
      year="2013"
      description={
        <p>
          Criação digital, planejamento e execução de campanhas para lançamento
          de empreendimentos. Criação e execução de campanhas de anúncios
          gráficos e links patrocinados nas redes: Google AdWords, Yahoo!
          Display Network e Facebook Ads, para o lançamento de um empreendimento
          comercial.
        </p>
      }
      header={
        <h2 style={{ color: "black" }}>MÍDIA DIGITAL E CONTEÚDO – EXTO</h2>
      }
    >
      <div className="col-xs-12">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fexto.jpg?alt=media&token=645f25c2-0ea5-4664-b65e-32dd85b7ffc0"
          alt=""
        />
      </div>
    </CaseBase>
  )
}
