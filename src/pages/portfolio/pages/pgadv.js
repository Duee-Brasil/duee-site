import React from 'react'
import './default.css'

export default class PGadv extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <h2 style={{ color: 'black' }}>PG ADVOGADOS – SOCIAL MEDIA</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/07/pg_adv_01.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/07/pg_adv_02.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/07/pg_adv_03.jpg" alt="" />
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Criamos todo o planejamento estratégico e posicionamento da marca no Facebook e Linkedin, passando pela gestão de conteúdos, compra de mídia e monitoramento de público, concorrentes e alcance das publicações.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Pires e Gonçalves Advogados</p>
                    <p><b>DATA</b> 2015/2016</p>
                </div>
            </div>
        </article>
    }
}