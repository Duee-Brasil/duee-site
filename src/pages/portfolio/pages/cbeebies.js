import React from 'react'
import './default.scss'

export default class Cbeebies extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <h2 style={{ color: 'black' }}>BBC – ESPAÇOS CBEEBIES/LIVRARIA CULTURA</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/06/03.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/06/02.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/06/04.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/06/01.jpg" alt="" />
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Em uma parceria com a Livraria Cultura, fizemos a divulgação do app CBeebis. Criamos um espaço lúdico e bem colorido, recheado de tablets para que as crianças pudessem experimentar as atividades e conteúdos disponíveis gratuitamente.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> BBC</p>
                    <p><b>DATA</b> 2016</p>
                </div>
            </div>
        </article>
    }
}