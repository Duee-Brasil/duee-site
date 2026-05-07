import Layout from '@components/layout/layout'
import inssBottom from '@images/itau/inssBottom.png'
import inssTop from '@images/itau/inssTop.png'
import intro from '@images/itau/intro.png'
import logoItau from '@images/itau/logoItau.png'
import merchTop from '@images/itau/marchTop.png'
import merchBottom from '@images/itau/merchBottom.png'
import React from 'react'
import styled from 'styled-components'

/**
 * Divide um valor CSS (número + unidade) por 2, preservando a unidade informada.
 * Ex.: `"10rem"` → `"5rem"`, `"100%"` → `"50%"`, `"500px"` → `"250px"`.
 */
function halfCssSize(size: string): string {
  const trimmed = size.trim()
  const match = trimmed.match(/^(-?\d+(?:\.\d+)?)([^\d\s]+)$/i)
  if (!match) return trimmed

  const value = Number.parseFloat(match[1])
  const unit = match[2]
  if (!Number.isFinite(value)) return trimmed

  return `${value / 2}${unit}`
}

const colors = {
  orange: '#FF6200',
  orangeLight: '#FF9C00',
  white: '#FFFFFF',
  text: '#111111',
  line: '#F2AA76',
  gradienteBackground:
    'linear-gradient(180deg, #FFFFFF 7%, #FF9C00 30%, #FF6002 61%, #FFFFFF 98%)',
  gradientOrange:
    'linear-gradient(180deg, #FFFFFF 7%, #FF7d04 30%, #FF6002 100%)',
}

const Main = styled.div`
  margin: 0;
  width: 100vw;
  background: ${colors.white};
  color: ${colors.text};
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const Text = styled.p`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  z-index: 1;
  position: relative;

  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const Hero = styled.header`
  max-width: 1440px;
  padding: 7rem 1rem 7rem;
  position: relative;
`

const Section = styled.section<{ bgColor?: string }>`
  padding: 1rem 1.5rem;
  padding-top: 13rem;
  background: ${({ bgColor }) => bgColor};
  margin-top: -12rem;
  position: relative;
`

