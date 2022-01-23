import React from 'react'
import './default.css'

export default class Namorados extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "#c1272d" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/HEADER_1-2.jpg" alt="" />
            </div>
            <div className="row conteudo content">
                {/* <div className="col-xs-12 col-md-4 col-sm-6"> </div> */}
                {/* <div className="col-xs-12 col-md-4 col-sm-6"><video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/video_site_starbucks.mp4" /></div> */}
                <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/5_SBUX_CANECA_VALENTINES_V1.jpg" alt="" />
                </div>
                <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/caneca-aplicada-pequena-V2.jpg" alt="" />
                </div>
                <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/caneca-aplicada-grande-V3.jpg" alt="" />
                </div>
            </div>

            <div className="row content describes">
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>O Dia dos Namorados é uma época para transbordar de amor! Pensando nisso, criamos uma caneca exclusiva para a Starbucks, com um texto e uma arte que combinam com as conexões e o contato que essa época pede. Quando colocamos duas, lado a lado, os desenhos se completam.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Starbucks</p>
                    <p><b>DATA</b> 2019</p>
                </div>
            </div>
        </article>
    }
}