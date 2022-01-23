import React from 'react'
import './default.css'

export default class VaiVedett extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/HEADER_1-5-2.png" alt="" />
            </div>
            <div className="row conteudo content">
                {/* <div className="col-xs-12 col-md-4 col-sm-6"> </div> */}
                {/* <div className="col-xs-12 col-md-4 col-sm-6"><video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/video_site_starbucks.mp4" /></div> */}
                <div className="col-xs-12 col-md-3 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Post-Vedett-9.png" alt="" />
                </div>
                <div className="col-xs-12 col-md-3 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Post-Vedett-8.png" alt="" />
                </div>
                <div className="col-xs-12 col-md-3 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Post-Vedett-7.png" alt="" />
                </div>
                <div className="col-xs-12 col-md-3 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Post-Vedett-5.png" alt="" />
                </div>
            </div>

            <div className="row content describes" style={{ color: "black" }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>A Vedett é uma daquelas cervejas especiais que caiu no gosto do público. Nós fizemos uma pesquisa de público para alinhar com os conteúdos e estética das redes sociais e reforçar a comunicação digital. Em seguida, fizemos o reposicionamento de marca, a criação do conceito criativo e demos uma repaginada nos perfis digitais da empresa.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Vedett</p>
                    <p><b>DATA</b> 2019</p>
                </div>
            </div>
        </article>
    }
}