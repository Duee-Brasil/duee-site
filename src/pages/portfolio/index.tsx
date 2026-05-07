import Layout from '@components/layout/layout'
import { CaseCard as Case } from '@components/portfolio'
import { JobsList } from '@components/portfolio'
import type { ComponentType } from 'react'
import React, { FC, ReactElement, useState } from 'react'
import styled from 'styled-components'

const Content = styled.div<{ blockScroll: boolean }>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  padding: 1rem;
  margin: 0;
  padding-top: 70px;
  align-items: flex-start;
  justify-content: center;

  overflow: ${({ blockScroll }) => (blockScroll ? 'hidden' : 'auto')};
  opacity: ${({ blockScroll }) => (blockScroll ? 0 : 1)};
  visibility: ${({ blockScroll }) => (blockScroll ? 'hidden' : 'visible')};
  pointer-events: ${({ blockScroll }) => (blockScroll ? 'none' : 'auto')};
`

const ModalContent = styled.div`
  border-top: 1px solid #333;
  transition: all ease 1s;
  background-color: black;
  position: absolute;
  width: 100%;
  top: 0;
  height: calc(100% - 3rem);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-self: flex-start;
  align-items: center;
  padding: 0;
  margin: auto;
  transition: all 1s ease-in-out;
  z-index: 500;
`

const ModalTopBar = styled.div`
  text-align: right;
  width: 100%;
  padding: 0.5rem 3rem;
  font-size: 1.5em;
`

const BackButton = styled.div`
  position: fixed;
  bottom: 0;
  right: 120px;
  padding: 0.5rem 2rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 0.5em 0.5em 0 0;
  cursor: pointer;
`

const JobContent = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`

const JobLoading = styled.div`
  color: #fff;
  padding: 2rem;
  text-align: center;
`

const Portfolio = () => {
  const [caseSelected, setCaseSelected] = useState<
    ReactElement | string | null
  >(null)

  const closeModal = () => setCaseSelected(null)

  const CaseModal: FC<{ job: ReactElement | string | null }> = ({ job }) => {
    if (!job) {
      return null
    }

    return (
      <ModalContent>
        <ModalTopBar onClick={() => closeModal()}>
          <i className="fas fa-times" />
        </ModalTopBar>

        <JobContent>
          {typeof job === 'string' ? (
            <iframe id="htmlcontent" src={job} title="case externo" />
          ) : (
            job
          )}
        </JobContent>

        <BackButton onClick={() => closeModal()}>Voltar</BackButton>
      </ModalContent>
    )
  }

  return (
    <Layout title="Portfólio">
      <Content blockScroll={!!caseSelected}>
        {JobsList.map((item, index) => {
          const open = async () => {
            const loader = item.job
            if (typeof loader === 'string') {
              setCaseSelected(loader)
              return
            }
            setCaseSelected(<JobLoading>Carregando…</JobLoading>)
            try {
              const mod = await loader()
              const Comp = mod.default as ComponentType<Record<string, never>>
              setCaseSelected(<Comp />)
            } catch {
              setCaseSelected(
                <JobLoading>Não foi possível carregar este case.</JobLoading>
              )
            }
          }
          return (
            <Case
              key={`${index}-${item.title}`}
              img={item.thumbnail}
              open={() => {
                void open()
              }}
              title={item.title}
            />
          )
        })}
      </Content>

      <CaseModal job={caseSelected} />
    </Layout>
  )
}

export default Portfolio
