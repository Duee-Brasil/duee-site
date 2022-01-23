import React from 'react'
import './default.css'

export default class Serie extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <h2 style={{ color: 'black' }}>CODORNÍU – WEB SÉRIE – SOMOS CODORNÍU</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://duee.com.br/Site_2016/wp-content/uploads/2016/06/video_codorniu.webmhd.webm" />
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Para promover o conceito de lifestyle de Codorníu, criamos uma websérie com diversos episódios. Organizamos jantares com grandes especialistas em moda, arte, gastronomia e turismo, onde eles podem trocar experiências e confraternizar assuntos com o sabor de Codorníu.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Codorníu</p>
                    <p><b>DATA</b> 2016</p>
                </div>
            </div>
        </article>
    }
}