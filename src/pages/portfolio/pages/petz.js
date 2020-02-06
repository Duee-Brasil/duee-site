import React from 'react'
import './default.scss'

export default class Petz extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <h2 style={{ color: 'black' }}>PETZ TV – PETZ</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                <iframe src="https://www.youtube.com/embed/p6frgKZKTgk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id='vimeo'></iframe>
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Planejamos uma websérie para a Petz. Os episódios abordam dicas e informações fundamentais sobre alimentação, cuidados, saúde dos pets, entre outras.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Petz</p>
                    <p><b>DATA</b> 2016</p>
                </div>
            </div>
        </article>
    }
}