import React from 'react'
//

const Kalassi = () => {

    if (typeof document !== `undefined`) document.querySelector(".loading").style.visibility = 'hidden'

    return <article className="cases row col-xs-12" style={{ backgroundColor: "#241e1d" }}>
        <div className="col-12 title">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/header-kalassi.png" alt="Kalassi" />
        </div>
        <div className="row conteudo content">
            <div className="col-xs-12 col-md-4 col-sm-6">
                <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/story-1.mp4" />
                <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/story-4.mp4" />
                <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/story-7.mp4" />
            </div>
            <div className="col-xs-12 col-md-4 col-sm-6">
            <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/story-2.mp4" />
            <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/story-5.mp4" />
            <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/story-8.mp4" />
            <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/Estevam-First-Bite.mp4" />
            </div>
            <div className="col-xs-12 col-md-4 col-sm-6">
            <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/story-3.mp4" />
            <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/story-6.mp4" />
            <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/story-9.mp4" />
            </div>
        </div>

        <div className="row content describes">
            <div className="col-xs-12 col-md-8 col-sm-6">
                <p><b>SOBRE O PROJETO</b></p>
                <p>A ação First Bite teve como propósito mostrar as reações das pessoas ao provarem os rice crackers Kalassi, focando na experimentação da principal característica da marca, sabores e experiências surpreendentes. Para aumentar o engajamento das redes sociais e reconhecimento de marca, utilizamos o trabalho dos influenciadores digitais Manu e Matheus, que formam o We Love, juntamente com o Estevam Pelo Mundo, para atingir o público-alvo de Kalassi. Ambos perfis possuem espírito aventureiro e explorador, abordando dicas de hotéis, restaurantes e passeios. 
A Duee Brasil foi responsável pelo planejamento das ações, seleção dos influenciadores e execução das ativações.</p>
            </div>
            <div className="col-xs-12 col-md-4 col-sm-6">
                <p><b>DETALHES DO PROJETO</b></p>
                <p><b>CLIENTE</b> Kalassi</p>
                <p><b>DATA</b> 2021</p>
            </div>
        </div>
    </article>
}

export default Kalassi