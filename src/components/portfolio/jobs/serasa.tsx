import React from 'react'
import { CaseBase } from '../caseBase'

export const Serasa = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Serasa"
        client='Serasa Experian'
        year='2011'
        description={<p>Criação digital e campanhas para lançamento do Alerta de Identidade. Realização de campanhas de anúncios gráficos e links patrocinados em diversas redes para o lançamento do produto.</p>}
        header={<h2 style={{ color: 'black' }}>SERASA EXPERIAN</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/serasa.jpg" alt="" />
        </div>
    </CaseBase>

}