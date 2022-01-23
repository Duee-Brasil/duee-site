import React from 'react'
import './default.css'

const Kalassi = () => {

    if (typeof document !== `undefined`) document.querySelector(".loading").style.visibility = 'hidden'

    return <article className="cases row col-xs-12" style={{ backgroundColor: "#241e1d" }}>
        <div className="col-12 title">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/capa2.png" alt="Kalassi" />
        </div>
        <div className="row conteudo content">
            <div className="col-xs-12 col-md-4 col-sm-6">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/post-6_v2.png" alt="" />
                <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/post-7_V3.mp4" />
                <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/post-1-v2.mp4" />
            </div>
            <div className="col-xs-12 col-md-4 col-sm-6">
            <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/Storie-Kalassi.mp4" />
            <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/post-6.mp4" />
            </div>
            <div className="col-xs-12 col-md-4 col-sm-6">
            <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/post-8.mp4" />
            <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/post-1.mp4" />
            </div>
        </div>

        <div className="row content describes">
            <div className="col-xs-12 col-md-8 col-sm-6">
                <p><b>SOBRE O PROJETO</b></p>
                <p>A Kalassi é uma marca da Aurora Importadora que tem uma linha de snacks e molhos importados.
O carro chefe da marca é o rice cracker, que foi pioneiro no Brasil, mas hoje ela conta com sabores import Kalassi from './kalassi-firts-bite';
variados e surpreendentes, todos gluten free.
A DUEE Brasil é responsável por toda a comunicação online da marca no Brasil.
</p>
            </div>
            <div className="col-xs-12 col-md-4 col-sm-6">
                <p><b>DETALHES DO PROJETO</b></p>
                <p><b>CLIENTE</b> Kalassi</p>
                <p><b>DATA</b> 2020</p>
            </div>
        </div>
    </article>
}

export default Kalassi