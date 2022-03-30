import React from "react"
import styled from "styled-components"

import Layout from "@components/layout/layout"

import globo from '@images/oito/globe-1-1.png'
import rocket from '@images/oito/rocket-1-1.png'
import Imghead from '@images/oito/banner-1-1-moc.png'
import Imgheadfundo from '@images/oito/banner-1-1.png'
import cta from '@images/oito/cta-1-1.png'
import etap from '@images/oito/cta-moc-1-1.png'
import TecnologyBg from "@images/oito/testi-bg-1-1.png"
import { Helmet } from "react-helmet"

const Content = styled.div`
    width: 100vw;
    background-color: white;
    color           : black;  
    display: flex;
    flex-direction: column;
    justify-content: center;
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
        max-width: 1200px;
        margin: auto;
    }
`

const TecnologyContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    align-items: stretch;
    max-width: 1200px;
    margin: auto;
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
    clip-path: polygon(0 0, 100% 31%, 100% 100%, 0% 100%);
    width: 100%;
    margin: auto;
    display: flex;
    padding: 5rem;
    padding-top: 280px;
    padding-bottom: 90px;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    background-color: white;

    img {
        margin: 5rem 0;
        margin-right: -5rem;
        max-width: 55vw;
    }
`

const StepsContainer = styled.div`
    width: 50%;
    min-width: 300px;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    h2 {
        font-size: 4rem;
        width: 100%;
    }
`

const StepItem = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`

const StepIcon = styled.i`
    color: #a461e5;
    font-size: 64px;
`

const StepContent = styled.div`
    padding-left: 35px;

    h3 {
        margin: 0;
        color: #252758;
        font-size: 1.2rem;
        letter-spacing: -0.02em;
        margin-bottom: 30px;
    }

    p {
        font-size: 1rem;
        line-height: 1.5rem;
        margin: 0;
    }
`

const What = styled.div`
    margin-bottom: -230px;
    padding-bottom: 200px;
    margin-top: -150px;
    background-image: linear-gradient(90deg, #f2f3f9 0%, #fcfdfe 100%);
    padding: 4rem;
    padding-top: 200px;
    clip-path: polygon(0% 0%, 100% 30%, 100% 100%, 0% 100%);
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center;

    img {
        margin: 0;
        padding: 0;
        margin-left: -5rem;
        width: 50%;
        min-width: 300px;
        max-width: 600px;
        height: 100%;
    }
`

const WhatContent = styled.div`
    width: 50%;
    min-width: 300px;
    max-width: 600px;
    padding: 1rem;

    h2 {
        font-size: 4rem;
        width: 100%;
    }

    p {
        font-size: 1.2rem;
    }
`

const Hero = styled.section`
    background: transparent url(${Imgheadfundo}) top right no-repeat;
    background-size: cover;
    position: relative;
    padding-top: 274px;
    padding-bottom: 515px;
    padding-left: 3rem;
    padding-right: 3rem;
    z-index: 11;

    img {
        width: auto;
    }
`

const Globe = styled.img`
    position: absolute;
    top: 15%;
    left: 15%;
    animation-fill-mode: both;
    animation-name: globeRotate;
    animation-timing-function: linear;
    animation-duration: 10s;
    animation-iteration-count: infinite;

    @keyframes globeRotate {
    8% {
        transform: perspective(200px) rotateX(0deg);
    }
    100% {
        transform: perspective(200px) rotateX(360deg);
	}
}
`

const Rocket = styled.img`
    position: absolute;
    bottom: 40%;
    left: 40%;
    animation-fill-mode: both;
    animation-name: rocketMove;
    animation-timing-function: linear;
    animation-duration: 6s;
    animation-iteration-count: infinite;

    @keyframes rocketMove {
    8% {
        transform: perspective(600px) translateY(0) translateX(0) rotate(0);
        opacity: 1;
	}
    100% {
        transform: perspective(600px) translateY(-400px) translateX(-300px) rotate(0);
        opacity: 0;
	}
}
`

