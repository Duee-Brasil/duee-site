import inssTop from '@images/itau/inssTop.png'
import intro from '@images/itau/intro.png'
import logoItau from '@images/itau/logoItau.png'
import merchTop from '@images/itau/marchTop.png'
import merchBottom from '@images/itau/merchBottom.png'
import React from 'react'
import styled from 'styled-components'

import { CaseBase } from '../caseBase'

const HEADER_FOOTER_CURVE = 'clamp(4rem, 18vw, 12rem)'

const Header = styled.header`
  background: linear-gradient(160deg, #ff9c00 0%, #ff6002 40%);
  color: #fff;
  padding: 8rem 3rem 3rem;
  border-bottom-right-radius: ${HEADER_FOOTER_CURVE};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 1.5rem;
`

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  line-height: 1.1;
`
const TitlePrefix = styled.span`
  font-weight: 400;
  font-size: 1.1rem;
`
const TitleMain = styled.span`
  font-weight: 600;
  font-size: 2.15rem;
  text-transform: uppercase;
`

const Logo = styled.img`
  width: 4.5rem;
  height: auto;
  flex-shrink: 0;
`

const GalleryImg = styled.img<{ variant: 'right' | 'left' }>`
  width: 70% !important;
  height: auto;
  border-radius: ${({ variant }) =>
    variant === 'right' ? `4rem 0 0 4rem` : `0 4rem 4rem 0`};
  margin-left: ${({ variant }) =>
    variant === 'right' ? 'auto !important' : '0 !important'};
  margin-right: ${({ variant }) =>
    variant === 'left' ? 'auto !important' : '0 !important'};
`

const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem 0;
`

export const ItauMerchandising360 = () => (
  <CaseBase
    backgroundColor="linear-gradient(180deg, #FAF7F2 50%,  #ff9c00 80%, #ff6002 100%)"
    client="Itaú"
    color="black"
    description={
      <>
        <p>
          O Itaú escolheu a DUEE Brasil para executar o Projeto Merchandising
          360, um programa de housekeeping voltado à avaliação completa das
          agências, garantindo a padronização, organização e conservação dos
          materiais de comunicação visual em todo o Brasil.
        </p>
        <p>
          O projeto atua de forma 360, avaliando a agência como um todo, desde a
          correta aplicação dos materiais de merchandising até o alinhamento
          visual com os padrões Itaú, com foco direto na experiência do cliente
          dentro do ponto de atendimento.
        </p>
        <p>
          Além da organização e atualização dos materiais, o Projeto
          Merchandising 360 contempla o treinamento e a certificação dos
          gerentes, orientando o uso estratégico da comunicação visual no apoio
          ao atendimento e na construção de uma experiência consistente, clara e
          confiável para os clientes.
        </p>
        <p>
          Com atuação nacional, o projeto combina atendimentos presenciais e
          on-line, assegurando eficiência operacional, escala e consistência
          visual em diferentes regiões do país.
        </p>
      </>
    }
    header={
      <Header>
        <Logo alt="Itaú" src={logoItau} />
        <TitleBlock>
          <TitlePrefix>projeto</TitlePrefix>
          <TitleMain>MERCHANDISING 360</TitleMain>
        </TitleBlock>
      </Header>
    }
    name="ItauMerchandising360"
    year="2024 - 2025"
  >
    <Gallery>
      <GalleryImg
        alt="Merchandising na agência: atendimento e comunicação visual"
        src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fitau-merchandising-360%2Fimage%209.png?alt=media&token=084ae836-ffd7-4385-8a0f-3da5dab56167"
        variant="right"
      />
      <GalleryImg
        alt="Comunicação visual na agência Itaú"
        src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fitau-merchandising-360%2FWhatsApp%20Image%202026-02-18%20at%2012.36.19%201.png?alt=media&token=5eea4cbd-130f-42f5-b2b3-99bb3e994aed"
        variant="left"
      />
      <GalleryImg
        alt="Ambiente de espera com materiais de merchandising"
        src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fitau-merchandising-360%2Fimage%208.png?alt=media&token=0f434050-5e2e-47e5-99ed-5cc3c64fa4e8"
        variant="right"
      />
      <GalleryImg
        alt="Aplicação de materiais no ponto de atendimento"
        src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fitau-merchandising-360%2Fimage%207.png?alt=media&token=50c37ccd-1f4f-4392-ab5a-20ab1402e37e"
        variant="left"
      />
    </Gallery>
  </CaseBase>
)
