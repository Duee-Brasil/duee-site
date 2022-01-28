import React from 'react'
import { CaseBase } from '../caseBase'

export const Mark = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Mark"
        client='BBC'
        year='2014'
        description={<p>Fizemos a produção do evento de divulgação da série Wild Brazil, da BBC, no Rio de Janeiro e São Paulo, com a presença de Mark Gatiss, roteirista e ator britânico das séries Sherlock e Doctor Who.</p>}
        header={<h2 style={{ color: 'black' }}>EVENTO WILD BRAZIL / MARK GATISS – BBC</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bbc01-1.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bbc02.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bbc03.jpg" alt="" />
        </div>
    </CaseBase>

}