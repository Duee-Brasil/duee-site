import React from 'react'
import './default.scss'

export default class Anatomy extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <h2 style={{ color: 'black' }}>CODORNÍU – WEB SÉRIE – THE DRINK’S ANATOMY</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/226356033" frameBorder="0" allowFullScreen id='vimeo'></iframe>
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Para promover o sabor de Codorníu no verão, criamos uma websérie de 5 episódios, onde em cada um deles, apresentamos receitas preparadas com o famoso cava espanhol. O resultado foi de dar água na boca.</p>
                    <p><a href="https://www.youtube.com/watch?v=OoXnsNyeEzU&list=PLWceFV7hyjj0yhFPCBHwDGDN29KCOhTW5">Veja aqui todos os episódios.</a></p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Codorníu</p>
                    <p><b>DATA</b> 2017</p>
                </div>
            </div>
        </article>
    }
}