import React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import './oito.scss'

import divider1 from '../../images/oito/site_ 1.png'
import divider2 from '../../images/oito/site-02.png'
import divider3 from '../../images/oito/site-03.png'
import divider4 from '../../images/oito/site-04.png'

const Starbucks = () => (
    <Layout>
        <SEO title="Oito" />
        {/* <!-- First --> */}
        <div className="row" id="oitoapp">
            <div className="col-xs-12 row center-xs" id="head">
                <div className="col-xs-12">
                    Oito App 8
                </div>
            </div>
            <img src={divider1} alt="divider1"/>
            <div className="row col-xs-12 content">
                <div className="row col-xs-12">
                    <h2>O que é a OITO?</h2>
                    <p>A Oito é uma plataforma para que profissionais autônomos e clientes se encontrem e se conectem.</p>
                    <p>Através do site, o usuário se cadastra gratuitamente e pode, então, adicionar habilidades dentro de diferentes categorias e anunciar seus serviços dentro de cada uma delas.</p>
                    <p>O usuário pode, ainda, solicitar serviços a diferentes profissionais.</p>
                </div>
                <img src={divider2} alt="divider1"/>
                <div className="row col-xs-12">
                    Como funciona
                    </div>
                <div className="row col-xs-12">
                    <h2>Etapas</h2>
                    <div className="row col-xs-12">
                        <div className="col-xs-12">
                            <h3>Briefing</h3>
                            <p>A primeira etapa da construção foi o briefing, que especificou o que deveria ser feito e quais os objetivos a serem atendidos com o desenvolvimento do site da Oito.</p>
                        </div>
                        <div className="col-xs-12">
                            <h3>Planejamento</h3>
                            <p>Após a interpretação do briefing, a etapa passa a ser o planejamento do que será feito, levando em consideração tudo o que é necessário para que o site seja funcional e eficaz.</p>
                        </div>
                        <div className="col-xs-12">
                            <h3>Desenvolvimento</h3>
                            <p>A próxima etapa foi o desenvolvimento do site em si.
            Foi feito MVP para teste de usuário, foram realizadas as integrações e, então, o site realmente começou a funcionar.
Então foram realizadas as melhorias UI e UX.</p>
                        </div>
                        <div className="col-xs-12">
                            <h3>Melhorias</h3>
                            <p>Após o desenvolvimento, foram feitos estudos no site em geral para identificar pontos que precisavam de melhorias.
            Tudo isso com um detalhamento do site e alguns apontamentos feitos por usuários nos feedbacks.
O layout foi refeito, foi realizada uma atualização de regras de negócio do sistema, tudo isso baseado em UX.</p>
                        </div>
                    </div>
                </div>
                <img src={divider3} alt="divider1"/>
                <div className="row col-xs-12">
                    <h2>Desenvolvimento</h2>
                    <div className="card8">
                        React JS.
        Gatsby.
        GraphQL.
    <p>
                            Desenvolvimento do site e aplicação dos melhores frameworks do mercado, que foram desenvolvidos pelo Facebook e inovam o mercado de desenvolvimento.
                            Além disso são simples e têm capacidade de expansão que acompanha a evolução das tecnologias web.
    </p>
                    </div>

                    <div className="card8">
                        Wordpress.
    <p>
                            Ferramenta de fácil manutenção, indicada para sites estáticos e blogs.
                            Uma alternativa rápida e barata para quem não necessita de complexidade em seu site.
    </p>
                    </div>
                </div>
            </div>

            <div className="row col-xs-12 footer8">
                <a href="https://oito.app" rel="noopener noreferrer" target="_blank"><button>Visitar site</button></a>
            </div>
        </div>
    </Layout >
)

export default Starbucks