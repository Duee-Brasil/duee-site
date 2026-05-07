import Layout from '@components/layout/layout'
import Masonry from '@components/Masonry'
import LogoMade from '@images/made/Banner1.png'
import Img1 from '@images/made/imgs/1.png'
import Img2 from '@images/made/imgs/2017_11_KALA-LTP-SCC-6919.png'
import Img3 from '@images/made/imgs/2017_11_KALA-LTP-SCC-6924.png'
import Img5 from '@images/made/imgs/2017_11_KALA-LTP-SCC-6932.png'
import Img7 from '@images/made/imgs/B_4.png'
import Img6 from '@images/made/imgs/BAT_1.png'
import Img8 from '@images/made/imgs/Blog1.png'
import Img34 from '@images/made/imgs/caixas.png'
import Img10 from '@images/made/imgs/Carrossel_Guitarra_03.png'
import Img11 from '@images/made/imgs/Carrossel_Guitarra_04.png'
import Img12 from '@images/made/imgs/Carrossel_Guitarra_05.png'
import Img13 from '@images/made/imgs/Composicao_03.png'
import Img14 from '@images/made/imgs/CorreiaKiss.png'
import Img15 from '@images/made/imgs/EMKT-LUTHIERIA.png'
import Img35 from '@images/made/imgs/encordoamentoretro.png'
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
import Vd1 from '@images/made/videos/Aproximacao_Guitarra (online-video-cutter.com).mp4'
import Vd1W from '@images/made/videos/Aproximacao_Guitarra (online-video-cutter.com).webm'
import Vd2 from '@images/made/videos/Case_Violao (online-video-cutter.com).mp4'
import Vd2W from '@images/made/videos/Case_Violao (online-video-cutter.com).webm'
import Vd3 from '@images/made/videos/Microfones (online-video-cutter.com).mp4'
import Vd3W from '@images/made/videos/Microfones (online-video-cutter.com).webm'
import Vd4 from '@images/made/videos/Pads (online-video-cutter.com).mp4'
import Vd4W from '@images/made/videos/Pads (online-video-cutter.com).webm'
import Vd5 from '@images/made/videos/Pedais (online-video-cutter.com).mp4'
import Vd5W from '@images/made/videos/Pedais (online-video-cutter.com).webm'
import Vd6 from '@images/made/videos/Review Baixo Squier Precision 50.mp4'
import Vd6W from '@images/made/videos/Review Baixo Squier Precision 50.webm'
import Vd7 from '@images/made/videos/Set_Gaitas (online-video-cutter.com).mp4'
import Vd7W from '@images/made/videos/Set_Gaitas (online-video-cutter.com).webm'
import Vd8 from '@images/made/videos/Zoom_loja_V2 (online-video-cutter.com).mp4'
import Vd8W from '@images/made/videos/Zoom_loja_V2 (online-video-cutter.com).webm'
import Vd9 from '@images/made/videos/Zoom_violao_V2 (online-video-cutter.com).mp4'
import Vd9W from '@images/made/videos/Zoom_violao_V2 (online-video-cutter.com).webm'
import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
  margin: 0;
  height: 100vh;
  width: 100vw;
`

const Title = styled.header`
  width: 100%;
  margin: 0;
  margin-bottom: 30px;

  img {
    width: 100%;
  }
`

const Playlists = styled.div`
  width: 100%;
  height: 70%;
  overflow-x: auto;
  display: inline-flex;
  flex-direction: row;
  overflow-y: hidden;
  flex-wrap: nowrap;

  iframe {
    height: 60vh;
    margin: 1vw;
    width: 17vw;
    min-width: 230px;
  }
`

const Description = styled.div`
  margin: 30px auto;
  text-align: left;
  max-width: 800px;
  font-size: 1.3rem;
  justify-content: center;
`

const Makingof = styled.iframe`
  width: 100%;
  height: calc(100% * 9 / 16);
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

