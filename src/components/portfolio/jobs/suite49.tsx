import React from 'react'
import { CaseBase } from '../caseBase'

export const Suite = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Suite"
        client='Suite 49 Travels'
        year='2017/2018'
        description={<p>Desenvolvemos o planejamento estratégico e o posicionamento da marca no Facebook, Instagram e Pinterest, respeitando a comunicação específica de cada mídia. Em seguida, fizemos a criação e a gestão de conteúdos, a compra de mídia e o monitoramento das publicações.</p>}
        header={<h2 style={{ color: 'black' }}>SUITE 49 TRAVELS – SOCIAL MEDIA</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/01/suite49_01.jpg" alt="" />
        </div>
    </CaseBase>

}