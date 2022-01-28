import React from 'react'
import { CaseBase } from '../caseBase'

export const TNT = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="TNT"
        client='TNT Energy Drink/Grupo Petrópolis'
        year='2016'
        description={<p>Nossa equipe produziu um estande exclusivo e uma ativação para a TNT Energy Drink, durante o 42º São Paulo Fashion Week, que compartilhava GIFs da transformação feita com maquiagem.</p>}
        header={<h2 style={{ color: 'black' }}>SUA CARA SUA LUTA – TNT NO SPFW</h2>}
    >
        <div className="col-xs-12">
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/191199581" frameBorder="0" allowFullScreen id='vimeo'></iframe>
        </div>
    </CaseBase>

}