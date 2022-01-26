import React from "react"
import styled from "styled-components"

import Brand from "@images/brandingR.svg"
import Dev from "@images/desenvolvimentoR.svg"
import Digital from "@images/digitalR.svg"
import Eventos from "@images/eventospromoR.svg"
import Live from "@images/livemarketingR.svg"

const Content = styled.div`
  width: 100%;
  display: flex;
  transition: all 0.3s ease;
  max-width: 1280px;
  padding: 4rem;
  margin: 0 auto;
  justify-content: center;
  align-items: flex-start;
  

  /* @media screen and (max-width: 767px) {
    height: 700px;

    flex-direction: column;
  } */
`

const Icon = styled.img`
    margin: 0 auto;
    width: 50%;
    height: 50%;
    justify-content: center;
    align-items: center;
    transition: all 0.8s ease;
    background-position: 0px;
    background-size: 200px;
`

const Title = styled.p`
    width: 90%;
    margin: 0 auto;
    text-align: center;
    margin-top: 30px;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
`

const Text = styled.ul`
    width            : 100%;
    margin           : 2rem auto;
    font-size        : 1rem;
    text-align       : left;
    color            : white;
    font-weight      : 200;
    letter-spacing: 1px;
    opacity          : 0;
    max-height       : 0;
    transition       : all 0.3s ease;
    line-height: 1.3rem;
`

const Card = styled.div`
    width: 100%;
    max-width: 350px;
    min-width: 220px;
    height: 230px;
    background: linear-gradient(225deg, #000000, #202020);
    margin: 5rem 1rem;
    border-radius: 10px;
    box-shadow: 0px 2px 10px rgba(10, 10, 10, 0.24);
    border: 2px solid rgba(30, 30, 30, 0.12);
    font-size: 1rem;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: all 0.3s ease;
    padding-top: 30px;

    &:hover {
        height: fit-content;

        ${Content} {
            height: fit-content;
        }

        ${Icon} {
            background-position: -120px;
            transition         : all 0.3s ease;
            opacity                : 1;
            transition             : all 0.3s ease;
        }

        ${Text} {
            opacity: 1;
            max-height       : fit-content;
        }
    }
`



const NossoTrabalho = () => (
    <Content>
        <Card>
            <Icon src={Live} alt="LIVE MKT" />
            <Title>LIVE MKT</Title>
            <Text>
                <li>Ativações de marca</li>
                <li>Eventos</li>
                <li>Feiras e estandes</li>
                <li>Lançamentos</li>
                <li>Workshops e Convenções</li>
                <li>Cenografia</li>
            </Text>
        </Card>

        <Card>
            <Icon src={Digital} alt="DIGITAL" />
            <Title>DIGITAL</Title>
            <Text>
                <li>Ativações online</li>
                <li>SEO & SEM</li>
                <li>Criação e conteúdos digitais</li>
                <li>Monitoramento e compra de mídia</li>
                <li>Estratégia em redes sociais e conteúdo</li>
                <li>Inbound Marketing</li>
            </Text>
        </Card>

        <Card>
            <Icon src={Eventos} alt="PROMOÇÕES e TRADE" />
            <Title>PROMOÇÕES e TRADE</Title>
            <Text>
                <li>Ativações</li>
                <li>Degustação</li>
                <li>Ações PDV</li>
                <li>Promoções</li>
                <li>Campanhas de Incentivo e CRM</li>
                <li>Concursos culturais</li>
            </Text>
        </Card>

        <Card>
            <Icon src={Brand} alt="BRANDING" />
            <Title>BRANDING</Title>
            <Text>
                <li>Planejamento Estratégico</li>
                <li>Posicionamento de marca</li>
                <li>Identidade visual</li>
                <li>Brand book</li>
                <li>Criação de conceitos</li>
                <li>Campanhas institucionais</li>
            </Text>
        </Card>

        <Card>
            <Icon src={Dev} alt="DESENVOLVIMENTO" />
            <Title>DESENVOLVIMENTO</Title>
            <Text>
                <li>Desenvolvimento Sites e Hotsites</li>
                <li>Criação Aplicativos</li>
                <li>Desenvolvimento Mobile</li>
                <li>Sistema Web</li>
                <li>Aplicativos p/ redes sociais</li>
                <li>Sistemas CRM</li>
            </Text>
        </Card>
    </Content>
)

export default NossoTrabalho
