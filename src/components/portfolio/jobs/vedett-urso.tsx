import React from 'react'
import { CaseBase } from '../caseBase'

export const Urso = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Urso"
        client='Interfood'
        year='2017'
        description={<p>Realizamos uma ação integrada para promover a cerveja Vedett. Nosso planejamento e criação criaram uma websérie, com a presença do embaixador da marca, o urso polar Blanche Le Bear. Levamos o mascote para conhecer a maior cidade do país, descobrir mais sobre o povo brasileiro e divulgar a marca.</p>}
        header={<h2 style={{ color: 'black' }}>VEDETT –  VEDETT ON THE ROAD</h2>}
    >
        <div className="col-xs-12">
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/208827987" frameBorder="0" allowFullScreen id='vimeo'></iframe>
            <iframe src="https://www.youtube.com/embed/LkVp7koxDEU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen id='vimeo'></iframe>
            <iframe src="https://www.youtube.com/embed/WEVfALGI85A" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen id='vimeo'></iframe>
        </div>
    </CaseBase>

} 