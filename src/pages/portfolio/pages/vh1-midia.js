import React from 'react'
import './default.scss'

export default class VH1Midia extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <h2 style={{ color: 'black' }}>VH1 – SOCIAL MEDIA</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/VH1-FACEBOOK.jpg" alt="" />
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Conteúdo da página oficial no Facebook e perfil no Twitter com noticias sobre música, celebridades e muito mais.</p>
                    <p>Publicações diárias com atualizações de noticias em tempo real, abordagem de assuntos sobre as novidades do mundo pop e da programação do canal, e realização de posts interativos e concursos culturais.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> VIACOM Brasil</p>
                    <p><b>DATA</b> 2011/2012</p>
                </div>
            </div>
        </article>
    }
}