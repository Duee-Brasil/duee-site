import React from 'react'
import { CaseBase } from '../caseBase'

export const Hersheys = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Hersheys"
        client='Hershey’s'
        year='2016'
        description={<p>Nossa equipe criou uma campanha de ação para o lançamento do Mini Mais. A ativação aconteceu no Rio de Janeiro e em São Paulo e contou com promotores e sampling do novo produto.</p>}
        header={<h2 style={{ color: 'black' }}>HERSHEY’S – AÇÃO DE SAMPLING</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/06/03-1.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/06/04-1.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/06/01-1.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/06/02-1.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/06/05.jpg" alt="" />
        </div>
    </CaseBase>

}