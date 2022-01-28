import React from 'react'
//

export default class Draft extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png" alt="" />
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V3-2.png" alt="" />
                </div>
                <div className="col-xs-12 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/FB_IG-Starbucks-NITRODRAFT-1.mp4" alt="" />
                </div>
                <div className="col-xs-12 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/DISPLAY-ANIMADO-MOCKUP.mp4" alt="" />
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Para divulgar o lançamento do Starbucks DRAFT Nitro, desenvolvemos o key visual da campanha e todo o material de divulgação para as redes sociais. Criamos também alguns materiais gráficos para reforçar a campanha.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Starbucks</p>
                    <p><b>DATA</b> 2018</p>
                </div>
            </div>
        </article>
    }
}