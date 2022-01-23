import React from 'react'
import './default.css'

export default class BBChd extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <h2 style={{ color: 'black' }}>BBC HD – SOCIAL MEDIA</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bbc01.jpg" alt="" />
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Conteúdo da página oficial no Facebook e perfil no Twitter com notícias e a programação do canal. Criação de conteúdo focado na programação da BBC HD Brasil, bem como interação direta com os usuários sobre os programas exibidos, além de SAC 2.0 para esclarecimentos de dúvidas em geral. Compra de mídia e estratégia de Ads.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> BBC</p>
                    <p><b>DATA</b> 2012/2014</p>
                </div>
            </div>
        </article>
    }
}