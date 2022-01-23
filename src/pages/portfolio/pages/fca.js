import React from 'react'
import './default.css'

export default class FCA extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <h2 style={{ color: 'black' }}>DIGITAL DAY – FCA – FIAT CHRYSLER AUTOMOBILES</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/11/img_3921.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/11/img_3930.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/11/img_4173.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/11/img_4096.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/11/img_4159.jpg" alt="" />
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Criamos materiais e o planejamento para o Digital Day, evento da Fiat Chrysler Automobiles, para as concessionárias, com palestras e relacionamento digital entre colaboradores e parceiros.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> FCA – Fiat Chrysler Automobiles</p>
                    <p><b>DATA</b> 2016</p>
                </div>
            </div>
        </article>
    }
}