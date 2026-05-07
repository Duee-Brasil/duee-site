import React from 'react'

import { CaseBase } from '../caseBase'

export const Norpal = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="Norpal Construtora"
      color="black"
      description={
        <p>
          Nossa equipe desenvolveu a nova versão do site da Norpal Construtora,
          com conteúdo e layout direcionados para o público correto da empresa.
        </p>
      }
      header={<h2 style={{ color: 'black' }}>NORPAL – WEB</h2>}
      name="Norpal"
      year="2014"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fnorpal.jpg?alt=media&token=9277533e-82db-43eb-900f-79667d6fd009"
        />
      </div>
    </CaseBase>
  )
}
