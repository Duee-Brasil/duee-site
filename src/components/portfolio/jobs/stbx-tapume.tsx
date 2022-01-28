import React from 'react'
import { CaseBase } from '../caseBase'

export const StarbucksTapume = () => {
    return <CaseBase
        backgroundColor='black'
        name="StarbucksTapume"
        client='Starbucks'
        year='2020'
        description={<>
            <p>Confecção de um tapume no Aeroporto de Brasília para comunicar uma nova loja da Starbucks Brasil em breve no local.</p>
        </>}
        header="https://portfolio.duee.com.br/wp-content/uploads/2020/10/capastarbucks2.png"
    >
        <div className="col-12 ">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/Lambe-lambe-aplicaçao_V3.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/TAPUME-STARBUCKS2_V3-05.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/Artboard-3.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/TAPUME-STARBUCKS_V3-03.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/TAPUME-STARBUCKS_V2-01.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/TAPUME-STARBUCKS_V2-04.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/TAPUME-STARBUCKS_V2-02.png" alt="" />
        </div>
        <div className="col-12 ">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/WhatsApp-Image-2020-08-28-at-6.56.51-PM.jpeg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/WhatsApp-Image-2020-08-28-at-6.56.52-PM-1.jpeg" alt="" />
        </div>
    </CaseBase>

}