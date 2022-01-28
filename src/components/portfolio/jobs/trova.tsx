import React from 'react'
import { CaseBase } from '../caseBase'

export const Trova = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Trova"
        client='Trova'
        year='2017'
        description={<p>Desenvolvemos o site da Trova, empresa de importação especializada no Travertino Romano, com mais de 15 anos de mercado. Além do site, também criamos e gerenciamos a campanha de mídia para a divulgação da marca e do endereço eletrônico.</p>}
        header={<h2 style={{ color: 'black' }}>WEBSITE – TROVA TRAVERTINO</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/01/trova01.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/01/trova02.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/01/trova03.jpg" alt="" />
        </div>
    </CaseBase>

}