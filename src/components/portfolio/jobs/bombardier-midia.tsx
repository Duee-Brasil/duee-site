import React from 'react'
import { CaseBase } from '../caseBase'

export const BombardierM = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="BombardierM"
        client='Interfood'
        year='2015/2016'
        description={<p>Construímos todo o planejamento estratégico, posicionamento de marca, gestão de conteúdo, compra de mídia e monitoramento para as redes sociais da Bombardier, com base na campanha vigente, English is Better!</p>}
        header={<h2 style={{ color: 'black' }}>BOMBARDIER – SOCIAL MEDIA</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bombardier01.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bombardier02.jpg" alt="" />
        </div>
    </CaseBase>

}