import React, { Component } from "react"
// import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import './faxe2.scss'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Logofaxe from '../../images/home/FAXE-LOGO.svg'
import HeaderBG from '../../images/faxe/header.jpg'

import Story1 from '../../images/faxe/stories/STORIE_FINAL.mp4'
import Story2 from '../../images/faxe/stories/Storie_ 1.png'
import Story3 from '../../images/faxe/stories/1_DINNER_V1.mp4'
import Story4 from '../../images/faxe/stories/2_DINNER_V1.mp4'

import Post1 from '../../images/faxe/post/3_POST_FAXE_V1 2.mp4'
import Post2 from '../../images/faxe/post/3_POST_FAXE_V1.mp4'
import Post3 from '../../images/faxe/post/POST-2.mp4'
import Post4 from '../../images/faxe/post/Post 02.mp4'
import Post5 from '../../images/faxe/post/Post 07_V2.mp4'
import Post6 from '../../images/faxe/post/Post1.mp4'
import Post7 from '../../images/faxe/post/Post2.mp4'
import Post8 from '../../images/faxe/post/post2 2.mp4'
import Post9 from '../../images/faxe/post/post7-vid.mp4'

import Img1 from '../../images/faxe/img/001.png'
import Img2 from '../../images/faxe/img/002.png'
import Img3 from '../../images/faxe/img/003.png'
import Img4 from '../../images/faxe/img/004.png'
import Img5 from '../../images/faxe/img/005.png'
import Img6 from '../../images/faxe/img/006.png'
import Img7 from '../../images/faxe/img/007.png'
import Img8 from '../../images/faxe/img/008.png'
import Img9 from '../../images/faxe/img/009.png'
import Img10 from '../../images/faxe/img/010.png'
import Img11 from '../../images/faxe/img/011.png'
import Img12 from '../../images/faxe/img/012.png'
import Img13 from '../../images/faxe/img/013.png'
import Img14 from '../../images/faxe/img/014.png'
import Img15 from '../../images/faxe/img/015.png'
import Img16 from '../../images/faxe/img/016.png'
import Img17 from '../../images/faxe/img/017.png'
import Img18 from '../../images/faxe/img/018.png'
import Img19 from '../../images/faxe/img/019.png'
import Img20 from '../../images/faxe/img/020.png'
import Img21 from '../../images/faxe/img/021.png'
import Img22 from '../../images/faxe/img/022.png'
import Img23 from '../../images/faxe/img/023.png'
import Img24 from '../../images/faxe/img/024.png'
import Img25 from '../../images/faxe/img/025.png'
import Img26 from '../../images/faxe/img/026.png'
import Img27 from '../../images/faxe/img/027.png'
import Img28 from '../../images/faxe/img/028.png'
import Img29 from '../../images/faxe/img/029.png'
import Img30 from '../../images/faxe/img/030.png'
import Img31 from '../../images/faxe/img/031.png'
import Img32 from '../../images/faxe/img/032.png'
import Img33 from '../../images/faxe/img/033.png'
import Img34 from '../../images/faxe/img/034.png'
import Img35 from '../../images/faxe/img/035.png'
import Img36 from '../../images/faxe/img/036.png'
import Img37 from '../../images/faxe/img/037.png'
import Img38 from '../../images/faxe/img/038.png'
import Img39 from '../../images/faxe/img/039.png'
import Img40 from '../../images/faxe/img/040.png'
import Img42 from '../../images/faxe/img/042.png'
import Img41 from '../../images/faxe/img/041.png'

export default class Faxe extends Component {

