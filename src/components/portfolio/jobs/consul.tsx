import React from 'react'
import { CaseBase } from '../caseBase'

export const Consul = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Consul"
        client='Whirlpool'
        year='2015'
        description={<p>Nosso time criou espaços com promotores, estandes e demonstração dos produtos para divulgar os benefícios da nova linha da Consul, com ambientações diferenciadas e atrativas.</p>}
        header={<h2 style={{ color: 'black' }}>SHOWROOM CONSUL</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Consul1.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Consul2.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Consul4.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/consul9.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Consul5.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Consul7.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Consul8.jpg" alt="" />
        </div>
    </CaseBase>

}