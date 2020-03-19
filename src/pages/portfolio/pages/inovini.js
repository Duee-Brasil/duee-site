import React from 'react'
import './default.scss'

export default class Panetone extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "rgb(65, 20, 45)" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/03/Untitled-1.png" alt="Inovini" />
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12 col-md-4 col-sm-6">
                <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/03/Inovini_post_3-cópia.mp4" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/03/Captura-de-Tela-2020-03-19-às-19.03.10.png" alt="" />
                    <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/03/Inovini_post_2.mp4" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/03/Inovini_post_2-cópia.mp4" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/03/Captura-de-Tela-2020-03-19-às-19.02.42.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/03/Captura-de-Tela-2020-03-19-às-19.01.00.png" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/03/Captura-de-Tela-2020-03-19-às-18.59.30.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/03/Captura-de-Tela-2020-03-19-às-18.59.10.png" alt="" />
                    <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/03/Inovini_post_1.mp4" />
                </div>
            </div>

            <div className="row content describes">
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>A Aurora, tradicional importadora do mercado brasileiro, lançou em 2009 a marca INOVINI, divisão dedicada exclusivamente ao mercado de vinhos finos. A INOVINI importa com exclusividade rótulos de vinícolas reconhecidas mundialmente por sua qualidade e pioneirismo para agradar os mais variados paladares.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Inovini</p>
                    <p><b>DATA</b> 2020</p>
                </div>
            </div>
        </article>
    }
}