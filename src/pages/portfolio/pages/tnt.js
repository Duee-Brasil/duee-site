import React from 'react'
import './default.scss'

export default class TNT extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <h2 style={{ color: 'black' }}>SUA CARA SUA LUTA – TNT NO SPFW</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/191199581" frameborder="0" allowfullscreen id='vimeo'></iframe>
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Nossa equipe produziu um estande exclusivo e uma ativação para a TNT Energy Drink, durante o 42º São Paulo Fashion Week, que compartilhava GIFs da transformação feita com maquiagem.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> TNT Energy Drink/Grupo Petrópolis</p>
                    <p><b>DATA</b> 2016</p>
                </div>
            </div>
        </article>
    }
}