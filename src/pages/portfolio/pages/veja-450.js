import React from 'react'
import './default.css'

export default class Veja450 extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <h2 style={{ color: 'black' }}>REVISTA VEJA – RIO 450 ANOS</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/156904234" frameBorder="0" allowFullScreen id='vimeo'></iframe>
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Criamos uma campanha de ativação para a Revista Veja para celebrar os 450 anos da cidade do Rio de Janeiro. Nossa ação contou com promotores e sampling na Praia do Leblon, um dos pontos turísticos mais visitados da cidade.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Grupo Abril</p>
                    <p><b>DATA</b> 2015</p>
                </div>
            </div>
        </article>
    }
}