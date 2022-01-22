import React from "react"
import styled from "styled-components"

import Layout from "@components/layout/layout"
import Masonry from "@components/Masonry"
import Logofaxe from '@images/home/FAXE-LOGO.svg'
import HeaderBG from '@images/faxe/header.jpg'

import Story1 from '@images/faxe/stories/STORIE_FINAL.mp4'
import Story2 from '@images/faxe/stories/Storie_ 1.png'
import Story3 from '@images/faxe/stories/1_DINNER_V1.mp4'
import Story4 from '@images/faxe/stories/2_DINNER_V1.mp4'

import Post1 from '@images/faxe/post/3_POST_FAXE_V1 2.mp4'
import Post2 from '@images/faxe/post/3_POST_FAXE_V1.mp4'
import Post3 from '@images/faxe/post/POST-2.mp4'
import Post4 from '@images/faxe/post/Post 02.mp4'
import Post5 from '@images/faxe/post/Post 07_V2.mp4'
import Post6 from '@images/faxe/post/Post1.mp4'
import Post7 from '@images/faxe/post/Post2.mp4'
import Post8 from '@images/faxe/post/post2 2.mp4'
import Post9 from '@images/faxe/post/post7-vid.mp4'

import Img1 from '@images/faxe/img/001.png'
import Img2 from '@images/faxe/img/002.png'
import Img3 from '@images/faxe/img/003.png'
import Img4 from '@images/faxe/img/004.png'
import Img5 from '@images/faxe/img/005.png'
import Img6 from '@images/faxe/img/006.png'
import Img7 from '@images/faxe/img/007.png'
import Img8 from '@images/faxe/img/008.png'
import Img9 from '@images/faxe/img/009.png'
import Img10 from '@images/faxe/img/010.png'
import Img11 from '@images/faxe/img/011.png'
import Img12 from '@images/faxe/img/012.png'
import Img13 from '@images/faxe/img/013.png'
import Img14 from '@images/faxe/img/014.png'
import Img15 from '@images/faxe/img/015.png'
import Img16 from '@images/faxe/img/016.png'
import Img17 from '@images/faxe/img/017.png'
import Img18 from '@images/faxe/img/018.png'
import Img19 from '@images/faxe/img/019.png'
import Img20 from '@images/faxe/img/020.png'
import Img21 from '@images/faxe/img/021.png'
import Img22 from '@images/faxe/img/022.png'
import Img23 from '@images/faxe/img/023.png'
import Img24 from '@images/faxe/img/024.png'
import Img25 from '@images/faxe/img/025.png'
import Img26 from '@images/faxe/img/026.png'
import Img27 from '@images/faxe/img/027.png'
import Img28 from '@images/faxe/img/028.png'
import Img29 from '@images/faxe/img/029.png'
import Img30 from '@images/faxe/img/030.png'
import Img31 from '@images/faxe/img/031.png'
import Img32 from '@images/faxe/img/032.png'
import Img33 from '@images/faxe/img/033.png'
import Img34 from '@images/faxe/img/034.png'
import Img35 from '@images/faxe/img/035.png'
import Img36 from '@images/faxe/img/036.png'
import Img37 from '@images/faxe/img/037.png'
import Img38 from '@images/faxe/img/038.png'
import Img39 from '@images/faxe/img/039.png'
import Img40 from '@images/faxe/img/040.png'
import Img42 from '@images/faxe/img/042.png'
import Img41 from '@images/faxe/img/041.png'

import Story1W from '@images/faxe/STORIE_FINAL.webm'
import Story3W from '@images/faxe/1_DINNER_V1.webm'
import Story4W from '@images/faxe/2_DINNER_V1.webm'

import Post1W from '@images/faxe/3_POST_FAXE_V1 2.webm'
import Post2W from '@images/faxe/3_POST_FAXE_V1.webm'
import Post3W from '@images/faxe/POST-2.webm'
import Post4W from '@images/faxe/Post 02.webm'
import Post5W from '@images/faxe/Post 07_V2.webm'
import Post6W from '@images/faxe/Post1.webm'
import Post7W from '@images/faxe/Post2.webm'
import Post8W from '@images/faxe/post2 2.webm'
import Post9W from '@images/faxe/post7-vid.webm'

const Main = styled.div`
    margin: 0;
    height: 100vh;
    width : 100vw;
`

const Title = styled.header`
    width      : 100%;
    margin     : 0;
    position:  relative;
    max-height: 95vh;

    img {
        width: 100%;
        max-height: 95vh;
        filter: opacity(0.8);
    }
`

const Logo = styled.img`
    position: absolute;
    width   : 30%;
    margin  : auto;
    top     : 20%;
    left    : 35%;
    filter: none;
`

const Content = styled.div`
    width      : 100vw;
    padding-top: 30px !important;
    margin: 0;

    div {
        margin: auto;
    }
`

const Description = styled.div`
    margin: auto;
    text-align: left;
`

