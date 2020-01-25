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


            {/* <section className="service-one" id="services">
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title black-text-color">Lums can boost <br /> up your web traffic</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="service-one__single">
                                <span className="service-one__dot-1"></span>
                                <span className="service-one__dot-2"></span>
                                <span className="service-one__dot-3"></span>
                                <div className="service-one__icon">
                                    <i className="lums-icon-laptop"></i>
                                </div>
                                <h3 className="service-one__title"><a href="#">Speed <br /> Optimization</a></h3>
                                <p className="service-one__text">There are many variations of <br /> passages of lorem ipsum is <br /> simply free text but majority <br /> have suffered.</p>
                                <a href="#" className="service-one__btn">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-one__single">
                                <span className="service-one__dot-1"></span>
                                <span className="service-one__dot-2"></span>
                                <span className="service-one__dot-3"></span>
                                <div className="service-one__icon">
                                    <i className="lums-icon-presentation"></i>
                                </div>
                                <h3 className="service-one__title"><a href="#">Marketing <br /> Analysis</a></h3>
                                <p className="service-one__text">There are many variations of <br /> passages of lorem ipsum is <br /> simply free text but majority <br /> have suffered.</p>
                                <a href="#" className="service-one__btn">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-one__single">
                                <span className="service-one__dot-1"></span>
                                <span className="service-one__dot-2"></span>
                                <span className="service-one__dot-3"></span>
                                <div className="service-one__icon">
                                    <i className="lums-icon-target"></i>
                                </div>
                                <h3 className="service-one__title"><a href="#">SEO and <br /> Backlinks</a></h3>
                                <p className="service-one__text">There are many variations of <br /> passages of lorem ipsum is <br /> simply free text but majority <br /> have suffered.</p>
                                <a href="#" className="service-one__btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

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
                                {/* <ul className="cta-three__list">
                                    <li className="cta-three__list-item"><i className="fa fa-check"></i>Refresing to get such a personal touch. </li>
                                    <li className="cta-three__list-item"><i className="fa fa-check"></i>Duis aute irure dolor in reprehenderit in voluptate.</li>
                                    <li className="cta-three__list-item"><i className="fa fa-check"></i>Velit esse cillum dolore eu fugiat nulla pariatur.</li>
                                </ul>
                                <a href="#" className="thm-btn cta-three__btn">Get Started</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-two">
                <img src="images/cta-moc-1-1.png" className="cta-two__moc" alt="Awesome Image" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="cta-two__block">
                                <div className="block-title text-left">
                                    <h2 className="block-title__title black-text-color">Discover more new <br /> features</h2>
                                </div>
                                <div className="cta-two__single">
                                    <div className="cta-two__icon">
                                        <i className="lums-icon-strategy"></i>
                                    </div>
                                    <div className="cta-two__content">
                                        <h3 className="cta-two__title">Business Strategy</h3>
                                        <p className="cta-two__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make.</p>
                                    </div>
                                </div>
                                <div className="cta-two__single">
                                    <div className="cta-two__icon">
                                        <i className="lums-icon-training"></i>
                                    </div>
                                    <div className="cta-two__content">
                                        <h3 className="cta-two__title">Business Strategy</h3>
                                        <p className="cta-two__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make.</p>
                                    </div>
                                </div>
                                <a href="#" className="thm-btn cta-two__btn">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pricing-one" id="pricing">
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title black-text-color">Pricing plans which <br /> suits your needs</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="pricing-one__single">
                                <h3 className="pricing-one__amount">$20.00</h3>
                                <span className="pricing-one__month">basic pack</span>
                                <ul className="pricing-one__list">
                                    <li className="pricing-one__list-item">Extra features</li>
                                    <li className="pricing-one__list-item">Lifetime free support</li>
                                    <li className="pricing-one__list-item">Upgrate options</li>
                                    <li className="pricing-one__list-item">Full access</li>
                                </ul>
                                <a href="#" className="thm-btn pricing-one__btn">Choose Plan</a>
                                <span className="pricing-one__tag-line">No hidden charges</span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="pricing-one__single popular">
                                <h3 className="pricing-one__amount">$30.00</h3>
                                <span className="pricing-one__month">medium pack</span>
                                <ul className="pricing-one__list">
                                    <li className="pricing-one__list-item">Extra features</li>
                                    <li className="pricing-one__list-item">Lifetime free support</li>
                                    <li className="pricing-one__list-item">Upgrate options</li>
                                    <li className="pricing-one__list-item">Full access</li>
                                </ul>
                                <a href="#" className="thm-btn pricing-one__btn">Choose Plan</a>
                                <span className="pricing-one__tag-line">No hidden charges</span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="pricing-one__single">
                                <h3 className="pricing-one__amount">$40.00</h3>
                                <span className="pricing-one__month">ultimate pack</span>
                                <ul className="pricing-one__list">
                                    <li className="pricing-one__list-item">Extra features</li>
                                    <li className="pricing-one__list-item">Lifetime free support</li>
                                    <li className="pricing-one__list-item">Upgrate options</li>
                                    <li className="pricing-one__list-item">Full access</li>
                                </ul>
                                <a href="#" className="thm-btn pricing-one__btn">Choose Plan</a>
                                <span className="pricing-one__tag-line">No hidden charges</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonials-one" id="testimonials">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="testimonials-one__image-block">
                                <div className="owl-carousel owl-theme" id="sync2">
                                    <div className="item clearfix">
                                        <div className="testimonials-one__image">
                                            <img src="images/testi-1-1.jpg" className="testimonials-one__thumb" alt="Awesome Image" />
                                            <div className="testimonials-one__qoute">
                                                <img src="images/testi-qoute-1-1.png" alt="Awesome Image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item clearfix">
                                        <div className="testimonials-one__image">
                                            <img src="images/testi-1-2.jpg" className="testimonials-one__thumb" alt="Awesome Image" />
                                            <div className="testimonials-one__qoute">
                                                <img src="images/testi-qoute-1-1.png" alt="Awesome Image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item clearfix">
                                        <div className="testimonials-one__image">
                                            <img src="images/testi-1-3.jpg" className="testimonials-one__thumb" alt="Awesome Image" />
                                            <div className="testimonials-one__qoute">
                                                <img src="images/testi-qoute-1-1.png" alt="Awesome Image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonials-one__button-block">
                                    <button className="testimonials-one__button__prev-btn"></button>
                                    <button className="testimonials-one__button__current-btn"></button>
                                    <button className="testimonials-one__button__next-btn"></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonials-one__content">
                                <div className="block-title text-left">
                                    <h2 className="block-title__title light-text-color">What our clients <br /> are saying</h2>
                                </div>
                                <div className="owl-carousel owl-theme" id="sync1">
                                    <div className="item">
                                        <div className="testimonials-one__single" data-thumb-img="images/testi-1-1.jpg">
                                            <p className="testimonials-one__text">This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum eu fugiat nulla pariatur.</p>
                                            <div className="testimonials-one__bottom">
                                                <h3 className="testimonials-one__title">Jona Leisey</h3>
                                                <div className="testimonials-one__sep">.</div>
                                                <p className="testimonials-one__designation">CEO Lums</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonials-one__single" data-thumb-img="images/testi-1-2.jpg">
                                            <p className="testimonials-one__text">This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum eu fugiat nulla pariatur.</p>
                                            <div className="testimonials-one__bottom">
                                                <h3 className="testimonials-one__title">Chas Samul</h3>
                                                <div className="testimonials-one__sep">.</div>
                                                <p className="testimonials-one__designation">CEO Lums</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonials-one__single" data-thumb-img="images/testi-1-3.jpg">
                                            <p className="testimonials-one__text">This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum eu fugiat nulla pariatur.</p>
                                            <div className="testimonials-one__bottom">
                                                <h3 className="testimonials-one__title">Chelsey Pozar</h3>
                                                <div className="testimonials-one__sep">.</div>
                                                <p className="testimonials-one__designation">CEO Lums</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="brand-one">
                <div className="container">
                    <div className="brand-one__carousel owl-theme owl-carousel">
                        <div className="item">
                            <img src="images/brand-1-1.png" alt="Awesome Image" />
                        </div>
                        <div className="item">
                            <img src="images/brand-1-1.png" alt="Awesome Image" />
                        </div>
                        <div className="item">
                            <img src="images/brand-1-1.png" alt="Awesome Image" />
                        </div>
                        <div className="item">
                            <img src="images/brand-1-1.png" alt="Awesome Image" />
                        </div>
                        <div className="item">
                            <img src="images/brand-1-1.png" alt="Awesome Image" />
                        </div>
                        <div className="item">
                            <img src="images/brand-1-1.png" alt="Awesome Image" />
                        </div>
                        <div className="item">
                            <img src="images/brand-1-1.png" alt="Awesome Image" />
                        </div>
                        <div className="item">
                            <img src="images/brand-1-1.png" alt="Awesome Image" />
                        </div>
                        <div className="item">
                            <img src="images/brand-1-1.png" alt="Awesome Image" />
                        </div>
                        <div className="item">
                            <img src="images/brand-1-1.png" alt="Awesome Image" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="funfact-one">
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title black-text-color">Over 2200 projects <br /> completed</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="funfact-one__single-outer">
                                <div className="funfact-one__single">
                                    <span className="funfact-one__dot-1"></span>
                                    <span className="funfact-one__dot-2"></span>
                                    <span className="funfact-one__dot-3"></span>
                                    <h3 className="funfact-one__title counter">4789</h3>
                                    <p className="funfact-one__tag-line">projects</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="funfact-one__single-outer">
                                <div className="funfact-one__single">
                                    <span className="funfact-one__dot-1"></span>
                                    <span className="funfact-one__dot-2"></span>
                                    <span className="funfact-one__dot-3"></span>
                                    <h3 className="funfact-one__title counter">6400</h3>
                                    <p className="funfact-one__tag-line">Customers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="funfact-one__single-outer">
                                <div className="funfact-one__single">
                                    <span className="funfact-one__dot-1"></span>
                                    <span className="funfact-one__dot-2"></span>
                                    <span className="funfact-one__dot-3"></span>
                                    <h3 className="funfact-one__title counter">960</h3>
                                    <p className="funfact-one__tag-line">Success</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="funfact-one__single-outer">
                                <div className="funfact-one__single">
                                    <span className="funfact-one__dot-1"></span>
                                    <span className="funfact-one__dot-2"></span>
                                    <span className="funfact-one__dot-3"></span>
                                    <h3 className="funfact-one__title counter">448</h3>
                                    <p className="funfact-one__tag-line">Awards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog-one" id="blog">
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title black-text-color">Check out our latest <br /> news & articles</h2>
                    </div>
                    <div className="row high-gutters">
                        <div className="col-lg-6">
                            <div className="blog-one__single">
                                <div className="blog-one__image-outer">
                                    <div className="blog-one__image">
                                        <img src="images/blog-1-1.jpg" alt="Awesome Image" />
                                        <a href="blog-details.html" className="blog-one__link">Read More</a>
                                    </div>
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__meta">
                                        <a href="blog-details.html" className="blog-one__meta-link">By admin</a>
                                        <span className="blog-one__meta-sep">.</span>
                                        <a href="blog-details.html" className="blog-one__meta-link">4 Aug</a>
                                        <span className="blog-one__meta-sep">.</span>
                                        <a href="blog-details.html" className="blog-one__meta-link">2 comments</a>
                                    </div>
                                    <h3 className="blog-one__title"><a href="blog-details.html">Checkout pre launch mobile app <br /> marketing pitfalls</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="blog-one__single">
                                <div className="blog-one__image-outer">
                                    <div className="blog-one__image">
                                        <img src="images/blog-1-2.jpg" alt="Awesome Image" />
                                        <a href="blog-details.html" className="blog-one__link">Read More</a>
                                    </div>
                                </div>
                                <div className="blog-one__content">
                                    <div className="blog-one__meta">
                                        <a href="blog-details.html" className="blog-one__meta-link">By admin</a>
                                        <span className="blog-one__meta-sep">.</span>
                                        <a href="blog-details.html" className="blog-one__meta-link">4 Aug</a>
                                        <span className="blog-one__meta-sep">.</span>
                                        <a href="blog-details.html" className="blog-one__meta-link">2 comments</a>
                                    </div>
                                    <h3 className="blog-one__title"><a href="blog-details.html">Checkout pre launch mobile app <br /> marketing pitfalls</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cta-one" id="contact">
                <div className="container text-center ">
                    <div className="block-title">
                        <h2 className="block-title__title light-text-color">Quer saber mais <br /> sobre a Oito?</h2>
                    </div>
                    <a href="https://oito.app" className="thm-btn cta-one__btn">Visite o site</a>
                </div>
            </section>
            <footer className="site-footer">
                <div className="site-footer__upper">
                    <div className="container">
                        <div className="site-footer__5-col-wrap">
                        </div>
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


        <img src={divider1} alt="divider1" />
        <div classNameName="row col-xs-12 content">
            <div classNameName="row col-xs-12">

            </div>
            <img src={divider2} alt="divider1" />
            <div classNameName="row col-xs-12">
                <h2>Etapas</h2>
                <div classNameName="row col-xs-12">
                    <div classNameName="col-xs-12">
                        <h3>Briefing</h3>
                        <p>A primeira etapa da construção foi o briefing, que especificou o que deveria ser feito e quais os objetivos a serem atendidos com o desenvolvimento do site da Oito.</p>
                    </div>
                    <div classNameName="col-xs-12">
                        <h3>Planejamento</h3>
                        <p>Após a interpretação do briefing, a etapa passa a ser o planejamento do que será feito, levando em consideração tudo o que é necessário para que o site seja funcional e eficaz.</p>
                    </div>
                    <div classNameName="col-xs-12">
                        <h3>Desenvolvimento</h3>
                        <p>A próxima etapa foi o desenvolvimento do site em si.
        Foi feito MVP para teste de usuário, foram realizadas as integrações e, então, o site realmente começou a funcionar.
Então foram realizadas as melhorias UI e UX.</p>
                    </div>
                    <div classNameName="col-xs-12">
                        <h3>Melhorias</h3>
                        <p>Após o desenvolvimento, foram feitos estudos no site em geral para identificar pontos que precisavam de melhorias.
        Tudo isso com um detalhamento do site e alguns apontamentos feitos por usuários nos feedbacks.
O layout foi refeito, foi realizada uma atualização de regras de negócio do sistema, tudo isso baseado em UX.</p>
                    </div>
                </div>
            </div>
            <img src={divider3} alt="divider1" />
            <div classNameName="row col-xs-12 dev">
                <h2>Desenvolvimento</h2>
                <div classNameName="card8">
                    React JS.
    Gatsby.
    GraphQL.
    <p>
                        Desenvolvimento do site e aplicação dos melhores frameworks do mercado, que foram desenvolvidos pelo Facebook e inovam o mercado de desenvolvimento.
                        Além disso são simples e têm capacidade de expansão que acompanha a evolução das tecnologias web.
    </p>
                </div>

                <div classNameName="card8">
                    Wordpress.
    <p>
                        Ferramenta de fácil manutenção, indicada para sites estáticos e blogs.
                        Uma alternativa rápida e barata para quem não necessita de complexidade em seu site.
    </p>
                </div>
            </div>
        </div>

        <div classNameName="row col-xs-12 footer8">
            <a href="https://oito.app" rel="noopener noreferrer" target="_blank"><button>Visitar site</button></a>
        </div>
        {/* </div> */}

    </Layout >
)

export default Starbucks