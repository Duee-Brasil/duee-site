import React from 'react'
import { CaseBase } from '../caseBase'

export const Huggies = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Huggies"
        client='Kimberly Clark'
        year='2011'
        description={<p>Monitoramento e gestão de redes sociais e gerenciamento de crise.</p>}
        header={<h2 style={{ color: 'black' }}>HUGGIES TURMA DA MÔNICA</h2>}
    >
        <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/huggies_gde.jpg" alt="" />
                </div>
    </CaseBase>

}