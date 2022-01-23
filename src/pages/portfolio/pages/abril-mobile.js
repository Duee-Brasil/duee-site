import React from 'react'
import './default.css'

export default class AbrilMobile extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <h2 style={{ color: 'black' }}>LANÇAMENTO DO APP MOBILE VIEW – ABRIL</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://duee.com.br/Site_2016/wp-content/uploads/2016/06/video_abril.webmhd.webm" />
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Campanha de ativação de marca para a Revista Veja, em diversas bancas de jornal espalhadas por São Paulo. Junto, realizamos pesquisas de opinião sobre a marca.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Editora Abril</p>
                    <p><b>DATA</b> 2016</p>
                </div>
            </div>
        </article>
    }
}