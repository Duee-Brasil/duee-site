import React from 'react'
import { CaseBase } from '../caseBase'

export const SauzaM = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="SauzaM"
        client='Interfood'
        year='2012/2013/2014/2015'
        description={<p>Realizamos todo o planejamento estratégico e posicionamento de marca no Facebook, com compra de mídia, monitoramento de publicações e criação de conteúdo direcionado corretamente para o público da marca.</p>}
        header={<h2 style={{ color: 'black' }}>SAUZA TEQUILA – SOCIAL MEDIA</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/sauza01.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/sauza02.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/sauza03.jpg" alt="" />
        </div>
    </CaseBase>

}