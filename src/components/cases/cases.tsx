import React, { FC } from "react"
import styled from "styled-components"

const OverlayT = styled.div`
    background        : rgba(0, 0, 0, 0.45);
    height            : 100%;
    left              : -100%;
    position          : absolute;
    top               : -100%;
    width             : 100%;
    -webkit-transition: all 0.3s;
    -moz-transition   : all 0.3s;
    -o-transition     : all 0.3s;
    transition        : all 0.3s;
`

const OverlayB = styled.div`
    background        : rgba(0, 0, 0, 0.45);
    height            : 100%;
    left              : 100%;
    position          : absolute;
    top               : 100%;
    width             : 100%;
    -webkit-transition: all 0.3s;
    -moz-transition   : all 0.3s;
    -o-transition     : all 0.3s;
    transition        : all 0.3s;
`

const Content = styled.div`
    float             : left;
    width             : 240px;
    height            : 210px;
    position          : relative;
    overflow          : hidden;
    margin            : 0px 0px 10px 10px;
    cursor            : pointer;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition   : all 0.2s ease-in-out;
    -o-transition     : all 0.2s ease-in-out;
    -ms-transition    : all 0.2s ease-in-out;
    transition        : all 0.2s ease-in-out;

    span {
        display           : block;
        position          : absolute;
        width             : 100%;
        line-height       : 24px;
        text-align        : center;
        font-weight       : 600;
        color             : white;
        bottom            : -100px;
        left              : 0px;
        padding           : 5%;
        text-shadow       : 1px 1px 1px rgba(0, 0, 0, 0.6);
        -webkit-transition: all 0.2s ease-in-out;
        -moz-transition   : all 0.2s ease-in-out;
        -o-transition     : all 0.2s ease-in-out;
        -ms-transition    : all 0.2s ease-in-out;
        transition        : all 0.2s ease-in-out;
    }

    &:hover {
        span {
            bottom: 0px;
        }

        ${OverlayT} {
            left: 0;
    top : 0;
        }

        ${OverlayB} {
            left: 0;
    top : 0;
        }
    }
`

const CaseImage = styled.div<{image: string}>`
    -webkit-transition : all 0.2s ease-in-out;
    -moz-transition    : all 0.2s ease-in-out;
    -o-transition      : all 0.2s ease-in-out;
    -ms-transition     : all 0.2s ease-in-out;
    transition         : all 0.2s ease-in-out;
    height             : 100%;
    min-width          : 100%;
    background-size    : cover;
    background-position: center;
    background-image: ${({image}) => `url(${image})`};
`

const CaseCard: FC<{
    img: string,
    title: string,
    open: () => void
}> = ({ img, title, open }) => {
    return (
        <Content onClick={open}>
            <OverlayT />
            <OverlayB />
            <span><i className="fas fa-search" />
                <br />{title.toUpperCase()}</span>
            <CaseImage image={img} />

        </Content>
    )
}

export default CaseCard