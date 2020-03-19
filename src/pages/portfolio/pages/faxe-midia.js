import React from 'react'
import './default.scss'

export default class FaxeMidia extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            {/* <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/Casal_Garcia_Capa_Duee_V1.png" alt="" />
            </div> */}
            <div className="row conteudo content">
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/Casalgarcia-800x800.png" alt="" />
                    <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/2_FB_POST-CASALGARCIA-800x800_V1.mp4" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/Casalgarcia-800x800-2.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/1080x1080_CG_FB-v2.png" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/DOURO%E2%80%93POST-CASALGARCIA-800x800.mp4" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/POST-CASALGARCIA-allpacks-800x800_V2.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Posts-BLUE-MOON-7.jpg" alt="" />
                    <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/POST-CASALGARCIA-ROSE-800x800_V2.mp4" />
                    <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/post%E2%80%93cg-1080x1080.mp4" />

                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/1_BRANCO_800x800_V1.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/3_FB_1080x1080_V1.png" alt="" />
                    <video controls autoPlay={true} muted={true} loop type="video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/2_POST-CASALGARCIA-SWEET-800x800_V1.mp4" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/POST-CASALGARCIA-800x800.png" alt="" />
                    <a href="https://www.facebook.com/casalgarciabr/"><i class="fab fa-facebook-square" style={{ color: "#4c6ef5" }}/></a>
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Fizemos todo o planejamento estratégico e posicionamento de marca de Casal Garcia no Brasil. Também somos os responsáveis pela gestão e criação de conteúdos para redes sociais, além de promoções e ativações de marca, compra de mídia e monitoramento de publicações.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Casal Garcia</p>
                    <p><b>DATA</b> 2018</p>
                </div>
            </div>
        </article>
    }
}