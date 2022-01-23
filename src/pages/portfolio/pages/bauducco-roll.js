import React from 'react'
import './default.css'

export default class Roll extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <h2 style={{ color: 'black' }}>BAUDUCCO – TEATRO INFANTIL E OFICINA ROLL</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco2.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco3.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco4-1.jpg" alt="" />
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Realizamos ações para o produto Roll, da Bauducco, com teatro infantil, oficina de customização do produto, sampling, promotores e um mascote fantasiado.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Bauducco</p>
                    <p><b>DATA</b> 2014</p>
                </div>
            </div>
        </article>
    }
}