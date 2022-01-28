import React from 'react'
import { CaseBase } from '../caseBase'

export const CointreauM = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="CointreauM"
        client='Interfood'
        year='2015/2016'
        description={<p>Nossa equipe desenvolveu o planejamento estratégico e posicionamento de marca no Facebook, para então colocar em prática a compra de mídia, gestão de conteúdo e monitoramento constante.</p>}
        header={<h2 style={{ color: 'black' }}>COINTREAU – SOCIAL MEDIA</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/cointreau01.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/cointreau02.jpg" alt="" />
        </div>
    </CaseBase>

}