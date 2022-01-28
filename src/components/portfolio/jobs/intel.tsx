import React from 'react'
import { CaseBase } from '../caseBase'

export const Intel = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Intel"
        client='Intel'
        year='2014'
        description={<p>Planejamos uma campanha de incentivo para a equipe interna de distribuidores da Intel, com cartazes, folders e canecas personalizadas.</p>}
        header={<h2 style={{ color: 'black' }}>INTEL RACING – CAMPANHA DE INCENTIVO</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/intel2.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/intel3.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/intel5.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/intel4.jpg" alt="" />
        </div>
    </CaseBase>

}