import React from 'react'
import { CaseBase } from '../caseBase'

export const FoxCcxp = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="FoxCcxp"
        client='Fox Film do Brasil'
        year='2014'
        description={<p>Desenvolvemos ambientes incríveis para a Fox, durante a Comic Con Experience 2014, com estandes, promotores fantasiados de personagens, ativações de filmes e muito mais.</p>}
        header={<h2 style={{ color: 'black' }}>FOX – CCXP 2014</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/fox1-1.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/fox2.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/fox3.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/fox4.jpg" alt="" />
        </div>
    </CaseBase>

}