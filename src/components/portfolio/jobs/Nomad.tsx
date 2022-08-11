import React from 'react'
import { CaseBase } from '../caseBase'

export const Nomad = () => {
    return <CaseBase
        backgroundColor='black'
        color='white'
        name="Nomad"
        client='Nomad'
        year='2022'
        description={<p>A Nomad é uma empresa de fintech que possibilita soluções financeiras de um jeito fácil e prático, propondo novas formas de administrar seu dinheiro e diversificar seus investimentos. Com ela, você pode ter uma conta em dólar 100% digital, explorando possibilidades de compra, economia e poupança enquanto expande suas fronteiras para universos nunca antes imaginados. A Duee Brasil foi responsável pela roteirização, criação de campanhas publicitárias e produção dos vídeos.</p>}
        header="https://portfolio.duee.com.br/wp-content/uploads/2022/08/header-1.png"
    >
        <div className="col-xs-12">
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2022/08/Video01_V7.mp4" />
        </div>
    </CaseBase>

}