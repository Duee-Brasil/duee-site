import React, { FC, ReactElement } from 'react'
import styled from "styled-components"
import Flexboxgrid from "./flexboxgrid"

const Container = styled.article<{ backgroundColor?: string, color?: string }>`
    margin           : 0;
    padding          : 0;
    overflow-y       : auto;
    overflow-x       : hidden;
    width            : 100%;
    height           : 100%;
    background-color: ${({ backgroundColor }) => backgroundColor || "transparent"};
    color: ${({ color }) => color || "white"};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h2 {
        margin: 4rem auto;
        text-align: center;
    }
`

const ImgHeader = styled.img`
    width: 100%;
    margin: 0;
    margin-bottom: 3rem;
`

const Content = styled.div`
    width: 100%;
    margin: 3rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: auto;
    justify-content: center;
    max-width: 1400px;
    align-items: flex-start;
    gap: '1rem';

    ${Flexboxgrid}

    img, video {
        width: 100%;
        margin: 1rem auto;
    }

    div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    iframe {
        width: 80vw;
        height: 80vh;
    }

`

const Footer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 3rem auto;
    font-size: 1.1rem;
`

const Description = styled.div`
    width: 100%;
    max-width: 800px;
    padding: 2rem;
`

const Details = styled.div`
    width: 100%;
    max-width: 400px;
    padding: 2rem;
`

export const CaseBase: FC<{
    backgroundColor?: string,
    color?: string,
    header?: string | ReactElement,
    client?: string,
    year?: string,
    description?: ReactElement,
    name: string
}> = ({ children, backgroundColor, header, client, year, description, name, color }) => {

    return <Container backgroundColor={backgroundColor} color={color}>

        {header ? typeof header === 'string' ?
            <ImgHeader src={header} alt={name} /> :
            header
            : null}


        <Content>
            {typeof children === 'string' ? <iframe src={children} /> : children}
        </Content>

        <Footer>
            {description ? <Description>
                <p><b>SOBRE O PROJETO</b></p>
                {description}
            </Description> : null}
            {client && year ? <Details>
                <p><b>DETALHES DO PROJETO</b></p>
                <p><b>CLIENTE</b> {client}</p>
                <p><b>DATA</b> {year}</p>
            </Details> : null}
        </Footer>
    </Container>
}