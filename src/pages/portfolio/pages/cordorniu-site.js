import React from 'react'
import './default.css'

export default class CordorniuSite extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <h2 style={{ color: 'black' }}>WEBSITE CODORNÍU</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/05/Captura-de-Tela-2017-05-26-a%CC%80s-16.45.37.png" alt="" />
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Criamos o posicionamento e o planejamento estratégico da marca para construir os conteúdos das redes sociais. Fazemos também a constante compra de mídia, gestão de conteúdos e monitoramento de publicações, público e concorrentes.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Codorníu</p>
                    <p><b>DATA</b> 2015</p>
                </div>
            </div>
        </article>
    }
}