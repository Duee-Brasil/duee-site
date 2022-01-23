import React from 'react'
import './default.css'

    export default class Yelloween extends React.Component {

        constructor(props) {
            super(props)
        }
    
        componentDidMount() {
            document.querySelector(".loading").style.visibility = 'hidden'
        }

        render () {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "#fff" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/header.png" alt="Yelloween" />
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12 col-md-2 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Anúncio-parte-cima.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Anúncio-parte-baixo.png" alt="" width="120px" height="120px" style={{ display: "block !important"}} />
                </div>
                <div className="col-xs-12 col-md-5 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Banner_1080x1920.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Banner_200x200.png" alt="" />
                </div>
                <div className="col-xs-12 col-md-5 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Post_1080x1080.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Banner_840x315.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Banner_300x250.png" alt="" />
                </div>
            </div>

            <div className="row content describes" style={{ color: "#000" }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Para comemorar o Yelloween da Veuve Clicquot, fizemos uma campanha em parceria com a Pati Piva, com o tema "Doces ou Travessuras".</p>
<p>Essa ativação teve como foco a conversão, na compra de uma Veuve Clicquot Brut 750ML, ganhava os doces exclusivos da Pati Piva inspirados no halloween.
A Duee Brasil foi responsável pela criação, desenvolvimento e execução da campanha.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Veuve Clicquot</p>
                    <p><b>DATA</b> 2021</p>
                </div>
            </div>
        </article>
    }
    }