import React from "react"
import styled from "styled-components"

import Layout from "@components/layout/layout"
import Masonry from "@components/Masonry"

import LogoMade from '@images/made/Banner1.png'

import Img1 from '@images/made/imgs/1.png'
import Img2 from '@images/made/imgs/2017_11_KALA-LTP-SCC-6919.png'
import Img3 from '@images/made/imgs/2017_11_KALA-LTP-SCC-6924.png'
import Img5 from '@images/made/imgs/2017_11_KALA-LTP-SCC-6932.png'
import Img6 from '@images/made/imgs/BAT_1.png'
import Img7 from '@images/made/imgs/B_4.png'
import Img8 from '@images/made/imgs/Blog1.png'
import Img10 from '@images/made/imgs/Carrossel_Guitarra_03.png'
import Img11 from '@images/made/imgs/Carrossel_Guitarra_04.png'
import Img12 from '@images/made/imgs/Carrossel_Guitarra_05.png'
import Img13 from '@images/made/imgs/Composicao_03.png'
import Img14 from '@images/made/imgs/CorreiaKiss.png'
import Img15 from '@images/made/imgs/EMKT-LUTHIERIA.png'
import Img16 from '@images/made/imgs/FenderJimiHendrix.png'
import Img17 from '@images/made/imgs/IMG_3092.png'
import Img18 from '@images/made/imgs/IMG_3145.png'
import Img19 from '@images/made/imgs/IMG_3545.png'
import Img20 from '@images/made/imgs/IMG_7981-1.png'
import Img21 from '@images/made/imgs/Kala2.png'
import Img22 from '@images/made/imgs/LIU_2.png'
import Img23 from '@images/made/imgs/Luthier_01.png'
import Img24 from '@images/made/imgs/Luthier_02.png'
import Img25 from '@images/made/imgs/Luthier_05.png'
import Img26 from '@images/made/imgs/Luthier_07.png'
import Img27 from '@images/made/imgs/Luthier_08.png'
import Img28 from '@images/made/imgs/M_2.png'
import Img29 from '@images/made/imgs/M_3.png'
import Img31 from '@images/made/imgs/Post1.png'
import Img32 from '@images/made/imgs/Post4.png'
import Img33 from '@images/made/imgs/Post8.png'
import Img34 from '@images/made/imgs/caixas.png'
import Img35 from '@images/made/imgs/encordoamentoretro.png'

import Vd1 from '@images/made/videos/Aproximacao_Guitarra (online-video-cutter.com).mp4'
import Vd2 from '@images/made/videos/Case_Violao (online-video-cutter.com).mp4'
import Vd3 from '@images/made/videos/Microfones (online-video-cutter.com).mp4'
import Vd4 from '@images/made/videos/Pads (online-video-cutter.com).mp4'
import Vd5 from '@images/made/videos/Pedais (online-video-cutter.com).mp4'
import Vd6 from '@images/made/videos/Review Baixo Squier Precision 50.mp4'
import Vd7 from '@images/made/videos/Set_Gaitas (online-video-cutter.com).mp4'
import Vd8 from '@images/made/videos/Zoom_loja_V2 (online-video-cutter.com).mp4'
import Vd9 from '@images/made/videos/Zoom_violao_V2 (online-video-cutter.com).mp4'

import Vd1W from '@images/made/videos/Aproximacao_Guitarra (online-video-cutter.com).webm'
import Vd2W from '@images/made/videos/Case_Violao (online-video-cutter.com).webm'
import Vd3W from '@images/made/videos/Microfones (online-video-cutter.com).webm'
import Vd4W from '@images/made/videos/Pads (online-video-cutter.com).webm'
import Vd5W from '@images/made/videos/Pedais (online-video-cutter.com).webm'
import Vd6W from '@images/made/videos/Review Baixo Squier Precision 50.webm'
import Vd7W from '@images/made/videos/Set_Gaitas (online-video-cutter.com).webm'
import Vd8W from '@images/made/videos/Zoom_loja_V2 (online-video-cutter.com).webm'
import Vd9W from '@images/made/videos/Zoom_violao_V2 (online-video-cutter.com).webm'

const Main = styled.div`
    margin: 0;
    height: 100vh;
    width : 100vw;
`

const Title = styled.header`
    width : 100%;
    margin: 0;

    img {
        width : 100%;
        margin: auto;
    }

    iframe {
        margin: 20px auto;
    }
`

const Playlists = styled.div`
        width: 100vw;
        height: 70vh;
        overflow-x:  auto;
        display:  inline-flex;
        flex-direction:  row;
        overflow-y:  hidden;
        flex-wrap:  nowrap;

        iframe {
            height: 60vh;
            margin: 1vw;
            width: 17vw;
            min-width: 230px;
        }
`

