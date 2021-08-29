import React from 'react'
import './default.scss'

    export default class JBL extends React.Component {

        constructor(props) {
            super(props)
        }
    
        componentDidMount() {
            document.querySelector(".loading").style.visibility = 'hidden'
        }

        render () {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "#169193" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/header-2.png" alt="CasalGarcia" />
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/06-1.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/01-1.jpg" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/05-1.jpg" alt="" />
                    <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/04.mp4" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/02-1.jpg" alt="" />
                    <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/03.mp4" />
                </div>
            </div>

            <div className="row content describes">
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Para comemorar o dia mais significativo do conceito da alegria de Casal Garcia, o “ Dia da Alegria”, fizemos um concurso cultural nas redes sociais para que os seguidores postassem uma foto ou vídeo que envolva o espírito dessa data. Os conteúdos mais criativos ganharam uma caixinha de som JBL.</p>
<p>A Duee Brasil foi responsável pela criação, desenvolvimento e aplicação do concurso.
</p>
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