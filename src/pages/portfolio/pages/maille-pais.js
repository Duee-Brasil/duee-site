import React from 'react'
//

export default class MaillePai extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "#241e1d" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/header-1.png" alt="Maille" />
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12 col-md-3 col-sm-2">
                </div>
                <div className="col-xs-12 col-md-6 col-sm-6">
                    <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/elisa_FINAL_maille-1.mp4" />
                </div>
                <div className="col-xs-12 col-md-3 col-sm-2">
                </div>
            </div>

            <div className="row content describes">
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>DIA DOS PAIS COM MAILLE</p>
                    <p>A ação de dia dos pais em parceria com a ganhadora do MasterChef, Elisa Fernandes, teve como propósito trazer reconhecimento de marca com uma das chefes e influenciadora mais conhecida no universo gastronômico brasileiro.</p>
<p>A Duee Brasil foi responsável pelo planejamento da ação, seleção da influenciadora e desenvolvimento da ativação.
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