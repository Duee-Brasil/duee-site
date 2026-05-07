import Layout from '@components/layout/layout'
import Masonry from '@components/Masonry'
import Story3W from '@images/faxe/1_DINNER_V1.webm'
import Story4W from '@images/faxe/2_DINNER_V1.webm'
import Post1W from '@images/faxe/3_POST_FAXE_V1 2.webm'
import Post2W from '@images/faxe/3_POST_FAXE_V1.webm'
import HeaderBG from '@images/faxe/header.jpg'
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
import Img41 from '@images/faxe/img/041.png'
import Img42 from '@images/faxe/img/042.png'
import Post4W from '@images/faxe/Post 02.webm'
import Post5W from '@images/faxe/Post 07_V2.webm'
import Post1 from '@images/faxe/post/3_POST_FAXE_V1 2.mp4'
import Post2 from '@images/faxe/post/3_POST_FAXE_V1.mp4'
import Post4 from '@images/faxe/post/Post 02.mp4'
import Post5 from '@images/faxe/post/Post 07_V2.mp4'
import Post3 from '@images/faxe/post/POST-2.mp4'
import Post6 from '@images/faxe/post/Post1.mp4'
import Post8 from '@images/faxe/post/post2 2.mp4'
import Post7 from '@images/faxe/post/Post2.mp4'
import Post9 from '@images/faxe/post/post7-vid.mp4'
import Post3W from '@images/faxe/POST-2.webm'
import Post6W from '@images/faxe/Post1.webm'
import Post8W from '@images/faxe/post2 2.webm'
import Post7W from '@images/faxe/Post2.webm'
import Post9W from '@images/faxe/post7-vid.webm'
import Story1W from '@images/faxe/STORIE_FINAL.webm'
import Story3 from '@images/faxe/stories/1_DINNER_V1.mp4'
import Story4 from '@images/faxe/stories/2_DINNER_V1.mp4'
import Story2 from '@images/faxe/stories/Storie_ 1.png'
import Story1 from '@images/faxe/stories/STORIE_FINAL.mp4'
import Logofaxe from '@images/home/FAXE-LOGO.svg'
import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
  margin: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`

const Title = styled.header`
  width: 100%;
  margin: 0;
  max-height: 95vh;
  display: block;
  position: relative;
`

const Background = styled.img`
  width: 100%;
  max-height: 95vh;
  filter: opacity(0.8);
`

const Logo = styled.img`
  position: absolute;
  width: 30%;
  margin: auto;
  top: 20%;
  left: 35%;
`

const Content = styled.div`
  width: 100%;
  padding: 30px;
  margin: 0;
  justify-content: center;
`

const Description = styled.div`
  margin: auto;
  text-align: left;
  max-width: 800px;
  font-size: 1.2rem;
`

const Makingof = styled.iframe`
  width: 100%;
  height: calc(80% * 9 / 16);
  max-height: 80vh;
  justify-content: center;
  margin: 40px;
`

const MaterialImg = styled.img`
  width: 100%;
  height: auto;
  padding: 20px;
`

const MaterialVideo = styled.video`
  width: 100%;
  height: auto;
  padding: 20px;
