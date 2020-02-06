import React from 'react'
import './default.scss'

export default class Crownshow extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <h2 style={{ color: 'black' }}>SUITE 49 TRAVELS – SOCIAL MEDIA</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2014-03-25-at-19.39.52.png" alt="" />
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Nossa equipe é responsável pela criação e manutenção do site da Crowshow. A empresa é uma iniciativa para financiamento coletivo de eventos; desenvolvemos todo o site com base no planejamento das necessidades da empresa e da usabilidade dos usuários.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Crowshow</p>
                    <p><b>DATA</b> 2012</p>
                </div>
            </div>
        </article>
    }
}