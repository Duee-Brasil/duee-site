import React from 'react'
import { CaseBase } from '../caseBase'

export const LivingHNK = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="LivingHNK"
        client='Grupo Fit'
        year='2016'
        description={<p>Desenvolvemos o planejamento estratégico e posicionamento de marca no Facebook, além da gestão e criação de conteúdos, compra de mídia e monitoramento de publicações, resultados, concorrentes e público.</p>}
        header={<h2 style={{ color: 'black' }}>LIVING HNK – SOCIAL MEDIA</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/07/living01.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/07/living02.jpg" alt="" />
        </div>
    </CaseBase>

}