import React from 'react'
import { CaseBase } from '../caseBase'

export const Verao = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Verao"
        client='Walmart Brasil'
        year='2011/2012'
        description={<p>Ativações da farmácia Walmart em 21 praias de todo Brasil.</p>}
        header={<h2 style={{ color: 'black' }}>AÇÕES DE VERÃO – FARMÁCIA WALMART</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/praia01.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/praia02.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/praia03.jpg" alt="" />
        </div>
    </CaseBase>

}