import React from "react"
// import { Link } from "gatsby"
import Helmet from 'react-helmet'

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import './style.scss'
import './oito.scss'

import globo from '../../images/oito/globe-1-1.png'
import rocket from '../../images/oito/rocket-1-1.png'
import imghead from '../../images/oito/banner-1-1-moc.png'
import cta from '../../images/oito/cta-1-1.jpg'

const Starbucks = () => (
    <Layout>
        <SEO title="Oito" />
        <Helmet>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/brands.min.css" rel="stylesheet" />
        </Helmet>
        {/* <!-- First --> */}
        <div classNameName="row" id="oitoapp">
            <section className="banner-one" id="home">

                <img src={globo} className="banner-one__globe" alt="Awesome Image" />
                <img src={rocket} className="banner-one__rocket" alt="Awesome Image" />
                {/* <img src={imghead} className="banner-one__moc" alt="Awesome Image" /> */}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="banner-one__content">
                                <p className="banner-one__tag-line">Desenvolvimento de Web App</p>
                                <h3 className="banner-one__title">Oito App</h3>
                                <a href="#about" className="banner-one__btn thm-btn">Saiba mais</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* o que é oito */}

            <section className="cta-three" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="cta-three__image">
                                <img src={cta} alt="Awesome Image" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="cta-three__content">
                                <div className="block-title text-left">
                                    <h2 className="block-title__title black-text-color">O que é a OITO?</h2>
                                </div>
                                <p className="cta-three__text">A Oito é uma plataforma para que profissionais autônomos e clientes se encontrem e se conectem.</p>
                                <p className="cta-three__text">Através do site, o usuário se cadastra gratuitamente e pode, então, adicionar habilidades dentro de diferentes categorias e anunciar seus serviços dentro de cada uma delas.</p>
                                <p className="cta-three__text">O usuário pode, ainda, solicitar serviços a diferentes profissionais.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* etapas */}

            <section className="cta-two">
                <img src="images/cta-moc-1-1.png" className="cta-two__moc" alt="Awesome Image" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="cta-two__block">
                                <div className="block-title text-left">
                                    <h2 className="block-title__title black-text-color">Etapas do <br /> projeto</h2>
                                </div>
                                <div className="cta-two__single">
                                    <div className="cta-two__icon">
                                    <i class="far fa-sticky-note"></i>
                                    </div>
                                    <div className="cta-two__content">
                                        <h3 className="cta-two__title">Briefing</h3>
                                        <p className="cta-two__text">A primeira etapa da construção foi o briefing, que especificou o que deveria ser feito e quais os objetivos a serem atendidos com o desenvolvimento do site da Oito.</p>
                                    </div>
                                </div>
                                <div className="cta-two__single">
                                    <div className="cta-two__icon">
                                    <i class="far fa-calendar-alt"></i>
                                    </div>
                                    <div className="cta-two__content">
                                        <h3 className="cta-two__title">Planejamento</h3>
                                        <p className="cta-two__text">Após a interpretação do briefing, a etapa passa a ser o planejamento do que será feito, levando em consideração tudo o que é necessário para que o site seja funcional e eficaz.</p>
                                    </div>
                                </div>
                                <div className="cta-two__single">
                                    <div className="cta-two__icon">
                                    <i class="fas fa-hashtag"></i>
                                    </div>
                                    <div className="cta-two__content">
                                        <h3 className="cta-two__title">Desenvolvimento</h3>
                                        <p className="cta-two__text">A próxima etapa foi o desenvolvimento do site em si.
        Foi feito MVP para teste de usuário, foram realizadas as integrações e, então, o site realmente começou a funcionar.
Então foram realizadas as melhorias UI e UX.</p>
                                    </div>
                                </div>
                                <div className="cta-two__single">
                                    <div className="cta-two__icon">
                                    <i class="fas fa-universal-access"></i>
                                    </div>
                                    <div className="cta-two__content">
                                        <h3 className="cta-two__title">Melhorias</h3>
                                        <p className="cta-two__text">Após o desenvolvimento, foram feitos estudos no site em geral para identificar pontos que precisavam de melhorias.
        Tudo isso com um detalhamento do site e alguns apontamentos feitos por usuários nos feedbacks.
O layout foi refeito, foi realizada uma atualização de regras de negócio do sistema, tudo isso baseado em UX.</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* tecnologias */}

            <section className="service-one" id="services">
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title black-text-color">Tecnologias que usamos</h2>
                    </div>
                    <div className="row" style={{ justifyContent: "space-around" }}>
                        <div className="col-lg-4">
                            <div className="service-one__single">
                                <span className="service-one__dot-1"></span>
                                <span className="service-one__dot-2"></span>
                                <span className="service-one__dot-3"></span>
                                <div className="service-one__icon">
                                    <i class="fab fa-react"></i>
                                </div>
                                <h3 className="service-one__title"><a href="#">React - Gatsby - GraphQL - JS</a></h3>
                                <p className="service-one__text">Desenvolvimento do site e aplicação dos melhores frameworks do mercado, que foram desenvolvidos pelo Facebook e inovam o mercado de desenvolvimento.
                        Além disso são simples e têm capacidade de expansão que acompanha a evolução das tecnologias web.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-one__single">
                                <span className="service-one__dot-1"></span>
                                <span className="service-one__dot-2"></span>
                                <span className="service-one__dot-3"></span>
                                <div className="service-one__icon">
                                    <i class="fab fa-wordpress-simple"></i>
                                </div>
                                <h3 className="service-one__title"><a href="#">Wordpress</a></h3>
                                <p className="service-one__text">Ferramenta de fácil manutenção, indicada para sites estáticos e blogs.
                        Uma alternativa rápida e barata para quem não necessita de complexidade em seu site.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="site-footer">
                <div className="site-footer__upper">
                    <div className="container text-center">
                        <div className="block-title">
                            <h2 className="block-title__title">Quer saber mais <br /> sobre a Oito?</h2>
                        </div>
                        <a href="https://oito.app" rel="noopener noreferrer" target="_blank" className="thm-btn cta-one__btn light-text-color">Visite o site</a>
                    </div>
                </div>

            </footer>
        </div>
        <a href="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></a>
        {/* <!-- /.scroll-to-top --> */}

    </Layout >
)

export default Starbucks