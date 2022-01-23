import React from 'react'
import './default.css'

export default class Roadshow extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {

        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <h2 style={{ color: 'black' }}>STARBUCKS – ROADSHOW WINTER</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/4c128dec-7acb-445e-b279-ffacbfb5d663.jpeg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/26cdf704-a384-49b0-98a8-56bace3a4aa0.jpeg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/7ab56e51-4356-466a-abc9-8d3df2af1c7f.jpeg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/19b9b7f7-8dfb-4861-a4b6-9d025e5b4772.jpeg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/5923a902-b63a-4b94-a0ae-e0b7a7bc44dd.jpeg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/f1b7b9b5-8c3b-4171-b78a-30998043de40.jpeg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/a8c17d50-cc9e-4704-83bf-340e8b9c2776.jpeg" alt="" />
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Planejamos um evento exclusivo para a Starbucks, chamado Roadshow Winter, onde foi apresentado o novo cardápio da marca. Criamos materiais de PDV, infláveis e muito mais.</p>
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