const Makingof = styled.div`
        padding: 0;
        width : 100vw;
        height: calc(80vw * 9 / 16);
        max-height: 90vh;
        justify-content:  center;
        padding-top: 30px;

        iframe {
            width: 80vw;
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

const Faxe = () => {

    return (
        <Layout title="Faxe">
            <Main className='middle-xs center-xs' >

                <Title>
                    <img src={HeaderBG} alt="background" />
                    <Logo src={Logofaxe} alt="faxe" />
                </Title>

                <Content className='row'>
                    <Description className="row col-xs-12 col-sm-8 col-md-6 col-lg-5">
                        <p>A cerveja dinamarquesa Faxe Beer é inspirada no universo Viking, conquistando os mais exigentes paladares de guerreiros do happy hour ao redor do mundo.</p>
                        <p>Aqui no Brasil, foi a DUEE que conquistou a batalha pela comunicação da marca e tem feito um trabalho divino.</p>
                        <p>Criamos os conteúdos semanais para as redes sociais, Instagram e Facebook, damos suporte em eventos, lançamentos, promoções e relacionamento com clientes e influenciadores.</p>
                        <p>Confira alguns trabalhos da nossa parceria com a Faxe.</p>
                    </Description>

                    <Makingof className="row col-xs-12">
                        <iframe src="https://player.vimeo.com/video/296450706" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen title="making of" />
                    </Makingof>
                    <div className="row col-xs-12">
                        <Masonry>
                            <MaterialImg src={Img2} alt="conteudo faxe" />
                            <MaterialImg src={Img40} alt="conteudo faxe" />
                            <MaterialImg src={Img4} alt="conteudo faxe" />
                            <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                                <source src={Post1W} type="video/webm" />
                                <source src={Post1} type="video/mp4" />
                            </MaterialVideo>
                            <MaterialImg src={Img19} alt="conteudo faxe" />
                            <MaterialImg src={Img14} alt="conteudo faxe" />
                            <MaterialImg src={Img29} alt="conteudo faxe" />
                            <MaterialImg src={Img10} alt="conteudo faxe" />
                            <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline >
                                <source src={Story3W} type="video/webm" />
                                <source src={Story3} type="video/mp4" />
                            </MaterialVideo>
                            <MaterialImg src={Img1} alt="conteudo faxe" />
                            <MaterialImg src={Img39} alt="conteudo faxe" />
                            <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                                <source src={Post2W} type="video/webm" />
                                <source src={Post2} type="video/mp4" />
                            </MaterialVideo>
                            <MaterialImg src={Img17} alt="conteudo faxe" />
                            <MaterialImg src={Img18} alt="conteudo faxe" />
                            <MaterialImg src={Img20} alt="conteudo faxe" />
                            <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                                <source src={Post3W} type="video/webm" />
                                <source src={Post3} type="video/mp4" />
                            </MaterialVideo>
                            <MaterialImg src={Img28} alt="conteudo faxe" />
                            <MaterialImg src={Img8} alt="conteudo faxe" />
                            <MaterialImg src={Img3} alt="conteudo faxe" />
                            <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                                <source src={Story1W} type="video/webm" />
                                <source src={Story1} type="video/mp4" />
                            </MaterialVideo>
                            <MaterialImg src={Img25} alt="conteudo faxe" />
                            <MaterialImg src={Img26} alt="conteudo faxe" />
                            <MaterialImg src={Img22} alt="conteudo faxe" />
                            <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                                <source src={Post4W} type="video/webm" />
                                <source src={Post4} type="video/mp4" />
                            </MaterialVideo>
                            <MaterialImg src={Img31} alt="conteudo faxe" />
                            <MaterialImg src={Img32} alt="conteudo faxe" />
                            <MaterialImg src={Img41} alt="conteudo faxe" />
                            <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                                <source src={Story4W} type="video/webm" />
                                <source src={Story4} type="video/mp4" />
                            </MaterialVideo>
                            <MaterialImg src={Img23} alt="conteudo faxe" />
                            <MaterialImg src={Img33} alt="conteudo faxe" />
                            <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                                <source src={Post5W} type="video/webm" />
                                <source src={Post5} type="video/mp4" />
                            </MaterialVideo>
                            <MaterialImg src={Img12} alt="conteudo faxe" />
                            <MaterialImg src={Img27} alt="conteudo faxe" />
                            <MaterialImg src={Img42} alt="conteudo faxe" />
                            <MaterialImg src={Img13} alt="conteudo faxe" />
                            <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                                <source src={Post9W} type="video/webm" />
                                <source src={Post9} type="video/mp4" />
                            </MaterialVideo>
                            <MaterialImg src={Img30} alt="conteudo faxe" />
                            <MaterialImg src={Img6} alt="conteudo faxe" />
                            <MaterialImg src={Img38} alt="conteudo faxe" />
                            <MaterialImg src={Img9} alt="conteudo faxe" />
                            <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                                <source src={Post6W} type="video/webm" />
                                <source src={Post6} type="video/mp4" />
                            </MaterialVideo>
                            <MaterialImg src={Img34} alt="conteudo faxe" />
                            <MaterialImg src={Img7} alt="conteudo faxe" />
                            <MaterialImg src={Img35} alt="conteudo faxe" />
                            <MaterialImg src={Img5} alt="conteudo faxe" />
                            <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                                <source src={Post7W} type="video/webm" />
                                <source src={Post7} type="video/mp4" />
                            </MaterialVideo>
                            <MaterialImg src={Img15} alt="conteudo faxe" />
                            <MaterialImg src={Img36} alt="conteudo faxe" />
                            <MaterialImg src={Img24} alt="conteudo faxe" />
                            <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                                <source src={Post8W} type="video/webm" />
                                <source src={Post8} type="video/mp4" />
                            </MaterialVideo>
                            <MaterialImg src={Img11} alt="conteudo faxe" />
                            <MaterialImg src={Img21} alt="conteudo faxe" />
                            <MaterialImg src={Story2} alt="conteudo faxe" />
                            <MaterialImg src={Img16} alt="conteudo faxe" />
                            <MaterialImg src={Img37} alt="conteudo faxe" />
                        </Masonry>
                    </div>
                </Content>
            </Main>
        </Layout >
    )
}

export default Faxe