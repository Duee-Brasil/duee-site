import React, { useState } from "react"
import styled, { css } from "styled-components"

import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { Collapse } from 'react-collapse'

import Layout from "@components/layout/layout"
import News from "@components/news"
import JovenPan from '@images/noticias/logo_jovempan.jpg'
import Propmark from '@images/noticias/logo_propmark.jpg'
import Blog from '@images/noticias/logo_blog_fernando.jpg'
import Adonline from '@images/noticias/logo_adonline.jpg'
import meiomsg from '@images/noticias/logo_meio_mensagem.jpg'
import Grandes from '@images/noticias/logos_AI.jpg'
import Promoview from '@images/noticias/logos_AI2.jpg'
import Mundomkt from '@images/noticias/logos_AI-1.jpg'
import Mkgpro from '@images/noticias/logos_AI-2.jpg'
import Clientesa from '@images/noticias/logo_clientesa.jpg'
import Proxxima from '@images/noticias/logo_proxxima.jpg'
import Leaocolor from '@images/Leao-Duee-color.png'
import Hashtag from '@images/SOMOSLEOES.png'

import Trabalho from '@components/nosso-trabalho'

import { colors } from "@style/_colors"

import clt1 from '@images/portfolio/clients/Prancheta 1.png'
import clt2 from '@images/portfolio/clients/Prancheta 1aa.png'
import clt3 from '@images/portfolio/clients/Prancheta 1a.png'
import clt4 from '@images/portfolio/clients/Prancheta 1b.png'
import clt5 from '@images/portfolio/clients/Prancheta 1c.png'
import clt6 from '@images/portfolio/clients/Prancheta 1d.png'
import clt7 from '@images/portfolio/clients/Prancheta 1e.png'
import clt8 from '@images/portfolio/clients/Prancheta 1 f.png'
import clt9 from '@images/portfolio/clients/Prancheta 1g.png'
import clt10 from '@images/portfolio/clients/Prancheta 1h.png'
import clt11 from '@images/portfolio/clients/Prancheta 1i.png'
import clt12 from '@images/portfolio/clients/Prancheta 1j.png'
import clt13 from '@images/portfolio/clients/Prancheta 1k.png'
import clt14 from '@images/portfolio/clients/Prancheta 1l.png'
import clt15 from '@images/portfolio/clients/Prancheta 1m.png'
import clt16 from '@images/portfolio/clients/Prancheta 1n.png'
import clt17 from '@images/portfolio/clients/Prancheta 1o.png'
import clt18 from '@images/portfolio/clients/Prancheta 1p.png'
import clt19 from '@images/portfolio/clients/Prancheta 1q.png'
import clt20 from '@images/portfolio/clients/Prancheta 1r.png'
import clt21 from '@images/portfolio/clients/Prancheta 1s.png'
import clt22 from '@images/portfolio/clients/Prancheta 1t.png'
import clt23 from '@images/portfolio/clients/Prancheta 1u.png'
import clt24 from '@images/portfolio/clients/Prancheta 1v.png'
import clt25 from '@images/portfolio/clients/Prancheta 1x.png'
import clt26 from '@images/portfolio/clients/Prancheta 1y.png'
import clt27 from '@images/portfolio/clients/Prancheta 1z.png'
import clt28 from '@images/portfolio/clients/Prancheta 1ab.png'
import clt29 from '@images/portfolio/clients/Prancheta 1ac.png'
import clt30 from '@images/portfolio/clients/Prancheta 1ad.png'
import clt31 from '@images/portfolio/clients/Prancheta 1ae.png'
import clt32 from '@images/portfolio/clients/Prancheta 1af.png'
import clt33 from '@images/portfolio/clients/Prancheta 1ag.png'
import clt34 from '@images/portfolio/clients/Prancheta 1ah.png'
import clt35 from '@images/portfolio/clients/Prancheta 1ai.png'
import clt36 from '@images/portfolio/clients/Prancheta 1aj.png'
import inovini from '@images/portfolio/clients/inovini.png'
import kalassi from '@images/portfolio/clients/kalassi.png'
import maille from '@images/portfolio/clients/maille.png'

