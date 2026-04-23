import React from "react"
import { CaseBase } from "../caseBase"

export const Norpal = () => {
  return (
    <CaseBase
      backgroundColor="white"
      color="black"
      name="Norpal"
      client="Norpal Construtora"
      year="2014"
      description={
        <p>
          Nossa equipe desenvolveu a nova versão do site da Norpal Construtora,
          com conteúdo e layout direcionados para o público correto da empresa.
        </p>
      }
      header={<h2 style={{ color: "black" }}>NORPAL – WEB</h2>}
    >
      <div className="col-xs-12">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fnorpal.jpg?alt=media&token=9277533e-82db-43eb-900f-79667d6fd009"
          alt=""
        />
      </div>
    </CaseBase>
  )
}
