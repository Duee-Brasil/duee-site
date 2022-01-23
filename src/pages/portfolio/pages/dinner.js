import React from 'react'
import './default.css'

export default class Dinner extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "#122f41" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/HEADER_1-2.png" alt="" />
            </div>
            <div className="row conteudo content">
                {/* <div className="col-xs-12 col-md-4 col-sm-6"> </div> */}
                {/* <div className="col-xs-12 col-md-4 col-sm-6"><video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/video_site_starbucks.mp4" /></div> */}
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/2_DINNER_V1.mp4" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Faxe-109.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Faxe-305.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Faxe-224.jpg" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Faxe-37.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Faxe-286.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Faxe-220.jpg" alt="" />
                </div>
            </div>

            <div className="row content describes">
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>O Dinner in the Sky é um evento que coloca os participantes para provarem cardápios de dar água na boca em uma estrutura suspensa a mais de 50 metros de altura! E o melhor: eles puderam aproveitar as refeições acompanhados de muita Faxe, a cerveja viking! Nós produzimos os conteúdos digitais, com posts e stories, além de vídeos exclusivos para diversas plataformas.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Faxe</p>
                    <p><b>DATA</b> 2019</p>
                </div>
            </div>
        </article>
    }
}