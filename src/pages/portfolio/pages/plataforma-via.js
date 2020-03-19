import React from 'react'
import './default.scss'

export default class Plataforma extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <h2 style={{ color: 'black' }}>PLATAFORMA DIGITAL – INSTITUTO VIA DE ACESSO</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://duee.com.br/Site_2018/wp-content/uploads/2017/07/Apresentacao_Via.mp4" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/site_via01-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/via_acesso01.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/via_acesso02.jpg" alt="" />
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Somos os responsáveis por colocar o Instituto na internet. Nossa equipe criou o novo site, um blog, os conteúdos para redes sociais (Facebook, Instagram, Linkedin), gerenciamento de conteúdos, monitoramento de publicações e compra de mídia.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Instituto Via de Acesso</p>
                    <p><b>DATA</b> 2017</p>
                </div>
            </div>
        </article>
    }
}