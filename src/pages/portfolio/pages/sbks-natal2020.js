import React from 'react'
import './default.scss'

export default class Natal2020 extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "#D91638" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/11/headder.png" alt="Starbucks Natal" />
            </div>
            <div className="row conteudo content">
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
            </div>

            <div className="row content describes">
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>O Natal já invadiu a Starbucks e a Duee Brasil tem o orgulho de fazer parte dessa campanha incrível.
Somos responsáveis por todo o material de PDV da Campanha de Natal da Starbucks Brasil!</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Starbucks</p>
                    <p><b>DATA</b> 2020</p>
                </div>
            </div>
        </article>
    }
}