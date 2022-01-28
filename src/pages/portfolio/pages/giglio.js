import React from 'react'
//

export default class Giglio extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "#fff" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/banner_img_site_giglio.png" alt="" />
            </div>
            <div className="row conteudo content">
                {/* <div className="col-xs-12 col-md-4 col-sm-6"> </div> */}
                {/* <div className="col-xs-12 col-md-4 col-sm-6"><video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/video_site_starbucks.mp4" /></div> */}
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/Giglio_linkdln_PT.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/index-giglio.png" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/Logo_GN.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/ID_Mockup_V2.png" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/AssEmail_mockup_V3.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/66.png" alt="" />
                </div>
            </div>

            <div className="row content describes"  style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Giglio Neto Advogados oferece a advocacia empresarial de excelência, de forma personalizada, a empresas, instituições financeiras, famílias e indivíduos.
A Duee Brasil foi responsável pelo desenvolvimento e conteúdo presente no site da firma.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Giglio Neto Advogados</p>
                    <p><b>DATA</b> 2020</p>
                </div>
            </div>
        </article>
    }
}