const Description = styled.div`
    margin: 30px auto 15px auto;
    text-align: left;
    
    p {
        margin-top: 0;
    }
`

const Makingof = styled.div`
    width: 100vw;

    iframe {
        height: 85vh;
        width: 100vw;
        margin: 20px auto;
    }
`

const MaterialImg = styled.img`
    width  : 100%;
    height : auto;
    padding: 20px;
`

const MaterialVideo = styled.video`
    width  : 100%;
    height : auto;
    padding: 20px;
`

const Made = () => {
    return (
        <Layout title="Made In Brazil">
            <Main className="middle-xs center-xs">
                <Title>
                    <img src={LogoMade} alt="Logo Made in Brazil" />
                    <iframe src="https://open.spotify.com/follow/1/?uri=spotify:user:e4andqtcxjiik8wlcyns8sbue&size=detail&theme=dark" width="240" height="56" frameBorder="0" allowTransparency={true} title="follow"></iframe>
                </Title>
                <Description className="row col-xs-12 col-sm-8 col-md-6 col-lg-5">
                    <p>A Megastore Made In Brazil entende de música!</p>
                    <p>Há 29 anos oferece o que há de melhor e mais moderno no Brasil e no Mundo em instrumentos musicais e acessórios.</p>
                    <p>A DUEE BRASIL entrou no ritmo da Made através da comunicação cheia de personalidade que desenvolvemos para a marca.</p>
                    <p>Estruturamos a comunicação das lojas, conteúdo digital em diversos canais (Instagram, Facebook, Blog, Youtube e E-Commerce), fazemos lançamento e divulgação de eventos e damos suporte às mídias sociais.</p>
                    <p>Confira alguns dos trabalhos da nossa parceria com a Made.</p>
                </Description>
                <Playlists className="row col-xs-12 center-xs">
                    <iframe src="https://open.spotify.com/embed/playlist/68LglzhL6afHlY0D877XXw" frameBorder="0" allowTransparency={true} allow="encrypted-media" title="playlist1"></iframe>
                    <iframe src="https://open.spotify.com/embed/playlist/6euNX0DQ8V0iyJxMuqQZn5" frameBorder="0" allowTransparency={true} allow="encrypted-media" title="playlist2"></iframe>
                    <iframe src="https://open.spotify.com/embed/playlist/3AXlUoMZPdQBHcBQG8J9ut" frameBorder="0" allowTransparency={true} allow="encrypted-media" title="playlist3"></iframe>
                    <iframe src="https://open.spotify.com/embed/playlist/4OjqDsSaQRQQyqozzD7Csw" frameBorder="0" allowTransparency={true} allow="encrypted-media" title="playlist4"></iframe>
                    <iframe src="https://open.spotify.com/embed/playlist/3AD3DKHsILTPXpbkDGtVmp" frameBorder="0" allowTransparency={true} allow="encrypted-media" title="playlist5"></iframe>
                </Playlists>
                <Makingof className="row col-xs-12">
                    <iframe src="https://player.vimeo.com/video/340465615" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen title="makingof"></iframe>
                </Makingof>
                <div className="row col-xs-12">
                    <Masonry>
                        <MaterialVideo controls autoPlay={true} muted={true} loop playsInline src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-1.mp4" />
                        <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                            <source src={Vd1W} type="video/webm" />
                            <source src={Vd1} type="video/mp4" />
                        </MaterialVideo>
                        <MaterialVideo controls autoPlay={true} muted={true} loop playsInline src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-1-1.mp4" />
                        <MaterialImg src='https://portfolio.duee.com.br/wp-content/uploads/2020/06/3-made.png' alt="conteudo madeinbrazil" />
                        <MaterialImg src={Img12} alt="conteudo madeinbrazil" />
                        <MaterialImg src={Img1} alt="conteudo madeinbrazil" />
                        <MaterialVideo controls autoPlay={true} muted={true} loop playsInline src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-2.mp4" />
                        <MaterialImg src='https://portfolio.duee.com.br/wp-content/uploads/2020/06/banner-made-institucional.gif' alt="conteudo madeinbrazil" />
                        <MaterialImg src={Img29} alt="conteudo madeinbrazil" />
                        <MaterialVideo controls autoPlay={true} muted={true} loop playsInline src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-3.mp4" />
                        <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                            <source src={Vd3W} type="video/webm" />
                            <source src={Vd3} type="video/mp4" />
                        </MaterialVideo>
                        <MaterialImg src='https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-3-junho-2.png' alt="conteudo madeinbrazil" />
                        <MaterialImg src={Img3} alt="conteudo madeinbrazil" />
                        <MaterialVideo controls autoPlay={true} muted={true} loop playsInline src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-2-1.mp4" />
                        <MaterialImg src={Img35} alt="conteudo madeinbrazil" />
                        <MaterialVideo controls autoPlay={true} muted={true} loop  playsInline src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-3-1.mp4" />
                        <MaterialImg src='https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-5.png' alt="conteudo madeinbrazil" />
                        <MaterialImg src='https://portfolio.duee.com.br/wp-content/uploads/2020/06/banner-made-dia-dos-namorados.gif' alt="conteudo madeinbrazil" />
                        <MaterialImg src={Img5} alt="conteudo madeinbrazil" />
                        <MaterialImg src='https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-2-junho-3.png' alt="conteudo madeinbrazil" />
                        <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                            <source src={Vd7W} type="video/webm" />
                            <source src={Vd7} type="video/mp4" />
                        </MaterialVideo>
                        <MaterialImg src='https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-2-junho-2.png' alt="conteudo madeinbrazil" />
                        <MaterialImg src={Img6} alt="conteudo madeinbrazil" />
                        <MaterialVideo controls autoPlay={true} muted={true} loop playsInline src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-1-junho-3.mp4" />
                        <MaterialImg src='https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-4.png' alt="conteudo madeinbrazil" />
                        <MaterialImg src={Img7} alt="conteudo madeinbrazil" />
                        <MaterialVideo controls autoPlay={true} muted={true} loop playsInline src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-4-junho-2.mp4" />
                        <MaterialImg src='https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-2.png' alt="conteudo madeinbrazil" />
                        <MaterialImg src={Img8} alt="conteudo madeinbrazil" />
                        <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                            <source src={Vd2W} type="video/webm" />
                            <source src={Vd2} type="video/mp4" />
                        </MaterialVideo>
                        <MaterialVideo controls autoPlay={true} muted={true} loop playsInline src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-5-junho-2.mp4" />
                        <MaterialImg src={Img10} alt="conteudo madeinbrazil" />
                        <MaterialVideo controls autoPlay={true} muted={true} loop playsInline src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-5-junho-3.mp4" />
                        <MaterialImg src={Img11} alt="conteudo madeinbrazil" />

                        <MaterialImg src={Img19} alt="conteudo madeinbrazil" />
                        <MaterialVideo controls autoPlay={true} muted={true} loop playsInline src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-6-junho-3.mp4" />
                        <MaterialImg src={Img13} alt="conteudo madeinbrazil" />
                        <MaterialImg src={Img14} alt="conteudo madeinbrazil" />
                        <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                            <source src={Vd5W} type="video/webm" />
                            <source src={Vd5} type="video/mp4" />
                        </MaterialVideo>
                        <MaterialImg src={Img33} alt="conteudo madeinbrazil" />
                        <MaterialImg src={Img18} alt="conteudo madeinbrazil" />
                        <MaterialImg src={Img26} alt="conteudo madeinbrazil" />
                        <MaterialImg src={Img20} alt="conteudo madeinbrazil" />
                        <MaterialImg src={Img21} alt="conteudo madeinbrazil" />
                        <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                            <source src={Vd9W} type="video/webm" />
                            <source src={Vd9} type="video/mp4" />
                        </MaterialVideo>
                        <MaterialImg src={Img2} alt="conteudo madeinbrazil" />
                        <MaterialImg src={Img23} alt="conteudo madeinbrazil" />
                        <MaterialImg src={Img25} alt="conteudo madeinbrazil" />
                        <MaterialImg src={Img15} alt="conteudo madeinbrazil" />
                        <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                            <source src={Vd8W} type="video/webm" />
                            <source src={Vd8} type="video/mp4" />
                        </MaterialVideo>
                        <MaterialImg src={Img31} alt="conteudo madeinbrazil" />
                        <MaterialImg src={Img32} alt="conteudo madeinbrazil" />
                        <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                            <source src={Vd6W} type="video/webm" />
                            <source src={Vd6} type="video/mp4" />
                        </MaterialVideo>
                        <MaterialImg src={Img22} alt="conteudo madeinbrazil" />
                        <MaterialImg src={Img16} alt="conteudo madeinbrazil" />
                        <MaterialImg src={Img27} alt="conteudo madeinbrazil" />
                        <MaterialImg src={Img17} alt="conteudo madeinbrazil" />
                        <MaterialImg src={Img34} alt="conteudo madeinbrazil" />
                        <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                            <source src={Vd4W} type="video/webm" />
                            <source src={Vd4} type="video/mp4" />
                        </MaterialVideo>
                        <MaterialImg src={Img24} alt="conteudo madeinbrazil" />
                        <MaterialImg src={Img28} alt="conteudo madeinbrazil" />
                    </Masonry>
                </div>
            </Main>
        </Layout >
    )
}

export default Made