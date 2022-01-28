import React from 'react'
import { CaseBase } from '../caseBase'

export const BBCNet = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="BBCNet"
        client='BBC'
        year='2014'
        description={<p>Em conjunto com a BBC HD Brasil, realizamos a cobertura em tempo real dos 5 dias da convenção anual de vendas NET – O Controle é Nosso.</p>}
        header={<h2 style={{ color: 'black' }}>CONVENÇÃO NET – BBC HD</h2>}
    >
        <div className="col-xs-12">
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/65856195" id="vimeo" frameBorder="0" allowFullScreen></iframe>
        </div>
    </CaseBase>

}