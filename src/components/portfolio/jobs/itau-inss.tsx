import React from 'react'
import styled from 'styled-components'

import { CaseBase } from '../caseBase'

const GalleryImg = styled.img``

const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
`

export const ItauInss = () => (
  <CaseBase
    backgroundColor="#FFFFFF"
    client="Itaú"
    color="black"
    description={
      <>
        <p>
          O Itaú contou com a Duee para a implementação dos espaços INSS em suas
          agências, com o objetivo de criar ambientes mais organizados,
          acolhedores e facilmente identificáveis para o atendimento aos
          clientes.
        </p>
        <p>
          Nosso trabalho envolveu a produção dos materiais, gestão logística e
          acompanhamento das instalações em diferentes regiões, garantindo que
          cada etapa fosse executada com qualidade e dentro do prazo previsto
          para inauguração dos espaços. Durante a implementação, acompanhamos de
          perto a aplicação dos materiais, assegurando que o resultado final
          estivesse alinhado ao padrão visual do projeto e contribuísse para uma
          melhor experiência dentro das agências.
        </p>
        <p>
          Como resultado, os espaços INSS foram transformados em ambientes mais
          claros, atrativos e funcionais, facilitando a identificação do
          atendimento e proporcionando mais conforto, especialmente para o
          público atendido.
        </p>
      </>
    }
    header="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fitau-inss%2FVector.png?alt=media&token=de66df34-59f1-4ba0-bff4-4b2161e9d529"
    name="Itaú Projeto INSS"
    year="2025"
  >
    <Gallery>
      <GalleryImg
        alt="Espaço de atendimento com mural de boas-vindas ao público INSS"
        src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fitau-inss%2FWhatsApp%20Image%202026-02-13%20at%2018.31.47%20(1)%201.png?alt=media&token=e064ccab-f091-4867-9e81-612f3eb51853"
      />
      <GalleryImg
        alt="Área de espera com mobiliário e comunicação visual do projeto INSS"
        src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fitau-inss%2FWhatsApp%20Image%202026-02-13%20at%2018.31.48%201.png?alt=media&token=2f5b1bf6-271f-4d3e-abe6-af682470b614"
      />
      <GalleryImg
        alt="Visão geral da ambientação e sinalização do projeto INSS na agência"
        src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fitau-inss%2FWhatsApp%20Image%202026-02-13%20at%2018.37.21%20(2)%201.png?alt=media&token=84c0f310-ba9d-47eb-a0d4-543c16764c9d"
      />
      <GalleryImg
        alt="Detalhes do ambiente e estações de atendimento do projeto INSS"
        src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fitau-inss%2FWhatsApp%20Image%202026-02-13%20at%2018.40.04%20(1)%201.png?alt=media&token=16aa1339-d03f-4d9f-b4a8-368c82a1b732"
      />
    </Gallery>
  </CaseBase>
)
