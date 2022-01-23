import React from 'react'
import './default.css'

    export default class Azzurra extends React.Component {

        constructor(props) {
            super(props)
        }
    
        componentDidMount() {
            document.querySelector(".loading").style.visibility = 'hidden'
        }

        render () {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "#fff" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/header.png" alt="Azzurra gin" />
            </div>
            <div className="row conteudo content">
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
            </div>

            <div className="row content describes" style={{ color: "#000" }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Idealizado em 2018, o gin foi inspirado na Ilha de Montecristo, localizada no arquipélago da Toscana, Itália.
O local paradisíaco rodeado por águas cristalinas se encaixou perfeitamente com a proposta do gin.
Azzurra se resume em uma experiência única da descoberta do paraíso, na qual basta apenas um gole para nunca mais esquecer das suas nuances e botânicos sublimes.
A Duee Brasil foi responsável pela estratégia de comunicação, lançamento e planejamento da marca nas redes sociais.
</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Azzurra Gin</p>
                    <p><b>DATA</b> 2021</p>
                </div>
            </div>
        </article>
    }
    }