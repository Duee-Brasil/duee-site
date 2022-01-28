import React from 'react'
//
import Swiper from 'react-id-swiper'
// import 'swiper/swiper.scss'

export default class Made30anos extends React.Component {

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {

        return <article className="cases row col-xs-12" style={{ backgroundColor: "black" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/11/2.png" alt="" />
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12 col-md-4 col-sm-6">
                        <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/11/5.png" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                        <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/11/4.png" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                        <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/11/1.png" alt="" />
                </div>
                <div className="col-xs-12">
                    <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/11/MADE-IN-BRAZIL-CORTE-08-09.11.2020-422HQ1-convert-video-online.com_.mp4" />
                </div>               
            </div>

            <div className="row content describes">
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>A Made In Brazil fez 30 anos e a Duee criou uma identidade incrível para a campanha de aniversário da marca.</p>
<p>A campanha foi inspirada nas conexões que a música promove e no fio do destino, uma lenda antiga que serviu de base para o key visual e o storytelling.</p>
<p>Foram produzidos materiais para o PDV, posts para redes sociais e um vídeo veiculado na internet, com o tema de conexão.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Made In Brazil</p>
                    <p><b>DATA</b> 2020</p>
                </div>
            </div>
        </article>
    }
}