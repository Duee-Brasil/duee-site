import React from 'react'
//

export default class MailleMae extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "#241e1d" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/header-maille.png" alt="Maille" />
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12 col-md-3 col-sm-2">
                </div>
                <div className="col-xs-12 col-md-6 col-sm-6">
                    <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/lorenzo-maille.mp4" />
                </div>
                <div className="col-xs-12 col-md-3 col-sm-2">
                </div>
            </div>

            <div className="row content describes">
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>DIA DAS MÃES COM MAILLE</p>
                    <p>A ação de dia das mães teve como objetivo unir a data comemorativa juntamente com o influenciador Lorenzo Ravioli, para mostrar que Maille está presente em todos os momentos especiais.
Selecionamos esse influenciador por estar imerso no universo da gastronomia, sendo o vencedor do MasterChef Júnior. No conteúdo proposto, ele fez uma receita utilizando os produtos da marca e presenteou a mãe com um prato delicioso.
A Duee Brasil foi responsável pela busca e briefing do influenciador que entrega o melhor conteúdo de acordo com o perfil do cliente. 
</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Maille</p>
                    <p><b>DATA</b> 2021</p>
                </div>
            </div>
        </article>
    }
}