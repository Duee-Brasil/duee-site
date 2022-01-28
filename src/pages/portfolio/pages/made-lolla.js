import React from 'react'
//

export default class MadeLolla extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "black" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/HEADER_1-5-1.png" alt="" />
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                    <iframe src="https://player.vimeo.com/video/340465615" width="100%" frameBorder="0" allow="autoplay; fullscreen" allowfullscree={"true"} id="vimeo" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Lollapalooza-89-1.jpg" alt="" />
                    {/* <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/video_site_starbucks.mp4" /> */}
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Lollapalooza-5-2.jpg" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/GarageStudio.gif" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Lollapalooza-142-2.jpg" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Lollapalooza-218-2.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Lollapalooza-132-2.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Lollapalooza-18-2.jpg" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <iframe src="https://open.spotify.com/embed?uri=spotify%3Aplaylist%3A68LglzhL6afHlY0D877XXw" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <iframe src="https://open.spotify.com/embed?uri=spotify%3Aplaylist%3A6euNX0DQ8V0iyJxMuqQZn5" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <iframe src="https://open.spotify.com/embed?uri=spotify%3Aplaylist%3A3AXlUoMZPdQBHcBQG8J9ut" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
                <div className="col-xs-12">
                    <iframe src="https://open.spotify.com/follow/1/?uri=spotify:user:e4andqtcxjiik8wlcyns8sbue&size=detail&theme=dark" width="300" height="56" scrolling="no" frameBorder="0" style={{border:'none', overflow:'hidden'}} allowtransparency="true"></iframe>
                </div>
            </div>

            <div className="row content describes">
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>A Made in Brazil esteve presente no Lollapalooza 2019 com o Garage Studio, um espaço incrível onde músicos e artistas puderam fazer um som antes e depois de entrarem no palco. Nós produzimos todo o material da ação, que contou com flyers, banners, conteúdos digitais, backdrop, brindes exclusivos, playlists no Spotify e um vídeo, que trouxe toda a emoção do evento para as nossas redes sociais.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Made In Brazil</p>
                    <p><b>DATA</b> 2019</p>
                </div>
            </div>
        </article>
    }
}