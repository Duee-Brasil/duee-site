import React from 'react'
//

const KalassiVeggie = () => {

    if (typeof document !== `undefined`) document.querySelector(".loading").style.visibility = 'hidden'

    return <article className="cases row col-xs-12" style={{ backgroundColor: "#241e1d" }}>
        <div className="col-12 title">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/veggie-banner.png" alt="Kalassi" />
        </div>
        <div className="row conteudo content">
            <div className="col-xs-12 col-md-4 col-sm-6">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/post-2-v2.png" alt="" />
                <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/video-1.mp4" />
                <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/video-4.mp4" />
                <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/video-7.mp4" />
            </div>
            <div className="col-xs-12 col-md-4 col-sm-6">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/Banner-Site_mobile-v4.png" alt="" />
                <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/video-2.mp4" />
                <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/video-5.mp4" />
                <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/video-8.mp4" />
            </div>
            <div className="col-xs-12 col-md-4 col-sm-6">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/WhatsApp-Image-2021-05-27-at-15.35.53-1.jpeg" alt="" />
                <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/video-3.mp4" />
                <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/video-6.mp4" />
                <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/video-9.mp4" />
            </div>
            <div className="col-xs-12">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/Banner-Site_web-v4.png" alt="" />
            </div>
            <div className="col-xs-12 col-md-4 col-sm-6">
                <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/post-3-v3.mp4" />
                <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/story-2-v2.mp4" />
            </div>
            <div className="col-xs-12 col-md-4 col-sm-6">
                <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/post-5-v3.mp4" />
                <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/post-6.mp4" />
            </div>
            <div className="col-xs-12 col-md-4 col-sm-6">
                <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/post-4-v3.mp4" />
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/story-1-v4.png" alt="" />
            </div>
        </div>

        <div className="row content describes">
            <div className="col-xs-12 col-md-8 col-sm-6">
                <p><b>SOBRE O PROJETO</b></p>
                <p>A nova linha Kalassi Veggie foi pensada nas principais tendências do mercado global de alimentos e no desafio de manter uma alimentação saudável sem abrir mão do sabor e da praticidade.
Feita em três versões: couve, beterraba e mix de vegetais; a linha Veggie contém ingredientes de verdade, cuidadosamente selecionados e composta por mais de 90% de seus ingredientes com arroz e vegetais desidratados.
A Duee Brasil foi responsável pela campanha de lançamento da nova linha de Kalassi Veggie, construção de identidade visual e envio de kits para influenciadores. </p>
            </div>
            <div className="col-xs-12 col-md-4 col-sm-6">
                <p><b>DETALHES DO PROJETO</b></p>
                <p><b>CLIENTE</b> Kalassi</p>
                <p><b>DATA</b> 2021</p>
            </div>
        </div>
    </article>
}

export default KalassiVeggie