import React from "react"
import styled from "styled-components"

const MouseContainer = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20vh;
  z-index: 110;
  //mix-blend-mode: difference;
`

const ScrollDowns = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  width :34px;
  height: 55px;
`

const Mousey = styled.div`
  width: 3px;
  padding: 20px 22px;
  height: 35px;
  border: 2px solid #fff;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
`
const Scroller = styled.div`
  width: 5px;
  height: 10px;
  border-radius: 25%;
  background-color: #fff;
  animation-name: scroll;
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(.15,.41,.69,.94);
  animation-iteration-count: infinite;

  @keyframes scroll {
    0% { opacity: 0; }
    10% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(15px); opacity: 0;}
  }

  @media screen and (min-width: 768px) {
    #mouseContainer {
      display: block;
    }
  }
`

const MouseIcon = () => (
  <MouseContainer>
    <ScrollDowns>
      <Mousey>
        <Scroller />
      </Mousey>
    </ScrollDowns>
  </MouseContainer>
)

export default MouseIcon
