import React from 'react'
import { CaseBase } from '../caseBase'

export const Draft = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Draft"
        client='Starbucks'
        year='2018'
        description={<>
            <p>Para divulgar o lançamento do Starbucks DRAFT Nitro, desenvolvemos o key visual da campanha e todo o material de divulgação para as redes sociais. Criamos também alguns materiais gráficos para reforçar a campanha.</p>
        </>}
        header="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png"
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V3-2.png" alt="" />
        </div>
        <div className="col-xs-12 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/FB_IG-Starbucks-NITRODRAFT-1.mp4" alt="" />
        </div>
        <div className="col-xs-12 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/DISPLAY-ANIMADO-MOCKUP.mp4" alt="" />
        </div>
    </CaseBase>

}