import GifBackground from "@images/home/TOPO_SEM_LETRA.gif"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Animations = css`
    
    @-webkit-keyframes live {
        0% {
            visibility: visible;
        }

        10% {
            visibility: hidden;
        }
    }

    @keyframes live {
        0% {
            visibility: visible;
        }

        10% {
            visibility: hidden;
        }
    }

    @-webkit-keyframes promo {
        10% {
            visibility: visible;
        }

        20% {
            visibility: hidden;
        }
    }

    @keyframes promo {
        10% {
            visibility: visible;
        }

        20% {
            visibility: hidden;
        }
    }

    @-webkit-keyframes brand {
        20% {
            visibility: visible;
        }

        30% {
            visibility: hidden;
        }
    }

    @keyframes brand {
        20% {
            visibility: visible;
        }

        30% {
            visibility: hidden;
        }
    }

    @-webkit-keyframes digital {
        30% {
            visibility: visible;
        }

        40% {
            visibility: hidden;
        }
    }

    @keyframes digital {
        30% {
            visibility: visible;
        }

        40% {
            visibility: hidden;
        }
    }

    @-webkit-keyframes dev {
        30% {
            visibility: visible;
        }

        40% {
            visibility: hidden;
        }
    }

    @keyframes dev {
        40% {
            visibility: visible;
        }

        50% {
            visibility: hidden;
        }
    }

    @-webkit-keyframes faz {
        30% {
            visibility: visible;
        }

        40% {
            visibility: hidden;
        }
    }

    @keyframes faz {
        50% {
            visibility: visible;
        }

        100% {
            visibility: hidden;
        }
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`

const VideoHeader = styled.div`
    background-image      : url(${GifBackground});
    background-position   : center right;
    background-size       : cover;
    min-height            : fit-content;
    // max-height         : 100vh;
    height                : 100%;
    margin                : 0;
    padding               : 0;
    width: 100%;

    img {
        min-width   : 100vw;
        width       : 100%;
        max-height  : 97vh;
    }

    /* div {
        background-image          : url('@images/SOMOSLEOES.png');
        background-position       : center right;
        background-size           : cover;
        //     min-height         : 25%;
        // max-height             : 100vh;
        height                    : 100%;
        margin                    : 0;
        padding                   : 0;
    } */

    /* @media screen and (max-width: 980px) {
        background-image   : url('@images/home/TOPO_SEM_LETRA.gif');
        background-position: center right;
        background-size    : cover;
        min-height         : fit-content;
        max-height         : 100vh;
        height             : fit-content;
        margin             : 0;
        padding            : 0;
        width: 100%;

        img {
            width   : 100%;
            max-height  : 100vh;
            margin-right: 0;
            display     : block;
        }

        /* div {
            background-image             : url('@images/SOMOSLEOES.png');
            background-position          : center right;
            background-size              : cover;
            min-height                   : 25%;
            margin                       : 0;
            padding                      : 0;
            display                      : none;
        } */
    /* } */
`

const Video = styled.div`
    
    padding               : 3rem;
    display               : flex;
    align-items: center;
    justify-content: center;

    iframe {
        width : 80vw;
        height: 80vh;
    }
`

const GenteFaz = styled.div`
    background-color      : white;
    color                 : ${colors.escuroDrk};
    padding               : 7rem 5rem;
    display               : flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: center;
`

const Manifesto = styled.div`
    padding       : 3rem 5rem;
    border        : 8px solid ${colors.claroDrk};
    width: 100%;
    max-width: 900px;
    font-size: 1.3rem;
`

const Resumo = styled.div`
    /* position           : relative; */
    text-align         : right;
    align-self         : center;
    background-color   : white;
    justify-content      : flex-end;
    width: 100%;
    max-width: 600px;
    margin: 0;
    padding: 1rem 0;
    margin-right: -2rem;

    ${Animations}

    h2 {
        font-size        : 4em;
        color            : ${colors.blue};
        line-height      : 1em;
        font-family      : 'Anton', sans-serif;
        letter-spacing   : 5px;
        visibility       : hidden;
        margin: 0;
    }

    h1 {
        margin: 0;
        text-align         : right;
        font-size          : 8em;
        color              : ${colors.pink};
        font-weight        : bold;
        font-family        : 'Anton', sans-serif;
        line-height        : 1em;
        font-kerning       : 1.5em;
        letter-spacing     : 15px;
        visibility         : hidden;
        -webkit-animation  : faz 5s step-end infinite;
        animation          : faz 5s step-end infinite;
    }
`

