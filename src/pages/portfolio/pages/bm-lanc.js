import React from 'react'
import './default.css'

export default class BMLanc extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "#00143a" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/1-banner.png" alt="" />
            </div>
            <div className="row conteudo content">
                {/* <div className="col-xs-12 col-md-4 col-sm-6"> </div> */}
                {/* <div className="col-xs-12 col-md-4 col-sm-6"><video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/video_site_starbucks.mp4" /></div> */}
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Post-Blue-Moon-1.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Post-Blue-Moon.gif" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Post-Blue-Moon-3.png" alt="" />
                    <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/post-7.mp4" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/post2-1.gif" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Posts-BLUE-MOON-7.jpg" alt="" />
                    <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/BlueMoonBumper_Boomerang.mp4" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/post-4-storie.gif" alt="" />
                    <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Posts-quinzenais-Blue-Moon-Semana-2-5.mp4" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Posts-BLUE-MOON-3.jpg" alt="" />
                </div>
            </div>

            <div className="row content describes">
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>A Blue Moon é a cerveja especial número um dos Estados Unidos e chegou de forma oficial no Brasil recentemente. Nós criamos todo o planejamento estratégico e posicionamento de marca, fizemos a gestão e a criação de conteúdos para as redes sociais e o monitoramento de mídia.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Blue Moon</p>
                    <p><b>DATA</b> 2019</p>
                </div>
            </div>
        </article>
    }
}