const ImgMoc = styled.img`
    position: absolute;
    top: 140px;
    right: 0;
    max-width: 60vw;
    animation-fill-mode: both;
    animation-name: shapeRotate;
    animation-timing-function: linear;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    transform-origin: center center;

    @keyframes shapeRotate {
    0%, 100% {
        transform: translateY(0px);
	}
    20%, 80% {
        transform: translateY(10px);
	}
    60% {
        transform: translateY(20px);
	}
}
`

const HeroContent = styled.div`
    padding: 20px;
    padding-left: 2rem;
`

const TagLine = styled.p`
    margin: 0;
    display: inline-block;
    border-radius: 16px;
    background-color: rgba(255, 255, 255, .1);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    overflow: hidden;
    color: #fff;
    line-height: 32px;
    padding-left: 20px;
    padding-right: 20px;
`

const HeroTitle = styled.h3`
    margin: 0;
    margin-top: 20px;
    margin-bottom: 50px;
    color: #fff;
    font-size: 70px;
    line-height: 80px;
    letter-spacing: -0.04em;
`

const Oito = () => (
    <Layout title="Oito">

        <Content>
            <Hero id="home">
                <Globe src={globo} alt="globo" />
                <Rocket src={rocket} alt="rocket" />
                <ImgMoc src={Imghead} alt="app" />
                    <HeroContent>
                        <TagLine>Desenvolvimento de Web App</TagLine>
                        <HeroTitle>Oito App</HeroTitle>
                        <Button href="#about">Saiba mais</Button>
                    </HeroContent>
            </Hero>

            <What>
                <img src={cta} alt="vector" />
                <WhatContent>
                    <h2>O que é a OITO?</h2>
                    <p>A Oito é uma plataforma para que profissionais autônomos e clientes se encontrem e se conectem.</p>
                    <p>Através do site, o usuário se cadastra gratuitamente e pode, então, adicionar habilidades dentro de diferentes categorias e anunciar seus serviços dentro de cada uma delas.</p>
                    <p>O usuário pode, ainda, solicitar serviços a diferentes profissionais.</p>
                    <p><b>A Duee Brasil é responsável pelo desenvolvimento da plataforma, branding, comunicação e campanhas de mídia.</b></p>
                </WhatContent>
            </What>

            <Steps>
                <StepsContainer>
                    <img src={etap} alt="moc" />
                </StepsContainer>
                <StepsContainer>
                    <h2>Etapas do <br /> projeto</h2>
                    <StepItem>
                        <StepIcon className="far fa-sticky-note" />
                        <StepContent>
                            <h3>Briefing</h3>
                            <p>A primeira etapa da construção foi o briefing, que especificou o que deveria ser feito e quais os objetivos a serem atendidos com o desenvolvimento do site da Oito.</p>
                        </StepContent>
                    </StepItem>
                    <StepItem>
                        <StepIcon className="far fa-calendar-alt" />
                        <StepContent>
                            <h3>Planejamento</h3>
                            <p>Após a interpretação do briefing, a etapa passa a ser o planejamento do que será feito, levando em consideração tudo o que é necessário para que o site seja funcional e eficaz.</p>
                        </StepContent>
                    </StepItem>
                    <StepItem>
                        <StepIcon className="fas fa-hashtag" />
                        <StepContent>
                            <h3>Desenvolvimento</h3>
                            <p>A próxima etapa foi o desenvolvimento do site em si.
                                Foi feito MVP para teste de usuário, foram realizadas as integrações e, então, o site realmente começou a funcionar.
                                Então foram realizadas as melhorias UI e UX.</p>
                        </StepContent>
                    </StepItem>
                    <StepItem>
                        <StepIcon className="fas fa-universal-access" />
                        <StepContent>
                            <h3>Melhorias</h3>
                            <p>Após o desenvolvimento, foram feitos estudos no site em geral para identificar pontos que precisavam de melhorias.
                                Tudo isso com um detalhamento do site e alguns apontamentos feitos por usuários nos feedbacks.
                                O layout foi refeito, foi realizada uma atualização de regras de negócio do sistema, tudo isso baseado em UX.</p>
                        </StepContent>
                    </StepItem>
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