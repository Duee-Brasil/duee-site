import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import './somosleoes.scss'
import Faz from '../../images/a_gente_faz_400x400.jpg'
import Brand from '../../images/Elementos Digitais Branding.svg'
import Dev from '../../images/Elementos Digitais Desenvolvimento.svg'
import Digital from '../../images/Elementos Digitais Digital.svg'
import Eventos from '../../images/Elementos Digitais Eventos.svg'
import Live from '../../images/Elementos Digitais Live Marketing.svg'


const SomosLeoes = () => (
    <Layout>
        <SEO title="Somos leões" />
        {/* <!-- Header --> */}
        <section id="header">
            <div className="inner">
                {/* <span className="icon solid major"><i className="fab fa-linux"></i></span> */}
                <h1 className="hashtag">#SOMOS</h1>
                <h1 className="hashtag2">LEOES</h1>
                {/* <p>#somosleoes</p> */}
                {/* <ul className="actions special">
                    <li><a href="#one" className="button scrolly">Descubra???????</a></li>
                </ul> */}
            </div>
        </section>

        {/* <!-- First --> */}
        <section id="one" className="main style1">
            <div className="container">
                <div className="row gtr-150">
                    <div className="col-7 col-12-medium noPadding">
                        <section>
                            <header className="major">
                                <h2>A GENTE FAZ.</h2>
                            </header>
                            <p>A Duee é uma agência full service, que preza pela comunicação integrada, porque sabe que o mundo não se divide em on e off. Não criamos apenas conteúdos e campanhas,
                                        nós geramos ideias e conexões.</p>
                            <p>Nós somos uma agência que acredita que o trabalho está em constante movimento. Por isso, estamos sempre atentos às novidades, ao público,
                                        às revoluções e novas ideias.</p>
                            <p>É por meio de nossa paixão, criatividade e estratégias que ajudamos marcas a terem retornos eficientes, se tornarem relevantes e atingirem grandes resultados.</p>
                            <p>O conceito A Gente Faz traduz  a nossa experiência de 11 anos, nosso espírito de equipe e de proatividade. É o reflexo do nosso posicionamento como agência 360 graus.
                                            A gente faz criativo. A gente faz diferente. A gente faz inteligente.</p>
                            <p>Eventos? A gente faz.</p>
                            <p>Digital? A gente faz.</p>
                            <p>Branding? A gente faz.</p>
                        </section>
                    </div>
                    <div className="col-5 col-12-medium imp-medium noPadding">
                        <div className="image fit genteFaz"><img src={Faz} style={{ height: '400px' }} alt="A Gente Faz." /></div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Second --> */}
        <section id="two" className="main style2">
            <div className="container">
                <div className="row gtr-150">
                    <div className="col-12">
                        <section className="text-center">
                            <h3>SOMOS LEÕES</h3>
                            <h3>Rugimos bem alto para que todos possam nos ouvir.</h3>
                            <h3>Defendemos nossas ideias, não temos medo de nos aventurar.</h3>
                            <h3>Somos ágeis, valentes, estrategistas e inquietos.</h3>
                            <h3>Estamos sempre nos desafiando e caçando oportunidades de fazer diferente.</h3>
                            <h3>Somos leões.</h3>
                        </section>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Third --> */}
        <section id="three" className="main style1 special">
            <div className="container">
                <div className="row gtr-150">
                    <video className="video" controls>
                        <source src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2FDUEE_COMPLETO.mp4?alt=media&token=551c33ba-9d03-495b-b040-90c15394e7d7" type="video/mp4" />
                            Your browser does not support HTML5 video.
</video>
                </div>
                </div>

        </section>

            {/* <!-- Fourth --> */}
            <section id="four" className="main style2 special">
                <div className="container">
                    <header className="major">
                        <h2>NOSSO TRABALHO</h2>
                    </header>
                    <div className="row gtr-150">
                        <div className="col-4 col-12-medium">
                            <section>
                                <img src={Live} className="segmento" />
                                <header>
                                    <h3>LIVE MKT</h3>
                                </header>
                                <ul className="actions stacked">
                                    <li>Ativações de marca</li>
                                    <li>Eventos</li>
                                    <li>Feiras e estandes</li>
                                    <li>Lançamentos</li>
                                    <li>Workshops e Convenções</li>
                                    <li>Cenografia</li>
                                </ul>
                            </section>
                        </div>
                        <div className="col-4 col-12-medium">
                            <section>
                                <img src={Eventos} className="segmento" />
                                <header>
                                    <h3>PROMOÇÕES e TRADE</h3>
                                </header>
                                <ul className="actions stacked">
                                    <li>Ativações</li>
                                    <li>Degustação</li>
                                    <li>Ações PDV</li>
                                    <li>Promoções</li>
                                    <li>Campanhas de Incentivo e CRM</li>
                                    <li>Concursos culturais</li>
                                </ul>
                            </section>
                        </div>
                        <div className="col-4 col-12-medium">
                            <section>
                                <img src={Brand} className="segmento" />
                                <header>
                                    <h3>BRANDING</h3>
                                </header>
                                <ul className="actions stacked">
                                    <li>Planejamento Estratégico</li>
                                    <li>Posicionamento de marca</li>
                                    <li>Identidade visual</li>
                                    <li>Brand book</li>
                                    <li>Criação de conceitos</li>
                                    <li>Campanhas institucionais</li>
                                </ul>
                            </section>
                        </div>
                        <div className="col-4 col-12-medium">
                            <section>
                                <img src={Digital} className="segmento" />
                                <header>
                                    <h3>DIGITAL</h3>
                                </header>
                                <ul className="actions stacked">
                                    <li>Ativações online</li>
                                    <li>SEO & SEM</li>
                                    <li>Criação e conteúdos digitais</li>
                                    <li>Monitoramento e compra de mídia</li>
                                    <li>Estratégia em redes sociais e conteúdo</li>
                                    <li>Inbound Marketing</li>
                                </ul>
                            </section>
                        </div>
                        <div className="col-4 col-12-medium">
                            <section>
                                <img src={Dev} className="segmento" />
                                <header>
                                    <h3>DESENVOLVIMENTO</h3>
                                </header>
                                <ul className="actions stacked">
                                    <li>Desenvolvimento Sites e Hotsites</li>
                                    <li>Criação Aplicativos</li>
                                    <li>Desenvolvimento Mobile</li>
                                    <li>Sistema Web</li>
                                    <li>Aplicativos p/ redes sociais</li>
                                    <li>Sistemas CRM</li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <section id="footer">
                <ul className="icons">
                    <li><a href="https://www.facebook.com/agenciadueebrasil" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
                    <li><a href="https://www.instagram.com/dueebrasil" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="mailto:monalisa@dueebrasil.com.br" className="icon"><i className="far fa-envelope"></i></a></li>
                </ul>
            </section>
            <Link to="/">Go back to the homepage</Link>
    </Layout>
        )
        
export default SomosLeoes