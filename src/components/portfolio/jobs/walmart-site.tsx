import React from 'react'
import { CaseBase } from '../caseBase'

export const WalmartM = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="WalmartM"
        client='Walmart Brasil'
        year='2012'
        description={<p>Ação de divulgação do site walmart.com para reforçar a campanha de compras de natal.</p>}
        header={<h2 style={{ color: 'black' }}>DIVULGAÇÃO DO SITE WALMART.COM</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2014/02/walm2.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2014/02/walm3.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2014/02/walm1.jpg" alt="" />
        </div>
    </CaseBase>

}