import React from 'react'
import './default.css'

export default class Makingof extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "black" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Final_FAXE_MO.png" alt="" />
            </div>
            <div className="row conteudo content">
                {/* <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/video_site_starbucks.mp4" /> */}
                <div className="col-xs-12">
                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/296450706" id="vimeo" width="100%" allowFullScreen></iframe>
                </div>
            </div>

            {/* <div className="row content describes" style={{ color: 'white' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Para reforçar nossa campanha de ativação de marca, trazer um conceito mais jovem e integrar Chandon no ambiente digital, criamos um aplicativo de realidade aumentada, uma experiência inovadora disponível na Play Store e App Store.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> MOET Chandon</p>
                    <p><b>DATA</b> 2018</p>
                </div>
            </div> */}
        </article>
    }
}