    render() {
        return (
            <Layout>
                <SEO title="Faxe" />
                <div className='faxepage3 middle-xs center-xs' >

                    <header>
                        <img src={HeaderBG} alt="background" />
                        <img className="logo" src={Logofaxe} alt="faxe" />
                    </header>

                    <div className='row conteudo'>
                        <div className="row col-xs-12 col-sm-8 col-md-6 col-lg-5 description">
                            <p>A cerveja dinamarquesa Faxe Beer é inspirada no universo Viking, conquistando os mais exigentes paladares de guerreiros do happy hour ao redor do mundo.</p>
                            <p>Aqui no Brasil, foi a DUEE que conquistou a batalha pela comunicação da marca e tem feito um trabalho divino.</p>
                            <p>Criamos os conteúdos semanais para as redes sociais, Instagram e Facebook, damos suporte em eventos, lançamentos, promoções e relacionamento com clientes e influenciadores.</p>
                            <p>Confira alguns trabalhos da nossa parceria com a Faxe.</p>
                        </div>

                        <div className="row col-xs-12 makingof">
                            <iframe src="https://player.vimeo.com/video/296450706" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen title="making of" />
                        </div>
                        <div className="row col-xs-12">
                            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4, 1700: 5 }}>
                                <Masonry>
                                <img src={Img2} alt="conteudo faxe" className="material" />
                                    <img src={Img40} alt="conteudo faxe" className="material" />
                                    <img src={Img4} alt="conteudo faxe" className="material" />
                                    <video src={Post1} autoPlay={true} muted loop={true} controls={true} className="material" />
                                    <img src={Img19} alt="conteudo faxe" className="material" />
                                    <img src={Img14} alt="conteudo faxe" className="material" />
                                    <img src={Img29} alt="conteudo faxe" className="material" />
                                    <img src={Img10} alt="conteudo faxe" className="material" />
                                    <video src={Story3} autoPlay={true} muted loop={true} controls={true} className="material" />
                                    <img src={Img1} alt="conteudo faxe" className="material" />
                                    <img src={Img39} alt="conteudo faxe" className="material" />
                                    <video src={Post2} autoPlay={true} muted loop={true} controls={true} className="material" />
                                    <img src={Img17} alt="conteudo faxe" className="material" />
                                    <img src={Img18} alt="conteudo faxe" className="material" />
                                    
                                    <img src={Img20} alt="conteudo faxe" className="material" />
                                    <video src={Post3} autoPlay={true} muted loop={true} controls={true} className="material" />
                                    <img src={Img28} alt="conteudo faxe" className="material" />
                                    <img src={Img8} alt="conteudo faxe" className="material" />
                                    
                                    <img src={Img3} alt="conteudo faxe" className="material" />
                                    <video src={Story1} autoPlay={true} muted loop={true} controls={true} className="material" />
                                    <img src={Img25} alt="conteudo faxe" className="material" />
                                    <img src={Img26} alt="conteudo faxe" className="material" />
                                    <img src={Img22} alt="conteudo faxe" className="material" />
                                    
                                    <video src={Post4} autoPlay={true} muted loop={true} controls={true} className="material" />
                                    <img src={Img31} alt="conteudo faxe" className="material" />
                                    <img src={Img32} alt="conteudo faxe" className="material" />
                                    <img src={Img41} alt="conteudo faxe" className="material" />
                                    <video src={Story4} autoPlay={true} muted loop={true} controls={true} className="material" />
                                    <img src={Img23} alt="conteudo faxe" className="material" />
                                    <img src={Img33} alt="conteudo faxe" className="material" />
                                    <video src={Post5} autoPlay={true} muted loop={true} controls={true} className="material" />
                                    <img src={Img12} alt="conteudo faxe" className="material" />
                                    <img src={Img27} alt="conteudo faxe" className="material" />
                                    <img src={Img42} alt="conteudo faxe" className="material" />
                                    <img src={Img13} alt="conteudo faxe" className="material" />
                                    <video src={Post9} autoPlay={true} muted loop={true} controls={true} className="material" />
                                    <img src={Img30} alt="conteudo faxe" className="material" />
                                    <img src={Img6} alt="conteudo faxe" className="material" />
                                    <img src={Img38} alt="conteudo faxe" className="material" />
                                    <img src={Img9} alt="conteudo faxe" className="material" />
                                    <video src={Post6} autoPlay={true} muted loop={true} controls={true} className="material" />
                                    <img src={Img34} alt="conteudo faxe" className="material" />
                                    <img src={Img7} alt="conteudo faxe" className="material" />
                                    <img src={Img35} alt="conteudo faxe" className="material" />
                                    <img src={Img5} alt="conteudo faxe" className="material" />
                                    <video src={Post7} autoPlay={true} muted loop={true} controls={true} className="material" />
                                    <img src={Img15} alt="conteudo faxe" className="material" />
                                    <img src={Img36} alt="conteudo faxe" className="material" />
                                    <img src={Img24} alt="conteudo faxe" className="material" />
                                    <video src={Post8} autoPlay={true} muted loop={true} controls={true} className="material" />
                                    <img src={Img11} alt="conteudo faxe" className="material" />
                                    <img src={Img21} alt="conteudo faxe" className="material" />
                                    <img src={Story2} alt="conteudo faxe" className="material" />
                                    <img src={Img16} alt="conteudo faxe" className="material" />
                                    <img src={Img37} alt="conteudo faxe" className="material" />
                                    
                                </Masonry>
                            </ResponsiveMasonry>
                        </div>
                    </div>
                </div>
            </Layout >
        )
    }
}