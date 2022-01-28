import React from 'react'
import { CaseBase } from '../caseBase'

export const Crownshow = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Crownshow"
        client='Crowshow'
        year='2012'
        description={<p>Nossa equipe é responsável pela criação e manutenção do site da Crowshow. A empresa é uma iniciativa para financiamento coletivo de eventos; desenvolvemos todo o site com base no planejamento das necessidades da empresa e da usabilidade dos usuários.</p>}
        header={<h2 style={{ color: 'black' }}>Crowshow</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2014-03-25-at-19.39.52.png" alt="" />
        </div>
    </CaseBase>

}