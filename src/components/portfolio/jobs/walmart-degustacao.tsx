import React from 'react'
import { CaseBase } from '../caseBase'

export const Degustacao = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Degustacao"
        client='Walmart Brasil'
        year='2011/2012'
        description={<p>Projeto de degustação anual dos produtos Walmart em mais de 400 lojas em todo o país. Recrutamento e seleção de promotores especializados em abordagem e degustação de produtos.</p>}
        header={<h2 style={{ color: 'black' }}>WALMART – AÇÕES DE DEGUSTAÇÃO E SAMPLING</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/wm02.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/wm03.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/wm01.jpg" alt="" />
        </div>
    </CaseBase>

}