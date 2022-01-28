import React from 'react'
import { CaseBase } from '../caseBase'

export const Calminex = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Calminex"
        client='Hypermarcas'
        year='2013'
        description={<p>Nada melhor do que receber massagens depois de uma dura e desafiadora caminhada, né? Pensando nisso, nós criamos e montamos o Espaço Calminex, com profissionais especializados em massagem durante a Corrida e Caminhada Walmart.</p>}
        header={<h2 style={{ color: 'black' }}>ESTANDE CALMINEX</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/calminex01.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/calminex02.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/calminex03.jpg" alt="" />
        </div>
    </CaseBase>

}