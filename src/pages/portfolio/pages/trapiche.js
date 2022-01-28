import React from 'react'
//

export default class Trapiche extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/HEADER_1-5-3.png" alt="" />
            </div>
            <div className="row conteudo content">
                {/* <div className="col-xs-12 col-md-4 col-sm-6"> </div> */}
                {/* <div className="col-xs-12 col-md-4 col-sm-6"><video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/video_site_starbucks.mp4" /></div> */}
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/VitrineGPA-Trapiche-6-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/VitrineGPA-Trapiche-14-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/VitrineGPA-Trapiche-8-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/VitrineGPA-Trapiche-24-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/VitrineGPA-Trapiche-19.jpg" alt="" />


                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/VitrineGPA-Trapiche-25-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/VitrineGPA-Trapiche-10-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/VitrineGPA-Trapiche-21-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/VitrineGPA-Trapiche-13-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/VitrineGPA-Trapiche-24.jpg" alt="" />
                    

                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/VitrineGPA-Trapiche-27-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/VitrineGPA-Trapiche-21.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/VitrineGPA-Trapiche-17-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/VitrineGPA-Trapiche-23-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/VitrineGPA-Trapiche-26-1.jpg" alt="" />
                </div>
            </div>

            <div className="row content describes"  style={{ color: "black" }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Nós planejamos todo o conceito da vitrine do vinho Trapiche para a Adega Pão de Açúcar, desde os materiais a serem usados até a composição da estrutura. </p>
                    <p>O cenário foi pensado para reproduzir um ambiente onde o vinho seria consumido, ideal para o público da Adega.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Trapiche</p>
                    <p><b>DATA</b> 2019</p>
                </div>
            </div>
        </article>
    }
}