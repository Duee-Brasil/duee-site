import React from 'react'
import './default.scss'

export default class Jogo extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <h2 style={{ color: 'black' }}>STARBUCKS – JOGO DAS ESTRELAS 2017</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/03/MG_1366_BX-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/03/MG_1378_BX-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/03/MG_1386_BX-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/03/MG_1408_BX-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/03/MG_1409_BX-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/03/MG_1431_BX-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/03/MG_1481_BX-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/03/MG_1502_BX-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/03/MG_1603_BX-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/03/MG_1608_BX-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/03/MG_1616_BX-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/03/MG_1628_BX-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/03/MG_1631_BX-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/03/MG_1664_BX-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/03/MG_1784_BX-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/03/MG_1786_BX-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/03/MG_1794_BX-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/03/MG_1973_BX-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/03/MG_2296_BX-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/03/MG_2565_BX-1.jpg" alt="" />
                    
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Ativação feita para Starbucks​ durante o Jogo das Estrelas, com transmissão ao vivo pela TV Globo. Ativação na Área VIP, com distribuição de produtos Starbucks para convidados e brindes para o público presente.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Starbucks</p>
                    <p><b>DATA</b> 2017</p>
                </div>
            </div>
        </article>
    }
}