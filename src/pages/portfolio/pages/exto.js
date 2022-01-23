import React from 'react'
import './default.css'

export default class Exto extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <h2 style={{ color: 'black' }}>MÍDIA DIGITAL E CONTEÚDO – EXTO</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Layout_Hotsite_Conceito_02.jpg" alt="" />
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Criação digital, planejamento e execução de campanhas para lançamento de empreendimentos. Criação e execução de campanhas de anúncios gráficos e links patrocinados nas redes: Google AdWords, Yahoo! Display Network e Facebook Ads, para o lançamento de um empreendimento comercial.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> EXTO</p>
                    <p><b>DATA</b> 2013</p>
                </div>
            </div>
        </article>
    }
}