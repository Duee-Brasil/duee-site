import React from 'react'
import { CaseBase } from '../caseBase'

export const Corrida = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Corrida"
        client='Walmart Brasil'
        year='2011/2012/2013'
        description={<p>Planejamos uma campanha de ativação, com ações específicas para a Corrida Anual Walmart. A produção completa do evento também foi feita por nossa equipe.</p>}
        header={<h2 style={{ color: 'black' }}>CORRIDA WALMART 2013</h2>}
    >
        <div className="col-xs-12">
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/76434799" id="vimeo" frameBorder="0" allowFullScreen></iframe>
        </div>
    </CaseBase>

}