const LIVE = styled.h2`
    -webkit-animation: live 5s step-end infinite;
    animation        : live 5s step-end infinite;    
`

const PROMO = styled.h2`
    -webkit-animation: promo 5s step-end infinite;
    animation        : promo 5s step-end infinite;  
`

const BRAND = styled.h2`
    -webkit-animation: brand 5s step-end infinite;
    animation        : brand 5s step-end infinite;   
`

const DIGITAL = styled.h2`
    -webkit-animation: digital 5s step-end infinite;
    animation        : digital 5s step-end infinite;  
`

const DEV = styled.h2`
    -webkit-animation: dev 5s step-end infinite;
    animation        : dev 5s step-end infinite;   
`

const Versinho = styled.div`
    background-color              : black;
    height                        : 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const VersinhoText = styled.div`
        font-size    : 1.1em;
        margin       : 0;
        padding-left : 3%;
        padding-right: 1%;
        text-align   : center;
`

const VersinhoLion = styled.div`
    
    margin-top: 15vh;
    margin-right: -50rem;

    img {
        height  : 115vh;
        overflow: hidden;
    }
`

const Servico = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Clients = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content : center;
    background-color: white;
    color           : black;
    padding: 3rem;

    h2 {
        text-align: center;
        width: 100%;
    }

    img {
        width : 100%;
        height: auto;
    }
`

const NewsCollapse = styled.div`
    width           : 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const VermaisButton = styled.div`
    width  : 100%;
    display:flex;
    justify-content: center;
    padding: 2rem;

    button {
            background-color: transparent;
            border          : 2px solid black;
            color           : black;
            padding         : 1rem 3rem;
            font-size       : 1.2rem;
            cursor          : pointer;
        }

`

const Vermais = styled.div`
    width  : 100vw;
    display: flex;
    background-color: white;
    flex-direction: column;
    justify-content: center;
`

const Depoimentos = styled.div`
    color           : ${colors.escuroDrk};
    width           : 100%;
    width: 100%;
    max-width: 900px;
    padding         : 3rem 5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;

    h4 {
        text-align: center;
    }
`

const Depo = styled.div`
    p {
        text-align  : left;
        padding-left: 10%;
    }

    @media screen and (max-width: 980px) {
        width  : 100%;
        padding: 0;
        margin: 0;

        p {
            text-align  : left;
            padding-left: 10%;
        }
    }
`

const Midia = styled.div`
    color           : ${colors.escuroDrk};
    width           : 100%;
    padding         : 3rem 5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    h4 {
        width: 100%;
        text-align: center;
    }
