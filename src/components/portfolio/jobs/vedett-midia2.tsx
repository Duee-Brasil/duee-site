import React from "react"
import { CaseBase } from "../caseBase"

export const VedettM = () => {
  return (
    <CaseBase
      backgroundColor="white"
      color="black"
      name="VedettM"
      client="Interfood"
      year="2013/2016"
      description={
        <p>
          Nosso time criou o planejamento estratégico e posicionamento da marca,
          mais a gestão e os conteúdos para redes sociais, promoções e ativações
          de marca, compra de mídia e monitoramento de publicações.
        </p>
      }
      header={<h2 style={{ color: "black" }}>VEDETT – SOCIAL MEDIA</h2>}
    >
      <div className="col-xs-12">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fvedett-socialmedia.jpg?alt=media&token=e6dab73e-a0b8-4bf8-aa68-a477fa7e2461"
          alt=""
        />
        <img
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/vedett03.jpg"
          alt=""
        />
        <img
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/vedett02.jpg"
          alt=""
        />
      </div>
    </CaseBase>
  )
}
