import React from 'react'
import { CaseBase } from '../caseBase'

export const Azzurra = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Azzurra"
        client='Azzurra Gin'
        year='2021'
        description={<p>Idealizado em 2018, o gin foi inspirado na Ilha de Montecristo, localizada no arquipélago da Toscana, Itália.
            O local paradisíaco rodeado por águas cristalinas se encaixou perfeitamente com a proposta do gin.
            Azzurra se resume em uma experiência única da descoberta do paraíso, na qual basta apenas um gole para nunca mais esquecer das suas nuances e botânicos sublimes.
            A Duee Brasil foi responsável pela estratégia de comunicação, lançamento e planejamento da marca nas redes sociais.
        </p>}
        header='https://portfolio.duee.com.br/wp-content/uploads/2021/05/header.png'
    >
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/post-1-2-3_03.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/3-4-5_01.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/post-4_01.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/post-1-2-3_02.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/3-4-5_02.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/post-4_02.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/post-1-2-3_01.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/3-4-5_03.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/post-4_03.png" alt="" />
        </div>

    </CaseBase>

}