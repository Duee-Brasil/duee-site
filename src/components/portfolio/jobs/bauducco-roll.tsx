import React from 'react'
import { CaseBase } from '../caseBase'

export const Roll = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Roll"
        client='Bauducco'
        year='2014'
        description={<p>Realizamos ações para o produto Roll, da Bauducco, com teatro infantil, oficina de customização do produto, sampling, promotores e um mascote fantasiado.</p>}
        header={<h2 style={{ color: 'black' }}>BAUDUCCO – TEATRO INFANTIL E OFICINA ROLL</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco1.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco2.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco3.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco4-1.jpg" alt="" />
        </div>
    </CaseBase>

}