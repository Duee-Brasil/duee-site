import React from "react"
import styled from "styled-components"

import Layout from "@components/layout/layout"
import Masonry from "@components/Masonry"

import Sereia from '@images/starbucks/starbucks-coffee-logo-vector.svg'
import LogoStbx from '@images/starbucks/Starbucks-logo.svg'

const Rappi1 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/Banner-App-Starbucks-Rappi-V2.png'
const Rappi2 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/Banner-App-Starbucks-Rappi_V2.png'
const Rappi3 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/Banner-Web-Starbucks-Rappi-V1.png'
const Rappi4 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/InAPP Starbucks_V2.png'
const Rappi5 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/pdq_870x360_t.png'

const Mail1 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/07-12-DE-MAIO.png'
const Mail2 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/11-DE-ABRIL.png'
const Mail3 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/23-28-DE-ABRIL.png'
const Mail4 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/26-28-DE-ABRIL.png'
const Mail5 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/30-05-DE-MAIO.png'

const Post1 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/13.12_post-feed-starbucks-1080x1080.mp4'
const Post2 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/26_03.png'
const Post3 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/DarkPost.png'
const Post4 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/SBUX_FRAP_MORANGO_V4.mp4'
const Post5 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/Starbucks-Post-11-abril.png'
const Post6 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/post_doublestars_final.mp4'

const Story1 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/01-mp4.mp4'
const Story2 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/1-4_SBUX_STORIES_FRAP_MORANGO_V2.mp4'
const Story3 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/STORIES_V2.mp4'
const Story4 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/Stories-Chai-V1.gif'
const Story5 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/Stories-Dia-das-Maes.gif'
const Story6 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/Stories-Starbucks-Berinjela-5.png'

const Post1W = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/13.12_post-feed-starbucks-1080x1080.webm'
const Post4W = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/SBUX_FRAP_MORANGO_V4.webm'
const Post6W = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/post_doublestars_final.webm'

const Story1W = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/01-mp4.webm'
const Story2W = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/1-4_SBUX_STORIES_FRAP_MORANGO_V2.webm'
const Story3W = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/STORIES_V2.webm'

const Pdv1 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/08_01.jpg'

const New1 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/site_img_site_marshmallow.jpg'
const New2 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/site_img_starbucks_1.jpg'
const New3 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/site_img_starbucks_2.jpg'
const New4 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/site_img_starbucks_3.jpg'
const New5 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/site_img_starbucks_5.jpg'
const New6 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/site_img_starbucks_6.jpg'
const New7 = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/video_site_starbucks.mp4'
const New7W = 'https://portfolio.duee.com.br/wp-content/uploads/2021/09/video_site_starbucks.webm'

const greensbk = "#006241"
const accentgreen = "#00754a"
const lightgreen = "#d4e9e2"
const housegreen = "#1e3932"
const warmneutral = "#f2f0eb"
const coolneutral = "#f9f9f9"

const Content = styled.div`
    background-color: ${warmneutral};
    color           : ${housegreen};
    margin          : 0;
    padding         : 0;
    width           : 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const HeaderStbx = styled.div`
    height: 120vh;
    perspective    : 3px;
    transform-style: preserve-3d;
    overflow       : hidden;
    position       : relative;
    width          : 100%;
    margin         : 0;
    padding        : 0;
`

const Paralax = styled.div`
    align-items          : center;
    position             : relative;
    width                : 100%;
    height               : 100%;
    background-attachment: fixed;
    background-image     : url(${LogoStbx});
    background-position  : center center;
    background-size      : contain;
    background-repeat    : no-repeat;

    img {
        position: relative;
        width   : 80%;
        height  : 90%;
        top     : 10%;
        right   : -40%;
        z-index : -1;
        opacity : 0.6;
        margin  : auto;
    }
`

const Description = styled.div`
    margin: 30px auto;
    text-align: left;
    width: 100%;
    max-width: 800px;
    font-size: 1.2rem;
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

const Starbucks = () => (
    <Layout title="Starbucks">
        <Content>
            <HeaderStbx>
                <Paralax>
                    <img src={Sereia} alt="starbuckslogo" width={"100%"} />
                </Paralax>
            </HeaderStbx>
            <Description>
                <p>A Starbucks é a maior franquia de cafeteria do mundo, conhecida pela excelência desde a colheita do café até a sua apresentação.</p>
                <p>A sua comunicação deve ser uma extensão dessa excelência e, por isso, a Starbucks Brasil escolheu a DUEE para desenvolver parte dela.</p>
                <p>Desenvolvemos a comunicação de PDV, fazemos material de endomarketing, cuidamos de campanhas de lançamentos de produtos, embalagens, conteúdos internos e damos suporte full service.</p>
                <p>Aqui estão alguns dos melhores trabalhos em parceria com a Starbucks.</p>
            </Description>
                <Masonry>
                    <MaterialImg src={New6} alt="post instagram" />
                    <MaterialImg src={Rappi1} alt="anuncio Rappi" />
                    <MaterialImg src={Post5} alt="post instagram" />
                    <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                        <source src={Story3W} type="video/webm" />
                        <source src={Story3} type="video/mp4" />
                    </MaterialVideo>
                    <MaterialImg src={Mail4} alt="email marketing" />
                    <MaterialImg src={New5} alt="post instagram" />
                    <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                        <source src={Post4W} type="video/webm" />
                        <source src={Post4} type="video/mp4" />
                    </MaterialVideo>
                    <MaterialImg src={Rappi4} alt="anuncio Rappi" />
                    <MaterialImg src={New4} alt="post instagram" />
                    <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                        <source src={Post6W} type="video/webm" />
                        <source src={Post6} type="video/mp4" />
                    </MaterialVideo>
                    <MaterialImg src={Mail3} alt="email marketing" />
                    <MaterialImg src={Story4} alt="story instagram" />
                    <MaterialImg src={Post2} alt="post instagram" />
                    <MaterialImg src={Rappi5} alt="anuncio Rappi" />
                    <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                        <source src={Story2W} type="video/webm" />
                        <source src={Story2} type="video/mp4" />
                    </MaterialVideo>
                    <MaterialImg src={Mail1} alt="email marketing" />
                    <MaterialImg src={Mail5} alt="email marketing" />
                    <MaterialImg src={Story5} alt="story instagram" />
                    <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                        <source src={Post1W} type="video/webm" />
                        <source src={Post1} type="video/mp4" />
                    </MaterialVideo>
                    <MaterialImg src={New3} alt="post instagram" />
                    <MaterialImg src={Rappi2} alt="anuncio Rappi" />
                    <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                        <source src={Story1W} type="video/webm" />
                        <source src={Story1} type="video/mp4" />
                    </MaterialVideo>
                    <MaterialImg src={Pdv1} alt="pdv" />
                    <MaterialImg src={New2} alt="post instagram" />
                    <MaterialImg src={Post3} alt="post instagram" />
                    <MaterialImg src={Mail2} alt="email marketing" />
                    <MaterialVideo autoPlay={true} muted={true} loop controls={true} playsInline>
                        <source src={New7W} type="video/webm" />
                        <source src={New7} type="video/mp4" />
                    </MaterialVideo>
                    <MaterialImg src={Story6} alt="story instagram" />
                    <MaterialImg src={Rappi3} alt="anuncio Rappi" />
                    <MaterialImg src={New1} alt="post instagram" />
                </Masonry>
        </Content>
    </Layout >
)

export default Starbucks