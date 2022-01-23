import React from 'react'
import './default.css'

export default class BML2020 extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "#00143a" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/banner_img_site_1-1.png" alt="" />
            </div>
            <div className="row conteudo content">
                {/* <div className="col-xs-12 col-md-4 col-sm-6"> </div> */}
                {/* <div className="col-xs-12 col-md-4 col-sm-6"><video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/video_site_starbucks.mp4" /></div> */}
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/stories-bm-2.mp4" />
                    <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-bm-fb-2.mp4" />
                    <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-bm-8.mp4" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-blue-moon-1_01.png" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/stories-bm.png" alt="" />
                    <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-bm-5.mp4" />
                    <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-bm-2.mp4" />
                    <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/stories-bm-1-.mp4" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-bm-7.mp4" />
                <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-bm-2-cópia.mp4" />
                <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-blue-moon-2.mp4" />
                <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-bm-6.mp4" />
                <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-bm-4-2.mp4" />
                </div>
            </div>

            <div className="row content describes">
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Mais uma sessão de fotos para Blue Moon, com locações em bares de São Paulo, harmonização com diferentes pratos, ambientes, situações e pessoas.
A Duee Brasil planejou, roteirizou e acompanhou o projeto e execução completos.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Blue Moon</p>
                    <p><b>DATA</b> 2020</p>
                </div>
            </div>
        </article>
    }
}