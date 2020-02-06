import React from 'react'
import './default.scss'

export default class CointreauM extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <h2 style={{ color: 'black' }}>COINTREAU – SOCIAL MEDIA</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/cointreau01.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/cointreau02.jpg" alt="" />
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Nossa equipe desenvolveu o planejamento estratégico e posicionamento de marca no Facebook, para então colocar em prática a compra de mídia, gestão de conteúdo e monitoramento constante.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Interfood</p>
                    <p><b>DATA</b> 2015/2016</p>
                </div>
            </div>
        </article>
    }
}