import React from 'react'
import './default.css'

export default class VejaPDV extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <h2 style={{ color: 'black' }}>VEJA – AÇÃO EM PDV</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/veja03.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/veja01.jpg" alt="" />
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Ativação da revista Veja em diversas bancas de jornal espalhadas pela cidade de São Paulo, e realização de pesquisa de opinião sobre a marca.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Editora Abril</p>
                    <p><b>DATA</b> 2014</p>
                </div>
            </div>
        </article>
    }
}