`

const SomosLeoes = () => {
    const [openNews, setOpenNews] = useState(false)
    const [pageIndex, setPageIndex] = useState(0)

    return (
        <Layout title="Somos leões">

            <Content>

                <VideoHeader>
                    <img src={Hashtag} alt="#somosleoes" />
                </VideoHeader>

                <Video>
                    <iframe src="https://player.vimeo.com/video/355173390" title="Duee Brasil" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                </Video>
                

                <GenteFaz>
                    <Manifesto>
                        <p>A Duee é uma agência full service, que preza pela comunicação integrada, porque sabe que o mundo não se divide em on e off.</p>
                        <p>Não criamos apenas conteúdos e campanhas, nós geramos ideias e conexões.</p>
                        <p>Nós somos uma agência que acredita que o trabalho está em constante movimento e, por isso, estamos sempre atentos às novidades, ao público, às revoluções e novas ideias.</p>
                        <p>É por meio de nossa paixão, criatividade e de estratégias que ajudamos marcas a terem retornos eficientes, se tornarem relevantes e atingirem grandes resultados.</p>
                        <p>O conceito "A Gente Faz" traduz a nossa experiência de 11 anos, o nosso espírito de equipe e de proatividade. É o reflexo do nosso posicionamento como agência 360 graus. A gente faz criativo. A gente faz diferente. A gente faz inteligente.</p>
                        <p>Eventos? A gente faz.</p>
                        <p>Digital? A gente faz.</p>
                        <p>Branding? A gente faz.</p>
                    </Manifesto>
                    <Resumo>
                        <LIVE>LIVE MKT</LIVE>
                        <PROMO>PROMOÇÕES</PROMO>
                        <BRAND>BRANDING</BRAND>
                        <DIGITAL>DIGITAL</DIGITAL>
                        <DEV>DESENVOLVIMENTO</DEV>
                        <h1 className="glitchhover" value="A GENTE FAZ">A GENTE FAZ</h1>
                    </Resumo>
                </GenteFaz>

                <Versinho>
                    <VersinhoText className="slideDown col-xs-12 col-md-5">
                        <h2>SOMOS LEÕES</h2>
                        <h3>Rugimos bem alto para que todos possam nos ouvir.</h3>
                        <h3>Defendemos nossas ideias, não temos medo de nos aventurar.</h3>
                        <h3>Somos ágeis, valentes, estrategistas e inquietos.</h3>
                        <h3>Estamos sempre nos desafiando e caçando oportunidades de fazer diferente.</h3>
                        <h3>Somos leões.</h3>
                    </VersinhoText>
                    <VersinhoLion>
                        <img src={Leaocolor} alt="Roar" />
                    </VersinhoLion>
                </Versinho>
                
<Servico>
    <Trabalho />
</Servico>
                

                <Clients>
                    <h2>Clientes</h2>
                    <News img={clt1} />
                    <News img={clt2} />
                    <News img={clt3} />
                    <News img={clt4} />
                    <News img={clt5} />
                    <News img={clt6} />
                    <News img={clt7} />
                    <News img={clt8} />
                    <News img={clt9} />
                    <News img={clt10} />
                    <News img={clt11} />
                    <News img={clt12} />
                    <News img={clt13} />
                    <News img={clt14} />
                    <News img={clt15} />
                    <News img={clt16} />
                    <News img={inovini} />
                    <News img={clt17} />
                    <News img={kalassi} />
                    <News img={clt18} />
                    <News img={clt19} />
                    <News img={maille} />
                    <News img={clt20} />
                    <News img={clt21} />
                    <News img={clt22} />
                    <News img={clt23} />
                    <News img={clt24} />
                    <News img={clt25} />
                    <News img={clt26} />
                    <News img={clt27} />
                    <News img={clt28} />
                    <News img={clt29} />
                    <News img={clt30} />
                    <News img={clt31} />
                    <News img={clt32} />
                    <News img={clt33} />
                    <News img={clt34} />
                    <News img={clt35} />
                    <News img={clt36} />

                </Clients>

                <NewsCollapse>
                    <VermaisButton>
                        <button type='button' onClick={() => setOpenNews(!openNews)}>{openNews ? "Fechar" : "Ver mais"}</button>
                    </VermaisButton>

                    <Vermais>
                        <Collapse isOpened={openNews}>

                            <Depoimentos>
                                <h4>Depoimentos</h4>

                                <AutoPlaySwipeableViews index={pageIndex} onChangeIndex={(e) => setPageIndex(e)}>
                                    <Depo><h5>“Os maiores diferenciais da Duee são principalmente a confiança, transparência e qualidade. A Duee é uma agência que preza pelo respeito com o cliente.”</h5>
                                        <p><strong>Sandra Collier</strong></p>
                                        <p>Gerente de Marketing, Walmart Brasil</p></Depo>
                                    <Depo><h5>“É uma agência com flexibilidade, aberta a mudanças e eles sempre entregam com bastante agilidade.“</h5>
                                        <p><strong>Maricy Gattai</strong></p>
                                        <p>Gerente de Marketing, Bauducco</p></Depo>
                                    <Depo><h5>“O que é muito legal da Duee, é que ela sempre traz uma proposta 360o. Isso, pra gente, facilita muito.”</h5>
                                        <p><strong>Fernando Colino</strong></p>
                                        <p>Gerente de Compras, Pernod-Ricard Brasil</p></Depo>
                                    <Depo><h5>“A qualidade gráfica e criativa do projeto foi muito interessante. Temos sempre os retornos muito rápidos com uma flexibilidade e agilidade para resolver qualquer contratempo.”</h5>
                                        <p><strong>Vanessa Campanholo</strong></p>
                                        <p>Gerente de Marketing, AES Eletropaulo</p></Depo>
                                </AutoPlaySwipeableViews>
                            </Depoimentos>

                            <Midia>
                                <h4>Duee na midia</h4>

                                <News img={JovenPan} title="CODORNÍU CONVIDA EXPERTS PARA CRIAR BEBIDAS AUTORAIS COM CAVA" link="http://jovempan.uol.com.br/opiniao-jovem-pan/consultores/cesar-adames/codorniu-convida-experts-para-criar-bebidas-autorais-com-cava.html" />
                                <News img={Propmark} title="MASCOTE DA CERVEJA BELGA VEDETT INVADE CIDADE DE SÃO PAULO" link="http://propmark.com.br/anunciantes/mascote-da-cerveja-belga-vedett-invade-cidade-de-sao-paulo" />
                                <News img={Propmark} title="DUEE BRASIL ASSUME CONTA DA CODORNÍU, DA INTERFOOD IMPORTAÇÃO" link="http://propmark.com.br/agencias/duee-brasil-assume-conta-da-codorniu-da-interfood-importacao" />
                                <News img={Blog} title="MARKET LOOK COM HENRIQUE CASTRO" link="http://blogdofernandocoelho.blogspot.com.br/2015/03/voce-ja-ouviu-falar-em-comunicacao-all.html" />
                                <News img={Propmark} title="ENTRE ASPAS: ENGAJAMENTO ORGÂNICO" link="http://propmark.com.br/digital/entre-aspas-engajamento-organico" />
                                <News img={Adonline} title="DUEE BRASIL ASSUME COMO UMA DAS AGÊNCIAS DE LG" link="http://www.adonline.com.br/rapidinhas/57746-duee-brasil-assume-como-uma-das-agencias-de-lg.html" />
                                <News img={meiomsg} title="DANÇA DAS CONTAS" link="http://www.meioemensagem.com.br/home/comunicacao/2015/10/23/dan-a-das-contas-duracell-e-unesco.html" />
                                <News img={Propmark} title="ESPANHOLA CODORNÍU LANÇA WEBSÉRIE NO BRASIL" link="https://dueebrasil.com.br/Site_2016?page_id=907" />
                                <News img={Grandes} title="COINTREAU RENOVA POSICIONAMENTO" link="http://grandesnomesdapropaganda.com.br/tag/duee-brasil/" />
                                <News img={Promoview} title="DUEE BRASIL CONQUISTA DUAS NOVAS CONTAS" link="http://www.promoview.com.br/agencia/contas/duee-brasil-conquista-duas-novas-contas.html" />
                                <News img={Mundomkt} title="COMO SE COMPORTAR NA REDE SOCIAL QUANDO O CONSUMIDOR PRECISA DE VOCÊ" link="https://www.mundodomarketing.com.br/artigos/henrique-castro/34101/como-se-comportar-na-rede-social-quando-o-consumidor-precisa-de-voce.html" />
                                <News img={meiomsg} title="DANÇA DAS CONTAS: CATHO, SALVAT E BRILIA" link="http://www.meioemensagem.com.br/home/comunicacao/2015/11/13/dan-a-das-contas-catho-editora-salvat-e-brilia.html" />
                                <News img={Mkgpro} title="AGÊNCIA DUEE BRASIL ASSUME NOVOS CLIENTES" link="http://www.propagandasc.com.br/agencia_duee_brasil_assume_novos_clientes.html" />
                                <News img={Clientesa} title="AMOSTRA DE UMA FIDELIZAÇÃO" link="http://www.clientesa.com.br/marketingderelacionamento/58535/amostra-de-uma-fidelizacao/Ler.aspx" />
                                <News img={Proxxima} title="O UBER ALÉM DO UBER E A REVOLUÇÃO DA INDÚSTRIA AUTOMOBILÍSTICA" link="http://www.proxxima.com.br/busca-proxxima?search=duee+brasil&ordenar=data&periodode=&periodoate=&categoria=&dias=" />
                            </Midia>
                        </Collapse>
                    </Vermais>
                </NewsCollapse>
            </Content>
        </Layout>
    )
}

export default SomosLeoes