import React from 'react'
import { CaseBase } from '../caseBase'

export const Jimmy = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Jimmy"
        client='Walmart Brasil'
        year='2011/2012/2013'
        description={<p>Planejamos uma campanha de ativação nos Restaurantes Walmart e Fotocenter, com promotores fantasiados dos personagens Jimmy Click, Garfo e Faca.</p>}
        header={<h2 style={{ color: 'black' }}>ATIVAÇÕES WALMART – JIMMY CLICK / GARFO E FACA</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/jimmy01.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/jimmy02.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/jimmy03.jpg" alt="" />
        </div>
    </CaseBase>

}