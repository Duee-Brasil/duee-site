import React from "react"
import { CaseBase } from "../caseBase"

export const Roadshow = () => {
  return (
    <CaseBase
      backgroundColor="white"
      color="black"
      name="Roadshow"
      client="Starbucks"
      year="2017"
      description={
        <p>
          Planejamos um evento exclusivo para a Starbucks, chamado Roadshow
          Winter, onde foi apresentado o novo cardápio da marca. Criamos
          materiais de PDV, infláveis e muito mais.
        </p>
      }
      header={<h2 style={{ color: "black" }}>STARBUCKS – ROADSHOW WINTER</h2>}
    >
      <div className="col-xs-12">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fstarbucks-roadshow.jpeg?alt=media&token=f599fced-7c45-4eae-982a-2c3e2fc4a933"
          alt=""
        />
        <img
          src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/26cdf704-a384-49b0-98a8-56bace3a4aa0.jpeg"
          alt=""
        />
        <img
          src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/7ab56e51-4356-466a-abc9-8d3df2af1c7f.jpeg"
          alt=""
        />
        <img
          src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/19b9b7f7-8dfb-4861-a4b6-9d025e5b4772.jpeg"
          alt=""
        />
        <img
          src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/5923a902-b63a-4b94-a0ae-e0b7a7bc44dd.jpeg"
          alt=""
        />
        <img
          src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/f1b7b9b5-8c3b-4171-b78a-30998043de40.jpeg"
          alt=""
        />
        <img
          src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/a8c17d50-cc9e-4704-83bf-340e8b9c2776.jpeg"
          alt=""
        />
      </div>
    </CaseBase>
  )
}
