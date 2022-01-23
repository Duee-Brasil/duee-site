import React from 'react'
import './default.css'

export default class Trova extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <h2 style={{ color: 'black' }}>WEBSITE – TROVA TRAVERTINO</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/01/trova01.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/01/trova02.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/01/trova03.jpg" alt="" />
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Desenvolvemos o site da Trova, empresa de importação especializada no Travertino Romano, com mais de 15 anos de mercado. Além do site, também criamos e gerenciamos a campanha de mídia para a divulgação da marca e do endereço eletrônico.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Trova</p>
                    <p><b>DATA</b> 2017</p>
                </div>
            </div>
        </article>
    }
}