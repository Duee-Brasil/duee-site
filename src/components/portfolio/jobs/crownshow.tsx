import React from "react"
import { CaseBase } from "../caseBase"

export const Crownshow = () => {
  return (
    <CaseBase
      backgroundColor="white"
      color="black"
      name="Crownshow"
      client="Crowshow"
      year="2012"
      description={
        <p>
          Nossa equipe é responsável pela criação e manutenção do site da
          Crowshow. A empresa é uma iniciativa para financiamento coletivo de
          eventos; desenvolvemos todo o site com base no planejamento das
          necessidades da empresa e da usabilidade dos usuários.
        </p>
      }
      header={<h2 style={{ color: "black" }}>Crowshow</h2>}
    >
      <div className="col-xs-12">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fcrownshow.png?alt=media&token=10c5a8a9-832b-4b32-a3cc-403b23d4f46e"
          alt=""
        />
      </div>
    </CaseBase>
  )
}
