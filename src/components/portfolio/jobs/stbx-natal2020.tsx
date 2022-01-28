import React from 'react'
import { CaseBase } from '../caseBase'

export const Natal2020 = () => {
    return <CaseBase
        backgroundColor='#D91638'
        name="Natal2020"
        client='Starbucks'
        year='2020'
        description={<>
            <p>O Natal já invadiu a Starbucks e a Duee Brasil tem o orgulho de fazer parte dessa campanha incrível.
                Somos responsáveis por todo o material de PDV da Campanha de Natal da Starbucks Brasil!</p>
        </>}
        header="https://portfolio.duee.com.br/wp-content/uploads/2020/11/headder.png"
    >
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/11/MG_1370-scaled.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/11/MG_1362-scaled.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/11/MG_1329-scaled.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/11/MG_1359-scaled.jpg" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/11/MG_1338-scaled.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/11/MG_1378-scaled.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/11/MG_1374-scaled.jpg" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/11/MG_1383-scaled.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/11/MG_1340-scaled.jpg" alt="" />
        </div>
    </CaseBase>

}