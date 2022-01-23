import React from 'react'
import './default.css'

export default class BFMade extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "black" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Made_bannersite.jpg" alt="" />
            </div>
            <div className="row conteudo content">
                {/* <div className="col-xs-12 col-md-4 col-sm-6"> </div> */}
                {/* <div className="col-xs-12 col-md-4 col-sm-6"><video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/video_site_starbucks.mp4" /></div> */}
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/yagakbd.png" alt="" />
                    <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/esquenta_black_friday_whatsapp.mp4" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/dsds.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/dsadwff.png" alt="" />
                    </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/aiudhad.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/post1.png" alt="" />
                    </div>
            </div>

            <div className="row content describes">
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>A Made In Brazil esteve presente na Black Friday de 2019 com preços e ofertas especiais em diversos produtos, em todas as lojas.</p>
                    <p>A Duee foi responsável por desenvolver uma campanha integrada, com todo o material para essa data especial. Desde materiais para o PDV até material de divulgação nas plataformas digitais.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Made In Brazil</p>
                    <p><b>DATA</b> 2019</p>
                </div>
            </div>
        </article>
    }
}