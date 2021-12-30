import React from "react"

// import Layout from "../../components/layout/layout"
// import SEO from "../../components/seo"
import './nossotrabalho.scss'
import Brand from '../../images/brandingR.svg'
import Dev from '../../images/desenvolvimentoR.svg'
import Digital from '../../images/digitalR.svg'
import Eventos from '../../images/eventospromoR.svg'
import Live from '../../images/livemarketingR.svg'
// import Logo from '../../images/Logo_duee_Claro.svg'


const NossoTrabalho = () => (
    // <Layout>
    //     <SEO title="Somos leões" />
    <div className="trabalho">
        <div className="wrapper">
            <div className="content">
                {/* <!-- card --> */}
                <div className="card">
                    <img className="icon" src={Live} alt="LIVE MKT" />
                    <p className="title">LIVE MKT</p>
                    <ul className="text">
                        <li>Ativações de marca</li>
                        <li>Eventos</li>
                        <li>Feiras e estandes</li>
                        <li>Lançamentos</li>
                        <li>Workshops e Convenções</li>
                        <li>Cenografia</li>
                    </ul>

                </div>
                {/* <!-- end card --> */}

                {/* <!-- card --> */}
                <div className="card">
                    <img className="icon" src={Digital} alt="DIGITAL" />
                    <p className="title">DIGITAL</p>
                    <ul className="text">
                        <li>Ativações online</li>
                        <li>SEO & SEM</li>
                        <li>Criação e conteúdos digitais</li>
                        <li>Monitoramento e compra de mídia</li>
                        <li>Estratégia em redes sociais e conteúdo</li>
                        <li>Inbound Marketing</li>
                    </ul>

                </div>
                {/* <!-- end card --> */}

                {/* <!-- card --> */}
                <div className="card">
                    <img className="icon" src={Eventos} alt="PROMOÇÕES e TRADE" />
                    <p className="title">PROMOÇÕES e TRADE</p>
                    <ul className="text">
                        <li>Ativações</li>
                        <li>Degustação</li>
                        <li>Ações PDV</li>
                        <li>Promoções</li>
                        <li>Campanhas de Incentivo e CRM</li>
                        <li>Concursos culturais</li>
                    </ul>

                </div>
                {/* <!-- end card --> */}

                {/* <!-- card --> */}
                <div className="card">
                    <img className="icon" src={Brand} alt="BRANDING" />
                    <p className="title">BRANDING</p>
                    <ul className="text">
                        <li>Planejamento Estratégico</li>
                        <li>Posicionamento de marca</li>
                        <li>Identidade visual</li>
                        <li>Brand book</li>
                        <li>Criação de conceitos</li>
                        <li>Campanhas institucionais</li>
                    </ul>

                </div>
                {/* <!-- end card --> */}

                {/* <!-- card --> */}
                <div className="card">
                    <img className="icon" src={Dev} alt="DESENVOLVIMENTO" />
                    <p className="title">DESENVOLVIMENTO</p>
                    <ul className="text">
                        <li>Desenvolvimento Sites e Hotsites</li>
                        <li>Criação Aplicativos</li>
                        <li>Desenvolvimento Mobile</li>
                        <li>Sistema Web</li>
                        <li>Aplicativos p/ redes sociais</li>
                        <li>Sistemas CRM</li>
                    </ul>

                </div>
                {/* <!-- end card --> */}
            </div>
        </div>
    </div>

        
    // </Layout >
)

export default NossoTrabalho