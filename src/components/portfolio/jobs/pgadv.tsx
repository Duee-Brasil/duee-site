import React from 'react'
import { CaseBase } from '../caseBase'

export const PGadv = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="PGadv"
        client='Pires e Gonçalves Advogados'
        year='2015/2016'
        description={<p>Criamos todo o planejamento estratégico e posicionamento da marca no Facebook e Linkedin, passando pela gestão de conteúdos, compra de mídia e monitoramento de público, concorrentes e alcance das publicações.</p>}
        header={<h2 style={{ color: 'black' }}>PG ADVOGADOS – SOCIAL MEDIA</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/07/pg_adv_01.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/07/pg_adv_02.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/07/pg_adv_03.jpg" alt="" />
        </div>
    </CaseBase>

}