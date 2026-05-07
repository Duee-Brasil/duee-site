import React, { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

const Content = styled.div`
  column-count: 4;
  column-gap: 30px;
  width: 100%;

  @media (max-width: 1100px) {
    column-count: 3;
  }

  @media (max-width: 700px) {
    column-count: 2;
  }

  @media (max-width: 500px) {
    column-count: 1;
  }

  > * {
    break-inside: avoid;
    margin-bottom: 30px;
  }
`

const MasonryComponent: FC<PropsWithChildren> = ({ children }) => {
  return <Content>{children}</Content>
}

export default MasonryComponent
