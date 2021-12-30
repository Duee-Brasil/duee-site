import React from 'react'
import './default.scss'

export default class Urso extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <h2 style={{ color: 'black' }}>VEDETT –  VEDETT ON THE ROAD</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/208827987" frameBorder="0" allowFullScreen id='vimeo'></iframe>
                <iframe src="https://www.youtube.com/embed/LkVp7koxDEU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen id='vimeo'></iframe>
                <iframe src="https://www.youtube.com/embed/WEVfALGI85A" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen id='vimeo'></iframe>
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Realizamos uma ação integrada para promover a cerveja Vedett. Nosso planejamento e criação criaram uma websérie, com a presença do embaixador da marca, o urso polar Blanche Le Bear. Levamos o mascote para conhecer a maior cidade do país, descobrir mais sobre o povo brasileiro e divulgar a marca.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Vedett</p>
                    <p><b>DATA</b> 2017</p>
                </div>
            </div>
        </article>
    }
}