const Made = () => {
  return (
    <Layout title="Made In Brazil">
      <Main>
        <Title>
          <img alt="Logo Made in Brazil" src={LogoMade} />
          <iframe
            allowTransparency={true}
            frameBorder="0"
            height="56"
            src="https://open.spotify.com/follow/1/?uri=spotify:user:e4andqtcxjiik8wlcyns8sbue&size=detail&theme=dark"
            title="follow"
            width="240"
          ></iframe>
        </Title>
        <Description>
          <p>A Megastore Made In Brazil entende de música!</p>
          <p>
            Há 29 anos oferece o que há de melhor e mais moderno no Brasil e no
            Mundo em instrumentos musicais e acessórios.
          </p>
          <p>
            A DUEE BRASIL entrou no ritmo da Made através da comunicação cheia
            de personalidade que desenvolvemos para a marca.
          </p>
          <p>
            Estruturamos a comunicação das lojas, conteúdo digital em diversos
            canais (Instagram, Facebook, Blog, Youtube e E-Commerce), fazemos
            lançamento e divulgação de eventos e damos suporte às mídias
            sociais.
          </p>
          <p>Confira alguns dos trabalhos da nossa parceria com a Made.</p>
        </Description>
        <Playlists>
          <iframe
            allow="encrypted-media"
            allowTransparency={true}
            frameBorder="0"
            src="https://open.spotify.com/embed/playlist/68LglzhL6afHlY0D877XXw"
            title="playlist1"
          ></iframe>
          <iframe
            allow="encrypted-media"
            allowTransparency={true}
            frameBorder="0"
            src="https://open.spotify.com/embed/playlist/6euNX0DQ8V0iyJxMuqQZn5"
            title="playlist2"
          ></iframe>
          <iframe
            allow="encrypted-media"
            allowTransparency={true}
            frameBorder="0"
            src="https://open.spotify.com/embed/playlist/3AXlUoMZPdQBHcBQG8J9ut"
            title="playlist3"
          ></iframe>
          <iframe
            allow="encrypted-media"
            allowTransparency={true}
            frameBorder="0"
            src="https://open.spotify.com/embed/playlist/4OjqDsSaQRQQyqozzD7Csw"
            title="playlist4"
          ></iframe>
          <iframe
            allow="encrypted-media"
            allowTransparency={true}
            frameBorder="0"
            src="https://open.spotify.com/embed/playlist/3AD3DKHsILTPXpbkDGtVmp"
            title="playlist5"
          ></iframe>
        </Playlists>
        <Makingof
          allowFullScreen
          allow="autoplay; fullscreen"
          frameBorder="0"
          src="https://player.vimeo.com/video/340465615"
          title="makingof"
        />
        <Masonry>
          <MaterialVideo
            controls
            loop
            playsInline
            autoPlay={true}
            muted={true}
            src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-1.mp4"
          />
          <MaterialVideo
            loop
            playsInline
            autoPlay={true}
            controls={true}
            muted={true}
          >
            <source src={Vd1W} type="video/webm" />
            <source src={Vd1} type="video/mp4" />
          </MaterialVideo>
          <MaterialVideo
            controls
            loop
            playsInline
            autoPlay={true}
            muted={true}
            src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-1-1.mp4"
          />
          <MaterialImg
            alt="conteudo madeinbrazil"
            src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/3-made.png"
          />
          <MaterialImg alt="conteudo madeinbrazil" src={Img12} />
          <MaterialImg alt="conteudo madeinbrazil" src={Img1} />
          <MaterialVideo
            controls
            loop
            playsInline
            autoPlay={true}
            muted={true}
            src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-2.mp4"
          />
          <MaterialImg
            alt="conteudo madeinbrazil"
            src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/banner-made-institucional.gif"
          />
          <MaterialImg alt="conteudo madeinbrazil" src={Img29} />
          <MaterialVideo
            controls
            loop
            playsInline
            autoPlay={true}
            muted={true}
            src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-3.mp4"
          />
          <MaterialVideo
            loop
            playsInline
            autoPlay={true}
            controls={true}
            muted={true}
          >
            <source src={Vd3W} type="video/webm" />
            <source src={Vd3} type="video/mp4" />
          </MaterialVideo>
          <MaterialImg
            alt="conteudo madeinbrazil"
            src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-3-junho-2.png"
          />
          <MaterialImg alt="conteudo madeinbrazil" src={Img3} />
          <MaterialVideo
            controls
            loop
            playsInline
            autoPlay={true}
            muted={true}
            src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-2-1.mp4"
          />
          <MaterialImg alt="conteudo madeinbrazil" src={Img35} />
          <MaterialVideo
            controls
            loop
            playsInline
            autoPlay={true}
            muted={true}
            src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-3-1.mp4"
          />
          <MaterialImg
            alt="conteudo madeinbrazil"
            src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-5.png"
          />
          <MaterialImg
            alt="conteudo madeinbrazil"
            src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/banner-made-dia-dos-namorados.gif"
          />
          <MaterialImg alt="conteudo madeinbrazil" src={Img5} />
          <MaterialImg
            alt="conteudo madeinbrazil"
            src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-2-junho-3.png"
          />
          <MaterialVideo
            loop
            playsInline
            autoPlay={true}
            controls={true}
            muted={true}
          >
            <source src={Vd7W} type="video/webm" />
            <source src={Vd7} type="video/mp4" />
          </MaterialVideo>
          <MaterialImg
            alt="conteudo madeinbrazil"
            src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-2-junho-2.png"
          />
          <MaterialImg alt="conteudo madeinbrazil" src={Img6} />
          <MaterialVideo
            controls
            loop
            playsInline
            autoPlay={true}
            muted={true}
            src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-1-junho-3.mp4"
          />
          <MaterialImg
            alt="conteudo madeinbrazil"
            src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-4.png"
          />
          <MaterialImg alt="conteudo madeinbrazil" src={Img7} />
          <MaterialVideo
            controls
            loop
            playsInline
            autoPlay={true}
            muted={true}
            src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-4-junho-2.mp4"
          />
          <MaterialImg
            alt="conteudo madeinbrazil"
            src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-2.png"
          />
          <MaterialImg alt="conteudo madeinbrazil" src={Img8} />
          <MaterialVideo
            loop
            playsInline
            autoPlay={true}
            controls={true}
            muted={true}
          >
            <source src={Vd2W} type="video/webm" />
            <source src={Vd2} type="video/mp4" />
          </MaterialVideo>
          <MaterialVideo
            controls
            loop
            playsInline
            autoPlay={true}
            muted={true}
            src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-5-junho-2.mp4"
          />
          <MaterialImg alt="conteudo madeinbrazil" src={Img10} />
          <MaterialVideo
            controls
            loop
            playsInline
            autoPlay={true}
            muted={true}
            src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-5-junho-3.mp4"
          />
          <MaterialImg alt="conteudo madeinbrazil" src={Img11} />

          <MaterialImg alt="conteudo madeinbrazil" src={Img19} />
          <MaterialVideo
            controls
            loop
            playsInline
            autoPlay={true}
            muted={true}
            src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-made-6-junho-3.mp4"
          />
          <MaterialImg alt="conteudo madeinbrazil" src={Img13} />
          <MaterialImg alt="conteudo madeinbrazil" src={Img14} />
          <MaterialVideo
            loop
            playsInline
            autoPlay={true}
            controls={true}
            muted={true}
          >
            <source src={Vd5W} type="video/webm" />
            <source src={Vd5} type="video/mp4" />
          </MaterialVideo>
          <MaterialImg alt="conteudo madeinbrazil" src={Img33} />
          <MaterialImg alt="conteudo madeinbrazil" src={Img18} />
          <MaterialImg alt="conteudo madeinbrazil" src={Img26} />
          <MaterialImg alt="conteudo madeinbrazil" src={Img20} />
          <MaterialImg alt="conteudo madeinbrazil" src={Img21} />
          <MaterialVideo
            loop
            playsInline
            autoPlay={true}
            controls={true}
            muted={true}
          >
            <source src={Vd9W} type="video/webm" />
            <source src={Vd9} type="video/mp4" />
          </MaterialVideo>
          <MaterialImg alt="conteudo madeinbrazil" src={Img2} />
          <MaterialImg alt="conteudo madeinbrazil" src={Img23} />
          <MaterialImg alt="conteudo madeinbrazil" src={Img25} />
          <MaterialImg alt="conteudo madeinbrazil" src={Img15} />
          <MaterialVideo
            loop
            playsInline
            autoPlay={true}
            controls={true}
            muted={true}
          >
            <source src={Vd8W} type="video/webm" />
            <source src={Vd8} type="video/mp4" />
          </MaterialVideo>
          <MaterialImg alt="conteudo madeinbrazil" src={Img31} />
          <MaterialImg alt="conteudo madeinbrazil" src={Img32} />
          <MaterialVideo
            loop
            playsInline
            autoPlay={true}
            controls={true}
            muted={true}
          >
            <source src={Vd6W} type="video/webm" />
            <source src={Vd6} type="video/mp4" />
          </MaterialVideo>
          <MaterialImg alt="conteudo madeinbrazil" src={Img22} />
          <MaterialImg alt="conteudo madeinbrazil" src={Img16} />
          <MaterialImg alt="conteudo madeinbrazil" src={Img27} />
          <MaterialImg alt="conteudo madeinbrazil" src={Img17} />
          <MaterialImg alt="conteudo madeinbrazil" src={Img34} />
          <MaterialVideo
            loop
            playsInline
            autoPlay={true}
            controls={true}
            muted={true}
          >
            <source src={Vd4W} type="video/webm" />
            <source src={Vd4} type="video/mp4" />
          </MaterialVideo>
          <MaterialImg alt="conteudo madeinbrazil" src={Img24} />
          <MaterialImg alt="conteudo madeinbrazil" src={Img28} />
        </Masonry>
      </Main>
    </Layout>
  )
}

export default Made