const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
`

const Heading = styled.h2<{ orange?: boolean }>`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-size: 4rem;
  font-weight: 800;
  color: ${({ orange }) => (orange ? colors.orange : colors.text)};
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.01em;
  position: relative;

  @media (max-width: 768px) {
    font-size: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const Figure = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4rem;
  margin: 0.35rem 0 0.7rem;
  position: relative;

  @media (max-width: 768px) {
    border-radius: 2rem;
  }
`

const TwoCol = styled.div<{ columns?: string }>`
  display: grid;
  grid-template-columns: ${({ columns = '1fr 1fr' }) => columns};
  gap: 1rem;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const BulletList = styled.ul`
  li {
    margin-bottom: 0.2rem;
  }
`

const QuoteWrap = styled.div`
  width: 70%;
  max-width: 400px;
  margin: 4rem auto;
  aspect-ratio: 1;
  position: relative;
`

const QuoteLine = styled.div<{ left?: boolean }>`
  position: absolute;
  ${({ left }) => (left ? 'left: -10px;' : 'right: -10px;')}
  width: 100%;
  height: 100%;
  border: 2px solid #ffb14d;
  border-radius: 4rem;
  transform: ${({ left }) => (left ? 'rotate(-17deg)' : 'rotate(17deg)')};
`

const QuoteCard = styled.div`
  background: ${colors.white};
  border-radius: 4rem;
  padding: 1.5rem;
  text-align: center;
  font-size: 1.5rem;
  color: ${colors.orange};
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`

const Square = styled.div<{
  lineColor?: string
  rotation?: string
  size: string
  left?: string
  right?: string
  top?: string
  bottom?: string
  noResponsive?: boolean
}>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border: 2px solid;
  border-color: ${({ lineColor }) => lineColor};
  border-radius: 6rem;
  position: absolute;
  transform: ${({ rotation = 0 }) => `rotate(${rotation})`};
  ${({ top }) => (top ? `top: ${top};` : undefined)}
  ${({ left }) => (left ? `left: ${left};` : undefined)}
  ${({ right }) => (right ? `right: ${right};` : undefined)}
  ${({ bottom }) => (bottom ? `bottom: ${bottom};` : undefined)}

  @media (max-width: 768px) {
    width: ${({ size, noResponsive }) =>
      noResponsive ? size : halfCssSize(size)};
    height: ${({ size, noResponsive }) =>
      noResponsive ? size : halfCssSize(size)};
    border-radius: 4rem;

    top: ${({ top, noResponsive }) =>
      top && !noResponsive ? halfCssSize(top) : undefined}
    left: ${({ left, noResponsive }) =>
      left && !noResponsive ? halfCssSize(left) : undefined}
    right: ${({ right, noResponsive }) =>
      right && !noResponsive ? halfCssSize(right) : undefined}
    bottom: ${({ bottom, noResponsive }) =>
      bottom && !noResponsive ? halfCssSize(bottom) : undefined}
  }
`

const ItauPage = () => {
  return (
    <Layout title="Itaú">
      <Main>
        <Section>
          <Content>
            <Hero>
              <Square
                noResponsive
                bottom="18rem"
                left="-26rem"
                lineColor={colors.orange}
                rotation="-35deg"
                size="100rem"
              />
              <Square
                noResponsive
                bottom="16rem"
                left="-22rem"
                lineColor={colors.text}
                rotation="-26deg"
                size="100rem"
                style={{
                  background: colors.gradientOrange,
                  borderWidth: '1px',
                }}
              />
              <Square
                noResponsive
                bottom="15rem"
                left="-20rem"
                lineColor={colors.white}
                rotation="-21deg"
                size="100rem"
              />
              <Figure
                alt="Logo Itau"
                src={logoItau}
                style={{
                  width: '15rem',
                  position: 'relative',
                  borderRadius: 0,
                  padding: 0,
                  margin: '0 0 0 3rem',
                }}
              />
            </Hero>
          </Content>
        </Section>

        <Section>
          <Content>
            <Text>
              O Itaú é uma das marcas mais valiosas e reconhecidas do Brasil,
              referência em consistência, inovação e experiência do cliente em
              todos os pontos de contato.
            </Text>
            <Text>
              É nesse contexto que a DUEE Brasil atua como parceira estratégica,
              contribuindo para levar essa força de marca além das agências.
            </Text>
            <Text>
              Desde 2024, construímos uma parceria sólida com o Itaú,
              desenvolvendo projetos que integram estratégia, operação e
              experiência.
            </Text>
          </Content>
        </Section>

        <Section>
          <Content>
            <Heading orange>Parceiro Itaú</Heading>
            <Square
              lineColor={colors.line}
              right="0"
              rotation="32deg"
              size="50rem"
              top="5rem"
            />
            <Figure alt="Projeto Parceiro Itau" src={intro} />
            <Text>
              O projeto Parceiro Itaú marcou o início dessa jornada, expandindo
              a comunicação do banco para lojas parceiras e ampliando sua
              presença no ambiente físico além das agências.
            </Text>
            <Text>
              Mais do que implementar materiais, o projeto levou o padrão Itaú
              de comunicação para novos pontos de contato.
            </Text>
          </Content>
        </Section>

        <Section bgColor={colors.gradienteBackground}>
          <Content>
            <Square
              left="3rem"
              lineColor={colors.white}
              rotation="-32deg"
              size="50rem"
            />
            <Heading>Projeto Merchandising 360°</Heading>
            <Figure
              alt="Projeto merchandising 360"
              src={merchTop}
              style={{
                right: 0,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                width: '70%',
                marginRight: 0,
                marginLeft: 'auto',
              }}
            />
            <Text>
              O Projeto Merchandising 360° é um dos principais pilares dessa
              parceria.
            </Text>
            <Text>
              Com atuação nacional, a DUEE executa um trabalho completo de
              housekeeping e gestão da comunicação nas agências, garantindo que
              cada ponto de contato esteja alinhado ao padrão Itaú.
            </Text>
            <Text>Nossa atuação vai além da organização:</Text>
            <TwoCol>
              <BulletList>
                <li>Avaliação 360 das agências</li>
                <li>Padronização da comunicação visual</li>
                <li>Atualização e gestão dos materiais</li>
              </BulletList>
              <BulletList>
                <li>Treinamento e certificação de gerentes</li>
                <li>Orientação estratégica para uso da comunicação</li>
              </BulletList>
            </TwoCol>
            <Square
              bottom="-15rem"
              lineColor={colors.white}
              right="-8rem"
              rotation="52deg"
              size="50rem"
            />
            <TwoCol columns="2fr 1fr">
              <Figure
                alt="Aplicacao em loja parceira"
                src={merchBottom}
                style={{
                  left: 0,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  marginLeft: 0,
                  marginRight: 'auto',
                }}
              />
              <Text
                style={{
                  textAlign: 'right',
                }}
              >
                O resultado é uma operação que combina escala, consistência e
                eficiência, elevando a experiência do cliente dentro das
                agências em todo o Brasil.
              </Text>
            </TwoCol>
          </Content>
        </Section>

        <Section>
          <Content>
            <Square
              lineColor={colors.orange}
              right="10rem"
              rotation="-52deg"
              size="55rem"
              top="15rem"
            />
            <Heading orange>Projeto INSS</Heading>
            <TwoCol columns="1fr 2fr">
              <Text>
                Em 2025, a DUEE foi responsável pela implementação dos espaços
                INSS nas agências Itaú, conduzindo o projeto de ponta a ponta.
              </Text>
              <Figure
                alt="Projeto INSS em loja"
                src={inssTop}
                style={{
                  right: 0,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  marginRight: 0,
                  marginLeft: 'auto',
                }}
              />
            </TwoCol>
            <Text style={{ marginTop: '5rem' }}>
              Atuamos em todas as etapas:
            </Text>
            <BulletList>
              <li>Produção dos materiais</li>
              <li>Gestão logística</li>
              <li>Acompanhamento das instalações</li>
            </BulletList>
            <Text>
              Mais do que executar, garantimos que cada espaço fosse entregue
              com qualidade, dentro do prazo e alinhado ao padrão da marca.{' '}
            </Text>
            <TwoCol columns="2fr 1fr">
              <Figure
                alt="Material para operador financeiro geral"
                src={inssBottom}
                style={{
                  left: 0,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  marginLeft: 0,
                  marginRight: 'auto',
                }}
              />
              <Text style={{ textAlign: 'right' }}>
                O resultado foi um atendimento mais organizado, acessível e
                acolhedor, melhorando significativamente a experiência dos
                clientes.
              </Text>
            </TwoCol>
          </Content>
        </Section>

        <Section bgColor={colors.gradientOrange}>
          <Content>
            <Heading style={{ textAlign: 'center' }}>Nosso papel</Heading>
            <Text style={{ textAlign: 'center' }}>
              Na DUEE, atuamos como uma agência estratégica, com capacidade de
              planejamento, visão de marca e construção de soluções de alto
              nível.
            </Text>
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Mas não paramos na estratégia.
            </Text>
            <Text style={{ textAlign: 'center' }}>
              Também somos executores. Estamos na ponta, garantindo que cada
              projeto saia do papel com qualidade, consistência e aderência ao
              que foi planejado.
            </Text>
            <QuoteWrap>
              <QuoteLine left />
              <QuoteLine />
              <QuoteCard>
                <Text style={{ color: colors.orange }}>
                  Do pensamento à execução, acompanhamos todas as etapas —
                  transformando estratégia em operação real, com controle,
                  escala e resultado.
                </Text>
              </QuoteCard>
            </QuoteWrap>
          </Content>
        </Section>
      </Main>
    </Layout>
  )
}

export default ItauPage
