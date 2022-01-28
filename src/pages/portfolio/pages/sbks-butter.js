import React from 'react'
//

export default class Butter extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/HEADER_1.png" alt="" />
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/V2-Comp-1-teaser-Starbucks-butterfrap.gif" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/Stories-mock.png" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/Board-Starbucks-butterfrapp-v2.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/post-starbucks-butter-800x800-x2_01.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/11-12_post-starbucks-butter-800x800-x2.png" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/post-gif-1080x1080.gif" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/13.12-stories-post-starbucks-1920x1080.gif" alt="" />
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Criamos ações de marketing e comunicação nas redes sociais para divulgar o lançamento do Starbucks Butter Frappuccino. Assim como o Frappuccino, toda a comunicação foi planejada com base na série de filmes do Harry Potter.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Starbucks</p>
                    <p><b>DATA</b> 2018</p>
                </div>
            </div>
        </article>
    }
}