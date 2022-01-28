import React from 'react'
import { CaseBase } from '../caseBase'

export const SentirBem = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="SentirBem"
        client='Walmart Brasil'
        year='2012'
        description={<p>Realizamos uma blitz de divulgação dos produtos Sentir Bem, em parceria com o Walmart, com direito à massagem e degustação no local.</p>}
        header={<h2 style={{ color: 'black' }}>AÇÕES DE SAMPLING – SENTIR BEM</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/sentirbem01.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/sentirbem02.jpg" alt="" />
        </div>
    </CaseBase>

}