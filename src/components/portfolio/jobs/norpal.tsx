import React from 'react'
import { CaseBase } from '../caseBase'

export const Norpal = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Norpal"
        client='Norpal Construtora'
        year='2014'
        description={<p>Nossa equipe desenvolveu a nova versão do site da Norpal Construtora, com conteúdo e layout direcionados para o público correto da empresa.</p>}
        header={<h2 style={{ color: 'black' }}>NORPAL – WEB</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/norpal1-1.jpg" alt="" />
        </div>
    </CaseBase>

}