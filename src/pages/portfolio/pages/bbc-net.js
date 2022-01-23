import React from 'react'
import './default.css'

export default class BBCNet extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
            <h2 style={{ color: 'black' }}>CONVENÇÃO NET – BBC HD</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/HEADER_1-1.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                {/* <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/video_site_starbucks.mp4" /> */}
                <div className="col-xs-12">
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/65856195" id="vimeo" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Em conjunto com a BBC HD Brasil, realizamos a cobertura em tempo real dos 5 dias da convenção anual de vendas NET – O Controle é Nosso.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> BBC</p>
                    <p><b>DATA</b> 2013</p>
                </div>
            </div>
        </article>
    }
}