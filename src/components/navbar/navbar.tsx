import React, { FC, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { colors } from "@style/_colors"
import DueeLogo from "@images/duee.svg"

const Topbar = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 82px;
  padding: 10px 30px 10px 30px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
`

const Logo = styled.div`
  width: 50%;
  justify-content: flex-start;
  display: flex;

  a {
    background-color: transparent;
  }

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    align-items: center;
  }
`

const MenuButton = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 180;

  i {
    transition: .2s;
    color: ${colors.claroDrk};
    font-size: xx-large;
    mix-blend-mode: difference;
    

    &:hover{
      cursor: pointer;
      opacity: .6;
    }
  }
`

const Dropdown = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: black;
  box-shadow: 0 10px 15px black;
  opacity: 0.96;

  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`

const MenuLinks = styled.div`
  margin-top: 100px;

  ul {
    list-style: none;
    padding-left: 0;
    text-align: center;

    li {
      padding: 20px 0;

      a {
        font-size: 1.75em;
        font-weight: 700;
        display: block;
        text-align: center;
        text-decoration: none;
        border: none;
        color: white;

        &:hover {
          color: ${colors.pink};
        }
      }
    }
  }
`


const Navbar: FC = () => {
  const [dropdownActive, setDropdownActive] = useState(false)

  return <nav id="navbar">
    {dropdownActive ?
      <Dropdown>
        <MenuLinks>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/leoes">Somos Leões</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfólio</Link>
            </li>
            <li>
              <a href="https://dueetando.com.br" target="_blank" rel="noopener noreferrer">Dueetando</a>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://dueedrive.duee.com.br">Área do cliente</a>
            </li>
          </ul>
        </MenuLinks>
      </Dropdown> : null}
    <Topbar>
      <Logo>
        <Link to={"/"}>
          <img src={DueeLogo} alt="Duee Brasil" height={"50px"} />
        </Link>
      </Logo>
      <MenuButton>
        <i className={dropdownActive ? "fas fa-times" : "fas fa-bars"} role="button" onClick={() => setDropdownActive(!dropdownActive)} onKeyDown={() => setDropdownActive(!dropdownActive)} />
      </MenuButton>
    </Topbar>
  </nav>
}

export default Navbar