import React from "react"
import styled from "styled-components"

import Css from "./style"
import Layout from "@components/layout/layout"

import globo from '@images/oito/globe-1-1.png'
import rocket from '@images/oito/rocket-1-1.png'
import imghead from '@images/oito/banner-1-1-moc.png'
import cta from '@images/oito/cta-1-1.png'
import etap from '@images/oito/cta-moc-1-1.png'
import TecnologyBg from "@images/oito/testi-bg-1-1.png"

const Content = styled.div`
    width: 100vw;
    background-color: white;
    color           : black;  
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${Css}
`

const Footer = styled.footer`
    width: 100%;
    text-align: center;
    padding: 3rem 5rem;

    h2 {
        font-size: 3rem;
    }

    a {
        width: 100%;
        max-width: 70vw;
        min-width: fit-content;
        font-size: 2rem;
    }
`

const Button = styled.a`
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    background-color: #e49d1a;
    font-weight: bold;
    transition: all 0.4s ease;
    border-radius: 30.5px;
    padding: 13.5px 58px;
    transition: all 0.4s ease;
    text-decoration: none;
    text-align: center;
    color: #fff;

    &:hover {
        background-color: #252758;
    }
`

const Container = styled.div`
    display: flex;
    width: 100%;
    max-width: 1200px;
    justify-content: center;
`

const Tecnologys = styled.section`
    margin-bottom: -30px;
    background: transparent url(${TecnologyBg}) bottom left no-repeat;
    background-size: cover;
    padding: 5rem;
    padding-top: 300px;
    padding-bottom: 110px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
        color: white;
        font-size: 4rem;
        width: 100%;
    }
`

const TecnologyContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    align-items: stretch;
`

const TecnologyCard = styled.div`
    margin: 60px 2rem;
    width: 400px;
    padding: 20px;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0px 10px 60px 0px rgba(37, 39, 88, 0.1);
    position: relative;

    div {
        width: 121px;
        height: 121px;
        border-radius: 50%;
        background-image: linear-gradient(90deg, #5128c4 0%, #7541d1 50%, #b16aeb 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        i {
            color: #fff;
            font-size: 63px;
        }
    }

    h3 {
        width: 100%;
        margin: 0;
        font-size: 20px;
        line-height: 34px;
        letter-spacing: -0.02em;
        text-align: center;
        margin-bottom: 17px;
        margin-top: 30px;
        max-width: 100vw;
    }

    p {
        width: 100%;
        margin: 0;
        color: #8b8c9c;
        font-size: 14px;
        line-height: 34px;
    }
`

const Steps = styled.section`
    padding-top: 330px;
    padding-bottom: 120px;
    clip-path: polygon(0 0, 100% 31%, 100% 100%, 0% 100%);
    width: 100%;
    display: flex;
    padding: 1rem 5rem;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: center;

    img {

        margin-right: -5rem;
        max-width: 55vw;
    }
`

const StepsContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

`

