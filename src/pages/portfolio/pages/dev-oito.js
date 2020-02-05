import React from 'react'
import './default.scss'

export default class DevOito extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "#65519e" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/banner-oito.png" alt="" />
            </div>
            <div className="row conteudo content">
                {/* <div className="col-xs-12 col-md-4 col-sm-6"> </div> */}
                {/* <div className="col-xs-12 col-md-4 col-sm-6"><video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/video_site_starbucks.mp4" /></div> */}
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/yagakbd.png" alt="" />
                    <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Oito_post_3.mp4" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Oito_post_3.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Oito_post_2.png" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Oito_stories_2.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Oito_post_4.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Oito_post_1.png" alt="" />
                    </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/POST_OITO_S3_8.png" alt="" />
                    <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Oito_stories_1.mp4" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Oito_post_4-2.png" alt="" />
                    </div>
            </div>

            <div className="row content describes">
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>A OITO é uma plataforma que permite que profissionais autônomos anunciem os seus trabalhos e adicionem as suas habilidades, para que clientes os encontrem quando precisarem desses serviços, tudo de forma gratuita.</p>
                    <p>A Duee Brasil é responsável pelo desenvolvimento da plataforma, branding, comunicação e campanhas de mídia.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Oito App</p>
                    <p><b>DATA</b> 2019</p>
                </div>
            </div>
        </article>
    }
}