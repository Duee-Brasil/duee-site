import React from 'react'
import './default.css'

export default class FaxePdv extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "#122f41" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/HEADER_1-2.png" alt="" />
            </div>
            <div className="row conteudo content">
                {/* <div className="col-xs-12 col-md-4 col-sm-6"> </div> */}
                {/* <div className="col-xs-12 col-md-4 col-sm-6"><video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/video_site_starbucks.mp4" /></div> */}
                <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/FAXE_POST.gif" alt="" />
                </div>
                <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/BOARD-MOCKUP-PACK-FAXE.jpg" alt="" />
                </div>
            </div>

            <div className="row content describes">
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Criamos um kit exclusivo com copo e lata de Faxe, apresentando elementos da cultura viking por toda a caixa. Essa novidade reforça a relação dos vikings com nossa cerveja e deixa o ponto de venda ainda mais marcante e destacado.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Faxe</p>
                    <p><b>DATA</b> 2019</p>
                </div>
            </div>
        </article>
    }
}