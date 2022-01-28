import React from 'react'
import { CaseBase } from '../caseBase'

export const Veja450 = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Veja450"
        client='Grupo Abril'
        year='2015'
        description={<p>Criamos uma campanha de ativação para a Revista Veja para celebrar os 450 anos da cidade do Rio de Janeiro. Nossa ação contou com promotores e sampling na Praia do Leblon, um dos pontos turísticos mais visitados da cidade.</p>}
        header={<h2 style={{ color: 'black' }}>REVISTA VEJA – RIO 450 ANOS</h2>}
    >
        <div className="col-xs-12">
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/156904234" frameBorder="0" allowFullScreen id='vimeo'></iframe>
        </div>
    </CaseBase>

}