`

const Faxe = () => {
  return (
    <Layout title="Faxe">
      <Main>
        <Title>
          <Background alt="background" src={HeaderBG} />
          <Logo alt="faxe" src={Logofaxe} />
        </Title>

        <Content>
          <Description>
            <p>
              A cerveja dinamarquesa Faxe Beer é inspirada no universo Viking,
              conquistando os mais exigentes paladares de guerreiros do happy
              hour ao redor do mundo.
            </p>
            <p>
              Aqui no Brasil, foi a DUEE que conquistou a batalha pela
              comunicação da marca e tem feito um trabalho divino.
            </p>
            <p>
              Criamos os conteúdos semanais para as redes sociais, Instagram e
              Facebook, damos suporte em eventos, lançamentos, promoções e
              relacionamento com clientes e influenciadores.
            </p>
            <p>Confira alguns trabalhos da nossa parceria com a Faxe.</p>
          </Description>

          <Makingof
            allowFullScreen
            allow="autoplay; fullscreen"
            frameBorder="0"
            src="https://player.vimeo.com/video/296450706"
            title="making of"
          />
          <Masonry>
            <MaterialImg alt="conteudo faxe" src={Img2} />
            <MaterialImg alt="conteudo faxe" src={Img40} />
            <MaterialImg alt="conteudo faxe" src={Img4} />
            <MaterialVideo
              loop
              playsInline
              autoPlay={true}
              controls={true}
              muted={true}
            >
              <source src={Post1W} type="video/webm" />
              <source src={Post1} type="video/mp4" />
            </MaterialVideo>
            <MaterialImg alt="conteudo faxe" src={Img19} />
            <MaterialImg alt="conteudo faxe" src={Img14} />
            <MaterialImg alt="conteudo faxe" src={Img29} />
            <MaterialImg alt="conteudo faxe" src={Img10} />
            <MaterialVideo
              loop
              playsInline
              autoPlay={true}
              controls={true}
              muted={true}
            >
              <source src={Story3W} type="video/webm" />
              <source src={Story3} type="video/mp4" />
            </MaterialVideo>
            <MaterialImg alt="conteudo faxe" src={Img1} />
            <MaterialImg alt="conteudo faxe" src={Img39} />
            <MaterialVideo
              loop
              playsInline
              autoPlay={true}
              controls={true}
              muted={true}
            >
              <source src={Post2W} type="video/webm" />
              <source src={Post2} type="video/mp4" />
            </MaterialVideo>
            <MaterialImg alt="conteudo faxe" src={Img17} />
            <MaterialImg alt="conteudo faxe" src={Img18} />
            <MaterialImg alt="conteudo faxe" src={Img20} />
            <MaterialVideo
              loop
              playsInline
              autoPlay={true}
              controls={true}
              muted={true}
            >
              <source src={Post3W} type="video/webm" />
              <source src={Post3} type="video/mp4" />
            </MaterialVideo>
            <MaterialImg alt="conteudo faxe" src={Img28} />
            <MaterialImg alt="conteudo faxe" src={Img8} />
            <MaterialImg alt="conteudo faxe" src={Img3} />
            <MaterialVideo
              loop
              playsInline
              autoPlay={true}
              controls={true}
              muted={true}
            >
              <source src={Story1W} type="video/webm" />
              <source src={Story1} type="video/mp4" />
            </MaterialVideo>
            <MaterialImg alt="conteudo faxe" src={Img25} />
            <MaterialImg alt="conteudo faxe" src={Img26} />
            <MaterialImg alt="conteudo faxe" src={Img22} />
            <MaterialVideo
              loop
              playsInline
              autoPlay={true}
              controls={true}
              muted={true}
            >
              <source src={Post4W} type="video/webm" />
              <source src={Post4} type="video/mp4" />
            </MaterialVideo>
            <MaterialImg alt="conteudo faxe" src={Img31} />
            <MaterialImg alt="conteudo faxe" src={Img32} />
            <MaterialImg alt="conteudo faxe" src={Img41} />
            <MaterialVideo
              loop
              playsInline
              autoPlay={true}
              controls={true}
              muted={true}
            >
              <source src={Story4W} type="video/webm" />
              <source src={Story4} type="video/mp4" />
            </MaterialVideo>
            <MaterialImg alt="conteudo faxe" src={Img23} />
            <MaterialImg alt="conteudo faxe" src={Img33} />
            <MaterialVideo
              loop
              playsInline
              autoPlay={true}
              controls={true}
              muted={true}
            >
              <source src={Post5W} type="video/webm" />
              <source src={Post5} type="video/mp4" />
            </MaterialVideo>
            <MaterialImg alt="conteudo faxe" src={Img12} />
            <MaterialImg alt="conteudo faxe" src={Img27} />
            <MaterialImg alt="conteudo faxe" src={Img42} />
            <MaterialImg alt="conteudo faxe" src={Img13} />
            <MaterialVideo
              loop
              playsInline
              autoPlay={true}
              controls={true}
              muted={true}
            >
              <source src={Post9W} type="video/webm" />
              <source src={Post9} type="video/mp4" />
            </MaterialVideo>
            <MaterialImg alt="conteudo faxe" src={Img30} />
            <MaterialImg alt="conteudo faxe" src={Img6} />
            <MaterialImg alt="conteudo faxe" src={Img38} />
            <MaterialImg alt="conteudo faxe" src={Img9} />
            <MaterialVideo
              loop
              playsInline
              autoPlay={true}
              controls={true}
              muted={true}
            >
              <source src={Post6W} type="video/webm" />
              <source src={Post6} type="video/mp4" />
            </MaterialVideo>
            <MaterialImg alt="conteudo faxe" src={Img34} />
            <MaterialImg alt="conteudo faxe" src={Img7} />
            <MaterialImg alt="conteudo faxe" src={Img35} />
            <MaterialImg alt="conteudo faxe" src={Img5} />
            <MaterialVideo
              loop
              playsInline
              autoPlay={true}
              controls={true}
              muted={true}
            >
              <source src={Post7W} type="video/webm" />
              <source src={Post7} type="video/mp4" />
            </MaterialVideo>
            <MaterialImg alt="conteudo faxe" src={Img15} />
            <MaterialImg alt="conteudo faxe" src={Img36} />
            <MaterialImg alt="conteudo faxe" src={Img24} />
            <MaterialVideo
              loop
              playsInline
              autoPlay={true}
              controls={true}
              muted={true}
            >
              <source src={Post8W} type="video/webm" />
              <source src={Post8} type="video/mp4" />
            </MaterialVideo>
            <MaterialImg alt="conteudo faxe" src={Img11} />
            <MaterialImg alt="conteudo faxe" src={Img21} />
            <MaterialImg alt="conteudo faxe" src={Story2} />
            <MaterialImg alt="conteudo faxe" src={Img16} />
            <MaterialImg alt="conteudo faxe" src={Img37} />
          </Masonry>
        </Content>
      </Main>
    </Layout>
  )
}

export default Faxe
