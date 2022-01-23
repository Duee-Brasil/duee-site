import React from 'react'
import './default.css'

    export default class Sorteio extends React.Component {

        constructor(props) {
            super(props)
        }
    
        componentDidMount() {
            document.querySelector(".loading").style.visibility = 'hidden'
        }

        render () {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "#f3732b" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/header.png" alt="Starbucks Natal" />
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/premios.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/cover.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/kit-verao.png" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/kit-feed.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/premios-feed.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/participando.png" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/ultima.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/regras.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/summer.png" alt="" />
                </div>
            </div>

            <div className="row content describes">
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Com o intuito de espalhar o conceito de "alegria" de Casal Garcia, o concurso cultural teve como objetivo premiar os 10 seguidores mais criativos do Instagram da marca.
Era necessário apenas postar um Reels com o tema "Alegria em Boa Companhia", deixar o perfil da conta aberta e utilizar a #AlegriaEmBoaCompanhia para concorrer. 
Os melhores conteúdos ganharam um kit verão contendo uma câmera Instax, duas boias de flamingo, adesivos personalizados e um vinho Casal Garcia.
A Duee Brasil foi responsável pela ideia de criação, desenvolvimento e aplicação do concurso.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Casal Garcia</p>
                    <p><b>DATA</b> 2020</p>
                </div>
            </div>
        </article>
    }
    }