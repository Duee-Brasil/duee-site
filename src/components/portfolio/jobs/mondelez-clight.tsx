import React from 'react'
import { CaseBase } from '../caseBase'

export const Clight = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Clight"
        client='Mondelez'
        year='2016'
        description={<p>Criamos os materiais de PDV para a ação Movimento 3x1, da marca Clight, com promotoras, estandes e mecânica compre-e-ganhe exclusiva.</p>}
        header={<h2 style={{ color: 'black' }}>CLIGHT – MOVIMENTO 3×1</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/clight1.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/clight3.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/clight2.jpg" alt="" />
        </div>
    </CaseBase>

}