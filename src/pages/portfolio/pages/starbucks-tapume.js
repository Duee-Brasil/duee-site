import React from 'react'
import './default.css'

const StarbucksTapume = () => {

    if (typeof document !== `undefined`) document.querySelector(".loading").style.visibility = 'hidden'

    return <article className="cases row col-xs-12" style={{ backgroundColor: "black" }}>
        <div className="col-12 title">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/capastarbucks2.png" alt="" />
        </div>
        <div className="row conteudo content">
            <div className="col-12 ">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/Lambe-lambe-aplicaçao_V3.png" alt="" />
            </div>
            {/* <div className="col-xs-12 col-md-4 col-sm-6"> </div> */}
            {/* <div className="col-xs-12 col-md-4 col-sm-6"><video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/video_site_starbucks.mp4" /></div> */}
            <div className="col-xs-12 col-md-4 col-sm-6">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/TAPUME-STARBUCKS2_V3-05.png" alt="" />
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/Artboard-3.png" alt="" />
            </div>
            <div className="col-xs-12 col-md-4 col-sm-6">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/TAPUME-STARBUCKS_V3-03.png" alt="" />
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/TAPUME-STARBUCKS_V2-01.png" alt="" />
            </div>
            <div className="col-xs-12 col-md-4 col-sm-6">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/TAPUME-STARBUCKS_V2-04.png" alt="" />
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/TAPUME-STARBUCKS_V2-02.png" alt="" />
            </div>
            <div className="col-12 ">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/WhatsApp-Image-2020-08-28-at-6.56.51-PM.jpeg" alt="" />
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/WhatsApp-Image-2020-08-28-at-6.56.52-PM-1.jpeg" alt="" />
            </div>
        </div>

        <div className="row content describes">
            <div className="col-xs-12 col-md-8 col-sm-6">
                <p><b>SOBRE O PROJETO</b></p>
                <p>Confecção de um tapume no Aeroporto de Brasília para comunicar uma nova loja da Starbucks Brasil em breve no local.</p>
            </div>
            <div className="col-xs-12 col-md-4 col-sm-6">
                <p><b>DETALHES DO PROJETO</b></p>
                <p><b>CLIENTE</b> Starbucks</p>
                <p><b>DATA</b> 2020</p>
            </div>
        </div>
    </article>
}

export default StarbucksTapume