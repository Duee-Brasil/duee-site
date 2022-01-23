import React from 'react'
import './default.css'

export default class Corrida extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <h2 style={{ color: 'black' }}>CORRIDA WALMART 2013</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/76434799" id="vimeo" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Planejamos uma campanha de ativação, com ações específicas para a Corrida Anual Walmart. A produção completa do evento também foi feita por nossa equipe.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Walmart Brasil</p>
                    <p><b>DATA</b> 2011/2012/2013</p>
                </div>
            </div>
        </article>
    }
}