import React from 'react'
import { CaseBase } from '../caseBase'

export const AESEletropaulo = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="AESEletropaulo"
        client='AES Eletropaulo'
        year='2012'
        description={<p>Em parceria com a Phillips, criamos um projeto de casa automatizada, que usa a tecnologia SmartGrid, para promover o sistema.</p>}
        header={<h2 style={{ color: 'black' }}>SMART HOUSE – AES ELETROPAULO</h2>}
    >
        <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/aes02.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/aes01.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/aes03.jpg" alt="" />             
                </div>

    </CaseBase>

}