import React from 'react'

import { CaseBase } from '../caseBase'

export const Cbeebies = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="BBC"
      color="black"
      description={
        <p>
          Em uma parceria com a Livraria Cultura, fizemos a divulgação do app
          CBeebis. Criamos um espaço lúdico e bem colorido, recheado de tablets
          para que as crianças pudessem experimentar as atividades e conteúdos
          disponíveis gratuitamente.
        </p>
      }
      header={
        <h2 style={{ color: 'black' }}>
          BBC – ESPAÇOS CBEEBIES/LIVRARIA CULTURA
        </h2>
      }
      name="Cbeebies"
      year="2016"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/06/03.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/06/02.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2016/06/04.jpg"
        />
        <img
          alt=""
          src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fcbeebies.jpg?alt=media&token=e4b02ffb-d1c8-4316-946a-d5efb9b33ae2"
        />
      </div>
    </CaseBase>
  )
}