const Oito = () => (
    <Layout title="Oito">
        <Content>
            <section className="banner-one" id="home">
                <img src={globo} className="banner-one__globe" alt="globo" />
                <img src={rocket} className="banner-one__rocket" alt="rocket" />
                <img src={imghead} className="banner-one__moc" alt="app" />
                <div style={{ display: 'flex', width: "100%", paddingLeft: "2rem" }}>
                    <div className="banner-one__content">
                        <p className="banner-one__tag-line">Desenvolvimento de Web App</p>
                        <h3 className="banner-one__title">Oito App</h3>
                        <Button href="#about">Saiba mais</Button>
                    </div>
                </div>
            </section>

            {/* o que é oito */}

            <section className="cta-three" id="about">
                <Container>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-6 col-xl-6">
                        <img src={cta} alt="vector" className="cta-three__image" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="cta-three__content">
                            <div className="block-title text-left">
                                <h2 className="block-title__title black-text-color">O que é a OITO?</h2>
                            </div>
                            <p className="cta-three__text">A Oito é uma plataforma para que profissionais autônomos e clientes se encontrem e se conectem.</p>
                            <p className="cta-three__text">Através do site, o usuário se cadastra gratuitamente e pode, então, adicionar habilidades dentro de diferentes categorias e anunciar seus serviços dentro de cada uma delas.</p>
                            <p className="cta-three__text">O usuário pode, ainda, solicitar serviços a diferentes profissionais.</p>
                            <p className="cta-three__text"><b>A Duee Brasil é responsável pelo desenvolvimento da plataforma, branding, comunicação e campanhas de mídia.</b></p>
                        </div>
                    </div>
                </Container>
            </section>

            <Steps>
                <StepsContainer>
                    <img src={etap} alt="moc" />
                </StepsContainer>
                <StepsContainer>
                    <div className="block-title text-left">
                        <h2 className="block-title__title black-text-color">Etapas do <br /> projeto</h2>
                    </div>
                    <div className="cta-two__single">
                        <div className="cta-two__icon">
                            <i className="far fa-sticky-note"></i>
                        </div>
                        <div className="cta-two__content">
                            <h3 className="cta-two__title">Briefing</h3>
                            <p className="cta-two__text">A primeira etapa da construção foi o briefing, que especificou o que deveria ser feito e quais os objetivos a serem atendidos com o desenvolvimento do site da Oito.</p>
                        </div>
                    </div>
                    <div className="cta-two__single">
                        <div className="cta-two__icon">
                            <i className="far fa-calendar-alt"></i>
                        </div>
                        <div className="cta-two__content">
                            <h3 className="cta-two__title">Planejamento</h3>
                            <p className="cta-two__text">Após a interpretação do briefing, a etapa passa a ser o planejamento do que será feito, levando em consideração tudo o que é necessário para que o site seja funcional e eficaz.</p>
                        </div>
                    </div>
                    <div className="cta-two__single">
                        <div className="cta-two__icon">
                            <i className="fas fa-hashtag"></i>
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
                            <i className="fas fa-universal-access"></i>
                        </div>
                        <div className="cta-two__content">
                            <h3 className="cta-two__title">Melhorias</h3>
                            <p className="cta-two__text">Após o desenvolvimento, foram feitos estudos no site em geral para identificar pontos que precisavam de melhorias.
                                Tudo isso com um detalhamento do site e alguns apontamentos feitos por usuários nos feedbacks.
                                O layout foi refeito, foi realizada uma atualização de regras de negócio do sistema, tudo isso baseado em UX.</p>
                        </div>
                    </div>
                </StepsContainer>
            </Steps>

            <Tecnologys>
                <h2>Tecnologias que usamos</h2>
                <TecnologyContent>
                    <TecnologyCard>
                        <div>
                            <i className="fab fa-react" />
                        </div>
                        <h3>React - Gatsby - GraphQL - JS</h3>
                        <p>Desenvolvimento do site e aplicação dos melhores frameworks do mercado, que foram desenvolvidos pelo Facebook e inovam o mercado de desenvolvimento.
                            Além disso são simples e têm capacidade de expansão que acompanha a evolução das tecnologias web.</p>
                    </TecnologyCard>
                    <TecnologyCard>
                        <div>
                            <i className="fab fa-wordpress-simple" />
                        </div>
                        <h3>Wordpress</h3>
                        <p>Ferramenta de fácil manutenção, indicada para sites estáticos e blogs.
                            Uma alternativa rápida e barata para quem não necessita de complexidade em seu site.</p>
                    </TecnologyCard>
                </TecnologyContent>
            </Tecnologys>

            <Footer>
                <h2>Quer saber mais <br /> sobre a Oito?</h2>
                <Button href="https://oito.app" rel="noopener noreferrer" target="_blank">Visite o site</Button>
            </Footer>
        </Content>
    </Layout >
)

export default Oito