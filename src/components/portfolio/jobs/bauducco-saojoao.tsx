import React from 'react'
import { CaseBase } from '../caseBase'

export const SaoJoao = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="SaoJoao"
        client='Bauducco'
        year='2011'
        description={<p>Desenvolvemos uma campanha de ativação especial para a data de São João, com sampling de produtos, em Campina Grande e Caruaru – consideradas as cidades com as maiores festas de São João do país.</p>}
        header={<h2 style={{ color: 'black' }}>ATIVAÇÃO DE SÃO JOÃO – BAUDUCCO</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco03-1.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco01-2.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco02-1.jpg" alt="" />
        </div>
    </CaseBase>

}