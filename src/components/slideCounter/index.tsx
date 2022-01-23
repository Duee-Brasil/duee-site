import React, { useState, useEffect, FC } from "react"
import styled from 'styled-components'

const ProgressBar = styled.div`
  width: 100%;
  position: fixed;
  bottom: 10px;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    max-width: 450px;
    padding: 30px;
    bottom: 20px;
    right: 70px;
  }
`;

const ProgressBarContainer = styled.div`
  &:first-child{
    flex: 0 0 80%;
    max-width: 80%;
    display: flex;
    align-items: center;
  }
  &:last-child{
    flex: 0 0 20%;
    max-width: 20%;
  }
`;

const ProgressBarComponent = styled.div`
  width: 100%;
  height: 3px;
  background-color: #525252;
`;

const ProgressBarStatus = styled.div`
  //width: 33.33%;
  transition: width .2s ease;
  background-color: white;
  height: 100%;
  width: ${(props: { progress: any; }) => props.progress};
`;

const Icon = styled.div`
  text-align: center;
`

const IconDraw = styled.i`
  transform: rotateZ(90deg);
  font-size: xx-large;
`

const IconSub = styled.p`
  margin: 5px 0;
`;

const SliderCounter:FC<{page: number}> = ({ page }) => {
  const [widthBar, setWidthBar] = useState<number | string>(0)

  const updateSlideCounter = (pages: number) => {
    console.log(pages)
    switch (pages) {
      case 0:
        // this.state.widthBar = 0;
        if (widthBar !== 0) setWidthBar(0)
        break;
      case 1:
        // widthBar = "33.33%";
        if (widthBar !== "25%") setWidthBar("25%")
        break;
      case 2:
        // widthBar = "66.66%";
        if (widthBar !== "50%") setWidthBar("50%")
        break;
      case 3:
        // widthBar = "100%";
        if (widthBar !== "75%") setWidthBar("75%")
        break;
      case 4:
        // widthBar = "100%";
        if (widthBar !== "100%") setWidthBar("100%")
        break;
      default:
        // widthBar = 0;
        if (widthBar !== 0) setWidthBar(0)
    }
  }

  useEffect(() => updateSlideCounter(page), [page, updateSlideCounter])

  return <ProgressBar>
    <ProgressBarContainer>
      <ProgressBarComponent>
        <ProgressBarStatus progress={widthBar} />
      </ProgressBarComponent>
    </ProgressBarContainer>
    <Icon>
      <IconDraw className="fas fa-exchange-alt" />
      <IconSub>scroll</IconSub>
    </Icon>
  </ProgressBar>
}

export default SliderCounter