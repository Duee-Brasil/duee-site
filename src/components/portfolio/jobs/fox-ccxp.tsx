import React from 'react'

import { CaseBase } from '../caseBase'

export const FoxCcxp = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Fox Film do Brasil"
      color="black"
      description={
        <p>
          Desenvolvemos ambientes incríveis para a Fox, durante a Comic Con
          Experience 2014, com estandes, promotores fantasiados de personagens,
          ativações de filmes e muito mais.
        </p>
      }
      header={<h2 style={{ color: 'black' }}>FOX – CCXP 2014</h2>}
      name="FoxCcxp"
      year="2014"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Ffox-ccxp.jpg?alt=media&token=d495df31-fd2d-42fa-8cf7-fa55ba2c918e"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/fox2.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/fox3.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/fox4.jpg"
        />
      </div>
    </CaseBase>
  )
}
