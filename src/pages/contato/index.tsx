import React from "react"
import styled from "styled-components"

import Layout from "@components/layout/layout"
import Background from "@images/Paulista-filtro3.png"

const Content = styled.div`
    font-size: 1.3em;
    background-image     : url(${Background});
    background-attachment: fixed;
    background-blend-mode: overlay;
    background-position  : bottom center;
    background-size      : cover;
    padding              : 3rem 5rem;
    min-height           : 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`

const Title = styled.header`
    width: 100%;

    h1 {
        font-size: 2.2em;
        height   : fit-content;
    }
`

const Contacts = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
    margin: 2rem auto;
    max-width: 1440px;

    h1 {
        font-size: 2.2em;
        height   : fit-content;
    }
`

const Local = styled.div`
    text-align: center;
    width     : 100%;
    max-width: 300px;

    i {
        font-size     : 2.5em;
        padding       : 0.4em;
    }
`

const Phone = styled.div`
    text-align: center;
    width     : 100%;
    max-width: 300px;

    i {
        font-size     : 2.5em;
        padding       : 0.4em;
    }
`

const Mail = styled.div`
    text-align: center;
    width     : 100%;
    max-width: 300px;

    i {
        font-size     : 2.5em;
        padding       : 0.4em;
    }

    p {
        text-align     : center;
        display        : flex;
        justify-content: center;

        a {
            display        : flex;
            justify-content: center;
            text-align     : center;
            margin         : auto;
        }

    }
`

const Social = styled.div`
    margin: 1rem auto;
    text-align: center;
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    h4 {
        font-size: 1em;
        min-width: 100px;

        a {
            display        : flex;
            justify-content: center;
            text-decoration: none;
            text-align     : center;
            font-size: 1.8em;
        }
    }
`

const Mapa = styled.iframe`
    border    : 0;
    width     : 80%;
    height: 60vh;
    margin-top: 20px;
`

const Contato = () => (
    <Layout title="Contato">
        <Content>
            <Title>
                <h1>VAMOS CONVERSAR?</h1>
            </Title>
            <Contacts>
                <Local>
                    <i className="fas fa-map-marker-alt hatch"></i>
                    <h4>São Paulo</h4>
                    <p>Alameda Joaquim Eugênio de Lima, 696 - Jardins</p>
                    <p>CEP 01403-000</p>
                </Local>
                <Local>
                    <i className="fas fa-map-marker-alt hatch"></i>
                    <h4>Madrid</h4>
                    <p>Calle Montalbán 9 2d</p>
                    <p>28014 Madrid</p>
                </Local>
                <Phone>
                    <i className="fas fa-phone hatch"></i>
                    <h4>Telefone</h4>
                    <p>11 2532.7152</p>
                </Phone>
                <Mail>
                    <i className="fas fa-mail-bulk hatch"></i>
                    <h4>Novos negócios</h4>
                    <p>Henrique</p>
                    <p><a href="mailto:henrique.castro@dueebrasil.com.br">henrique.castro@dueebrasil.com.br</a></p>
                </Mail>
            </Contacts>

            <Social>
                <h4><a href="https://www.facebook.com/agenciadueebrasil" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></h4>
                <h4><a href="https://www.instagram.com/dueebrasil" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></h4>
                <h4><a href="https://www.linkedin.com/company/duee-brasil" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></h4>
                <h4><a href="https://dueetando.com.br" target="_blank" rel="noopener noreferrer"><i className="fas fa-blog"></i></a></h4>
            </Social>
            <Contacts>
                <Mapa src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0351629017696!2d-46.65470238447564!3d-23.56718056769357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7420ee309%3A0x31541a74223471bb!2sDUEE+BRASIL!5e0!3m2!1spt-BR!2sbr!4v1565909031974!5m2!1spt-BR!2sbr" frameBorder="0" allowFullScreen title="mapa" className="pullDown"></Mapa>
            </Contacts>
        </Content>
    </Layout>
)

export default Contato