import React from 'react'
import { CaseBase } from '../caseBase'

export const VH1Midia = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="VH1Midia"
        client='VIACOM Brasil'
        year='2011/2012'
        description={<>
        <p>Conteúdo da página oficial no Facebook e perfil no Twitter com noticias sobre música, celebridades e muito mais.</p>
                    <p>Publicações diárias com atualizações de noticias em tempo real, abordagem de assuntos sobre as novidades do mundo pop e da programação do canal, e realização de posts interativos e concursos culturais.</p>
        </>}
        header={<h2 style={{ color: 'black' }}>VH1 – SOCIAL MEDIA</h2>}
    >
        <div className="col-xs-12">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/VH1-FACEBOOK.jpg" alt="" />
                </div>
    </CaseBase>

}