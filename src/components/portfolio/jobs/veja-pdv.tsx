import React from 'react'
import { CaseBase } from '../caseBase'

export const VejaPDV = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="VejaPDV"
        client='Editora Abril'
        year='2014'
        description={<p>Ativação da revista Veja em diversas bancas de jornal espalhadas pela cidade de São Paulo, e realização de pesquisa de opinião sobre a marca.</p>}
        header={<h2 style={{ color: 'black' }}>VEJA – AÇÃO EM PDV</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/veja03.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/veja01.jpg" alt="" />
        </div>
    </CaseBase>

}