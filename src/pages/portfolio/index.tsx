import React, { FC, ReactElement, useState } from "react"
import styled from "styled-components"

import Layout from "@components/layout/layout"
import { CaseCard as Case } from "@components/portfolio"
import { JobsList } from "@components/portfolio"

const Content = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  padding: 1rem;
  margin: 0;
  margin-top: 70px;
  align-items: flex-start;
  justify-content: center;
`

const ModalContent = styled.div`
  border-top      : 1px solid #333;
  transition      : all ease 1s;
  background-color: black;
  position: fixed;
  top: 70px;
  width: 97%;
  height: calc(94% - 70px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: auto;
  transition: all 1s ease-in-out;
`

const ModalTopBar = styled.div`
  text-align: right;
  width     : 100%;
  padding  : 0.5rem 3rem;
  font-size: 1.5em;
`

const BackButton = styled.div`
  position: fixed;
  bottom: 1%;
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

const LoadingContainer = styled.div`
  width      : 100%;
  height     : 100px;
  line-height: 100px;
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  span {
    margin : 0 5px;
    color  : #fff;

    @keyframes blur-text {
      0% {
          filter: blur(0px);
      }

      100% {
          filter: blur(4px);
      }
    }

    &:nth-child(#1) {
        animation   : blur-text 1.5s (calc(0 / 5)s) infinite linear alternate;
    }

    &:nth-child(#2) {
        animation   : blur-text 1.5s (calc(1 / 5)s) infinite linear alternate;
    }

    &:nth-child(#3) {
        animation   : blur-text 1.5s (calc(2 / 5)s) infinite linear alternate;
    }

    /* @for $i from 0 through 6 {
        &:nth-child(#{$i + 1}) {
            // filter   : blur(0px);
            animation   : blur-text 1.5s (calc($i / 5)s) infinite linear alternate;
        }
    } */
  }
`

const Portfolio = () => {

  const [caseSelected, setCaseSelected] = useState<ReactElement | string | null>(null)

  const closeModal = () => setCaseSelected(null)

  const CaseModal: FC<{ job: ReactElement | string | null }> = ({ job }) => {

    if (!job) {
      return null
    }

    return <ModalContent>

      <ModalTopBar onClick={() => closeModal()}>
        <i className="fas fa-times" />
      </ModalTopBar>

      {/* <LoadingContainer>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </LoadingContainer> */}

      <JobContent>
        {typeof job === "string" ?
          <iframe src={job} id="htmlcontent" />
          : job}
      </JobContent>

      <BackButton onClick={() => closeModal()}>Voltar</BackButton>

    </ModalContent>
  }

  return <Layout title="Portfólio">
    <Content>
      {JobsList.map((job) => <Case
        img={job.thumbnail}
        title={job.title}
        open={() => setCaseSelected(job.job)}
      />)}
    </Content>

    <CaseModal job={caseSelected} />
  </Layout>

}

export default Portfolio