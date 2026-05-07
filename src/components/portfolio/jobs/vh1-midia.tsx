import React from 'react'

import { CaseBase } from '../caseBase'

export const VH1Midia = () => {
  return (
    <CaseBase
      backgroundColor="white"
      client="VIACOM Brasil"
      color="black"
      description={
        <>
          <p>
            Conteúdo da página oficial no Facebook e perfil no Twitter com
            noticias sobre música, celebridades e muito mais.
          </p>
          <p>
            Publicações diárias com atualizações de noticias em tempo real,
            abordagem de assuntos sobre as novidades do mundo pop e da
            programação do canal, e realização de posts interativos e concursos
            culturais.
          </p>
        </>
      }
      header={<h2 style={{ color: 'black' }}>VH1 – SOCIAL MEDIA</h2>}
      name="VH1Midia"
      year="2011/2012"
    >
      <div className="col-xs-12">
        <img
          alt=""
          src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fvh1.jpg?alt=media&token=d37e80ae-5f5c-4022-bf5c-e258c21eb6fc"
        />
      </div>
    </CaseBase>
  )
}
