import React from 'react'
import { CaseBase } from '../caseBase'

export const Exto = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Exto"
        client='EXTO'
        year='2013'
        description={<p>Criação digital, planejamento e execução de campanhas para lançamento de empreendimentos. Criação e execução de campanhas de anúncios gráficos e links patrocinados nas redes: Google AdWords, Yahoo! Display Network e Facebook Ads, para o lançamento de um empreendimento comercial.</p>}
        header={<h2 style={{ color: 'black' }}>MÍDIA DIGITAL E CONTEÚDO – EXTO</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Layout_Hotsite_Conceito_02.jpg" alt="" />
        </div>
    </CaseBase>

}