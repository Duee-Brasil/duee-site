import React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import './style.scss'
import './oito.scss'

import divider1 from '../../images/oito/site_ 1.png'
import divider2 from '../../images/oito/site-02.png'
import divider3 from '../../images/oito/site-03.png'

const Starbucks = () => (
    <Layout>
        <SEO title="Oito" />
        {/* <!-- First --> */}
        <div classNameName="row" id="oitoapp">
            <section className="banner-one" id="home">

                {/* <span className="banner-one__shape-1"></span>
                <span className="banner-one__shape-2"></span>
                <span className="banner-one__shape-3"></span>
                <span className="banner-one__shape-4"></span>
                <span className="banner-one__shape-5"></span>
                <span className="banner-one__shape-6"></span> */}

                {/* <img src="images/globe-1-1.png" className="banner-one__globe" alt="Awesome Image" />
                <img src="images/rocket-1-1.png" className="banner-one__rocket" alt="Awesome Image" />
                <img src="images/banner-1-1-moc.png" className="banner-one__moc" alt="Awesome Image" /> */}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="banner-one__content">
                                <p className="banner-one__tag-line">Desenvolvimento de Web App</p>
                                <h3 className="banner-one__title">Oito App</h3>
                                <a href="#" className="banner-one__btn thm-btn">Saiba mais</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-three">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="cta-three__image">
                                <img src="images/cta-1-1.jpg" alt="Awesome Image" />
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
                                        <i className="lums-icon-strategy"></i>
                                    </div>
                                    <div className="cta-two__content">
                                        <h3 className="cta-two__title">Briefing</h3>
                                        <p className="cta-two__text">A primeira etapa da construção foi o briefing, que especificou o que deveria ser feito e quais os objetivos a serem atendidos com o desenvolvimento do site da Oito.</p>
                                    </div>
                                </div>
                                <div className="cta-two__single">
                                    <div className="cta-two__icon">
                                        <i className="lums-icon-training"></i>
                                    </div>
                                    <div className="cta-two__content">
                                        <h3 className="cta-two__title">Planejamento</h3>
                                        <p className="cta-two__text">Após a interpretação do briefing, a etapa passa a ser o planejamento do que será feito, levando em consideração tudo o que é necessário para que o site seja funcional e eficaz.</p>
                                    </div>
                                </div>
                                <div className="cta-two__single">
                                    <div className="cta-two__icon">
                                        <i className="lums-icon-training"></i>
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
                                        <i className="lums-icon-training"></i>
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
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="service-one__single">
                                <span className="service-one__dot-1"></span>
                                <span className="service-one__dot-2"></span>
                                <span className="service-one__dot-3"></span>
                                <div className="service-one__icon">
                                    <i className="lums-icon-laptop"></i>
                                </div>
                                <h3 className="service-one__title"><a href="#">React - Gatsby - GraphQL - JS</a></h3>
                                <p className="service-one__text">Desenvolvimento do site e aplicação dos melhores frameworks do mercado, que foram desenvolvidos pelo Facebook e inovam o mercado de desenvolvimento.
                        Além disso são simples e têm capacidade de expansão que acompanha a evolução das tecnologias web.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-one__single">
                                <span className="service-one__dot-1"></span>
                                <span className="service-one__dot-2"></span>
                                <span className="service-one__dot-3"></span>
                                <div className="service-one__icon">
                                    <i className="lums-icon-presentation"></i>
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
                    <a href="https://oito.app" rel="noopener noreferrer" target="_blank" className="thm-btn cta-one__btn">Visite o site</a>
                </div>
                </div>
                
            </footer>
        </div>
        <a href="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></a>
        {/* <!-- /.scroll-to-top --> */}
        {/* <script src="js/jquery.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/jquery.easing.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/waypoints.min.js"></script>
    <script src="js/jquery.counterup.min.js"></script>
    <script src="js/testimonials-owl.carousel.config.js"></script>
    <script src="js/theme.js"></script> */}

    </Layout >
)

export default Starbucks