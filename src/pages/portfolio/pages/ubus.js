import React from 'react'
import './default.css'

export default class Ubus extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "#00143a" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/HEADER_1-5.jpg" alt="" />
            </div>
            <div className="row conteudo content">
                {/* <div className="col-xs-12 col-md-4 col-sm-6"> </div> */}
                {/* <div className="col-xs-12 col-md-4 col-sm-6"><video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/video_site_starbucks.mp4" /></div> */}
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Artboard-1.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Artboard-2.png" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Artboard-1-copy.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Artboard-3.png" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Artboard-1-copy-2.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Artboard-3-1.png" alt="" />
                </div>
            </div>

            <div className="row content describes">
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>UBus chegou para mudar o jeito que você se locomove pela cidade. Os veículos são equipados com ar-condicionado e Wi-Fi e, pelo aplicativo, ainda dá para fazer o pagamento, monitorar a rota e reservar o seu assento. Nós criamos todo o planejamento estratégico e posicionamento de marca, fizemos a gestão e a criação de conteúdos para as redes sociais e o monitoramento de mídia. Produzimos, também, backdrops, flyers, manual de marca e a adesivação dos veículos.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> UBus</p>
                    <p><b>DATA</b> 2019</p>
                </div>
            </div>
        </article>
    }
}