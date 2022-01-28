import React from 'react'
import { CaseBase } from '../caseBase'

export const Mondelez = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Mondelez"
        client='Mondelez'
        year='2013'
        description={<p>Para o lançamento do novo Halls Soft, criamos ações de ativação de marca, com promotoras, panfletagem e sampling, em diversas escolas e eventos.</p>}
        header={<h2 style={{ color: 'black' }}>AÇÕES DE SAMPLING – MONDELEZ</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/HALLS.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/mondelez02.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/mondelez01.jpg" alt="" />
        </div>
    </CaseBase>

}