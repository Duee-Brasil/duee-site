import React from 'react'
//

    export default class Banica extends React.Component {

        constructor(props) {
            super(props)
        }
    
        componentDidMount() {
            document.querySelector(".loading").style.visibility = 'hidden'
        }

        render () {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "#D1375D" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/header.png" alt="CasalGarcia" />
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/05.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/02.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/07.jpg" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/04.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/01.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/15.jpg" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/03.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/06.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/14.jpg" alt="" />
                </div>
            </div>

            <div className="row content describes">
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Com o intuito de unir o autocuidado e a alegria de reservar um momento para apreciar um bom vinho, fizemos uma parceria entre Casal Garcia e a marca de produtos de skincare coreana Banila Co.</p>
<p>Foram enviados kits de produtos para influenciadoras selecionadas, além de conteúdos de harmonizações em ambas as redes sociais das marcas. </p>
<p>A Duee Brasil foi responsável pela co-branding entre as marcas, desenvolvimento e criação dos conteúdos.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Casal Garcia</p>
                    <p><b>DATA</b> 2021</p>
                </div>
            </div>
        </article>
    }
    }