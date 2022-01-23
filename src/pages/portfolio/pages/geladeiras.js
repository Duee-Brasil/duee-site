import React from 'react'
import './default.css'

export default class Geladeiras extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "#67c3b3" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/banner-casal.png" alt="" />
            </div>
            <div className="row conteudo content">
                {/* <div className="col-xs-12 col-md-4 col-sm-6"> </div> */}
                {/* <div className="col-xs-12 col-md-4 col-sm-6"><video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/video_site_starbucks.mp4" /></div> */}
                <div className="col-xs-12 col-md-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Casal_podqws.png" alt="" />
                </div>
                <div className="col-xs-12 col-md-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Casal_geladeira.png" alt="" />
                </div>
            </div>

            <div className="row content describes">
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>As charmosas geladeiras de Casal Garcia estão presentes em diferentes pontos de venda e foram uma ação de posicionamento da marca em PDV.</p>
                    <p>Essas geladeiras deixam Casal Garcia na temperatura ideal para o consumo, aproximando o produto do público final.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Casal Garcia</p>
                    <p><b>DATA</b> 2019</p>
                </div>
            </div>
        </article>
    }
}