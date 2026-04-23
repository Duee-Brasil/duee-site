import React from "react"
import { CaseBase } from "../caseBase"

export const Schwarzkopf = () => {
  return (
    <CaseBase
      backgroundColor="white"
      color="black"
      name="Schwarzkopf"
      client="Schwarzkopf"
      year="2011"
      description={
        <p>
          Conteúdo das páginas oficiais nas redes sociais com noticias
          relacionadas a marca. Estratégia de redes sociais com gestão do
          conteúdo da marca, deixando alinhada com o público alvo e aumentando a
          interatividade com os usuários.
        </p>
      }
      header={<h2 style={{ color: "black" }}>SCHWARZKOPF – SOCIAL MEDIA</h2>}
    >
      <div className="col-xs-12">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fschwarzkopf.jpg?alt=media&token=8166c9bc-c014-4ef9-9deb-eb7af80a3162"
          alt=""
        />
      </div>
    </CaseBase>
  )
}
