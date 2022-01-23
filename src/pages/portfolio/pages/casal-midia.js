import React from 'react'
import './default.css'

export default class CasalMidia extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/HEADER_1-6.png" alt="" />
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                    <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/CG-Versa%CC%83o-PT-01_00-HD-1080p.mov" />
                </div>
                <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/728x90_ESTATICO3.jpg" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/300x600_gif2.gif" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/300x250_gif4.gif" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/300x250_gif3.gif" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/300x250_gif1.gif" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/300x250_gif2.gif" alt="" />
                </div>
                <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/728x90_ESTATICO1.jpg" alt="" />
                </div>
            </div>

            <div className="row content describes" style={{ color: "black" }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Planejamento estratégico de social media e posicionamento da marca. Campanha de Verão Casal Garcia,  realizada com foco nos meses de dezembro e janeiro e nas férias e no verão. Criamos a promoção, realizamos as ativações, a gestão de conteúdo, a compra de mídia e o monitoramento.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Casal Garcia</p>
                    <p><b>DATA</b> 2018/2019</p>
                </div>
            </div>
        </article>
    }
}