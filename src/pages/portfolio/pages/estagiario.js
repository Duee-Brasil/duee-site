import React from 'react'
import './default.css'

export default class Estagiario extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <h2 style={{ color: 'black' }}>RESPEITA O ESTAGIÁRIO – INSTITUTO VIA DE ACESSO</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/KV_ESTAGIO.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/posts_estagio.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/Pg_Dupla-copy.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/Relogio_Rua.jpg" alt="" />
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>O Instituto Via de Acesso valoriza o papel do estagiário dentro do mercado de trabalho e incentiva que empresas façam o mesmo. Pensando nisso, criamos uma campanha com diversos conteúdos nas redes sociais, banner para site, relógio de rua e um e-book, para mostrar às empresas que os estagiários não são mão de obra barata e estão trabalhando para contribuir.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Instituto Via de Acesso</p>
                    <p><b>DATA</b> 2017</p>
                </div>
            </div>
        </article>
    }
}