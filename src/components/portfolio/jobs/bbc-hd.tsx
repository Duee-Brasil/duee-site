import React from "react"
import { CaseBase } from "../caseBase"

export const BBChd = () => {
  return (
    <CaseBase
      backgroundColor="white"
      color="black"
      name="BBChd"
      client="BBC"
      year="2012/2014"
      description={
        <p>
          Conteúdo da página oficial no Facebook e perfil no Twitter com
          notícias e a programação do canal. Criação de conteúdo focado na
          programação da BBC HD Brasil, bem como interação direta com os
          usuários sobre os programas exibidos, além de SAC 2.0 para
          esclarecimentos de dúvidas em geral. Compra de mídia e estratégia de
          Ads.
        </p>
      }
      header={<h2 style={{ color: "black" }}>BBC HD – SOCIAL MEDIA</h2>}
    >
      <div className="col-xs-12">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fbbc-hd.jpg?alt=media&token=18d7ea8c-8c79-4d6a-83a6-a191843c907c"
          alt=""
        />
      </div>
    </CaseBase>
  )
}
