import React from 'react'

import { CaseBase } from '../caseBase'

export const Nickledoen = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="VIACOM BRASIL"
      color="black"
      description={
        <p>
          Projeto especial de interação com os fãs do canal. Criação de conteúdo
          e interação direta com os usuários, além de alimentar o principal blog
          do canal com notícias e novidades das principais celebridades da Nick.
        </p>
      }
      header={<h2 style={{ color: 'black' }}>NICKELODEON – SOCIAL MEDIA</h2>}
      name="Nickledoen"
      year="2011/2012"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fnickelodeon.png?alt=media&token=b46e200f-fe97-485f-849c-2dfb596268f2"
        />
      </div>
    </CaseBase>
  )
}
