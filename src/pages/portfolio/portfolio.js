import React, { Component } from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import './portfolio.scss'
import Case from '../../components/cases/cases'

import Panetone from './pages/sbks-panetone'
import BFMade from './pages/bf-made'
import Geladeiras from './pages/geladeiras'
import DevOito from './pages/dev-oito'
import Trapiche from './pages/trapiche'
import VaiVedett from './pages/vai-vedett'
import Namorados from './pages/sbks-namorados'
import MadeLolla from './pages/made-lolla'
import BMLanc from './pages/bm-lanc'
import Dinner from './pages/dinner'
import Ubus from './pages/ubus'
import CasalMidia from './pages/casal-midia'
import FaxePdv from './pages/faxe-pdv'
import Chandon from './pages/chandon'
import Butter from './pages/sbks-butter'
import HappyHour from './pages/makingof'
import Casal from './pages/casal'
import VedettMidia from './pages/vedett-midia'
import Draft from './pages/sbks-draft'
import Suite from './pages/suite49'
import Trova from './pages/trova'
import Estagiario from './pages/estagiario'
import Roadshow from './pages/sbks-roadshow'

export default class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            link: ''
        }

        this.showModal = this.showModal.bind(this)
        this.loadPage = this.loadPage.bind(this)

    }

    showModal = (link) => {

        this.setState({ link })

        document.querySelector(".loading").style.visibility = 'visible'

        if (document.querySelector(".ib-content-full")) {
            if (document.querySelector(".ib-content-full").clientWidth === 0) {
                document.querySelector(".ib-content-full").style.visibility = 'visible'
                document.querySelector(".ib-content-full").style.width = '100vw'
                document.querySelector(".ib-content-full").style.height = '100vh'
                document.querySelector(".ib-content-full").style.top = '0'
                document.querySelector(".ib-content-full").style.left = '0'
            }
            if (document.querySelector(".ib-content-full").clientWidth > 0) {
                document.querySelector(".ib-content-full").style.visibility = 'hidden'
                document.querySelector(".ib-content-full").style.width = '0'
                document.querySelector(".ib-content-full").style.height = '0'
                document.querySelector(".ib-content-full").style.top = '50%'
                document.querySelector(".ib-content-full").style.left = '50%'
                document.querySelector(".loading").style.visibility = 'hidden'
            }
        }

    }

    loadPage = () => {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return (
            <Layout>
                <SEO title="Portfólio" />
                {/* <!-- First --> */}
                <div className="row ib-main-wrapper" id="portfolio">
                    
                    <div className="ib-content-full">
                        <div className="closebar" onClick={() => this.showModal()}><i className="fas fa-times" /></div>
                        
                        {typeof this.state.link === "string" ?
                            <iframe src={this.state.link} onLoad={() => this.loadPage()} id="htmlcontent"/>
                             : this.state.link }

                        <div className="loading">
                            <div className="loading-text">
                                <span className="loading-text-words">L</span>
                                <span className="loading-text-words">O</span>
                                <span className="loading-text-words">A</span>
                                <span className="loading-text-words">D</span>
                                <span className="loading-text-words">I</span>
                                <span className="loading-text-words">N</span>
                                <span className="loading-text-words">G</span>
                            </div>
                        </div>
                    </div>

                    <div className="content row col-xs-12 ib-main">
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/capa_img_site_starbucks.jpg" title="Panetone Starbucks" open={() => this.showModal(<Panetone />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" title="Black Friday Made" open={() => this.showModal(<BFMade />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/capinha-casal.png" title="Geladeiras Casal Garcia" open={() => this.showModal(<Geladeiras />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/oito-capinha.png" title="Desenvolvimento Site Oito" open={() => this.showModal(<DevOito />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Banner-4.png" title="Vitrine Trapiche" open={() => this.showModal(<Trapiche />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Banner-3.png" title="vai de vedett" open={() => this.showModal(<VaiVedett />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Banner-1.jpg" title="Starbucks dia dos namorados" open={() => this.showModal(<Namorados />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Banner-1.png" title="Made no lolla" open={() => this.showModal(<MadeLolla />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2019/06/1-banner.png" title="Lançamento Blue moon" open={() => this.showModal(<BMLanc />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Banner.png" title="Faxe + Dinner in the sky" open={() => this.showModal(<Dinner />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Banner.jpg" title="Ubus Digital" open={() => this.showModal(<Ubus />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2019/03/Screen-Shot-2019-03-01-at-19.01.04.png" title="Casal Garcia - campanha de mídia" open={() => this.showModal(<CasalMidia />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2019/03/Untitled-1.png" title="MAde in brazil - social mídia" open={() => this.showModal("https://portfolio.duee.com.br/project/made-in-brazil-social-media/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2019/03/QUADRO-FAXE-pack-art-1.png" title="Faxe - kit pdv" open={() => this.showModal(<FaxePdv />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2019/03/KV-CHANDON-MOOD_V2.png" title="Chandon - realidade aumentada" open={() => this.showModal(<Chandon />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2019/03/post-starbucks-butter-800x800-x2_02.png" title="Starbucks - butter frappuccino" open={() => this.showModal(<Butter />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Final_FAXE_MO.png" title="FAxe - making of happy hour viking" open={() => this.showModal(<HappyHour />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2018/09/POST-CASALGARCIA-allpacks-800x800_V2.png" title="Casal Garcia - Social midia" open={() => this.showModal(<Casal />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2018/09/Faxe_capa.png" title="Faxe - social midia" open={() => this.showModal("https://portfolio.duee.com.br/project/faxe/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2018/09/3_1080x1350_Vedett_V1.png" title="Vedett - social midia" open={() => this.showModal(<VedettMidia />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2018/09/Banner_via_news1080x675.png" title="Starbucks draft" open={() => this.showModal(<Draft />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2018/01/cover_suite.jpg" title="suite 49 travels - social midia" open={() => this.showModal(<Suite />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2018/01/trova01.jpg" title="Trova brasil - site" open={() => this.showModal(<Trova />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2017/07/KV_ESTAGIO.jpg" title="REspeira o estágiario - instituto via de acesso" open={() => this.showModal(<Estagiario />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2017/07/4c128dec-7acb-445e-b279-ffacbfb5d663.jpeg" title="Starbucks roadshow winter" open={() => this.showModal(<Roadshow />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2017/07/site_via01.jpg" title="Plataforma digital - instituto via de acesso" open={() => this.showModal("https://portfolio.duee.com.br/project/plataforma-digital-instituto-via-de-acesso/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2017/05/Captura-de-Tela-2017-05-26-às-16.08.52.jpg" title="Site Codorníu" open={() => this.showModal("https://portfolio.duee.com.br/project/website-codorniu/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2017/05/cover_Sene.jpg" title="Site Sene" open={() => this.showModal("https://portfolio.duee.com.br/project/website-sene/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2017/03/logo_Starbucks.jpg" title="Starbucks - Jogo das estrelas 2017" open={() => this.showModal("https://portfolio.duee.com.br/project/starbucks-jogo-das-estrelas-2017/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2017/03/IMG_4273.jpg" title="Vedett - vedett on the road" open={() => this.showModal("https://portfolio.duee.com.br/project/1007/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2017/03/31ab6449958441.58c2f4e5c9e0e.jpg" title="codorníu - web serie drink`s anatomy" open={() => this.showModal("https://portfolio.duee.com.br/project/codorniu-web-serie-drinks-anatomy/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/11/Petz_Img_Cover.jpg" title="Petz - tv petz" open={() => this.showModal("https://portfolio.duee.com.br/project/petz-tv-petz-2/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/11/img_3921.jpg" title="FCA - digital day" open={() => this.showModal("https://portfolio.duee.com.br/project/digital-day-fca/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/11/KV_TNT_V2.jpg" title="TNT no SPFW - sua cara sua luta" open={() => this.showModal("https://portfolio.duee.com.br/project/sua-cara-sua-luta-tnt-no-spfw/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/07/cover_pg_adv-copy.jpg" title="PG advogados - social midia" open={() => this.showModal("https://portfolio.duee.com.br/project/pg-advogados-social-media/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/06/IMG_1495.jpg" title="codorníu - web serie somos codorníu" open={() => this.showModal("https://portfolio.duee.com.br/project/codorniu-web-serie-somos-codorniu/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/06/03-1.jpg" title="hershey`s - ação de sampling" open={() => this.showModal("https://portfolio.duee.com.br/project/hersheys-acao-de-sampling/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/06/01.jpg" title="BBc - espaços cbeebies/livraria cultura" open={() => this.showModal("https://portfolio.duee.com.br/project/bbc-espacos-cbeebieslivraria-cultura/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/06/IMG_2097.jpg" title="Abril - lançamento do mobile view abril" open={() => this.showModal("https://portfolio.duee.com.br/project/lancamento-do-mobile-view-abril/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco1_avatar.jpg" title="Bauducco - teatro infantil e oficina roll" open={() => this.showModal("https://portfolio.duee.com.br/project/bauducco-teatro-infantil-e-oficina-roll/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-26-at-19.31.11.png" title="Revista veja - rio 450 anos" open={() => this.showModal("https://portfolio.duee.com.br/project/revista-veja-rio-450-anos/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Consul1.jpg" title="Consul - Showroom" open={() => this.showModal("https://portfolio.duee.com.br/project/showroom-consul/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/cover_bombardier.jpg" title="Bombardier - social midia" open={() => this.showModal("https://portfolio.duee.com.br/project/bombardier-social-media/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/codorniu_avatar.jpg" title="Cointreau - social midia" open={() => this.showModal("https://portfolio.duee.com.br/project/cointreau-social-media/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/vedett01-1.jpg" title="Vedett - social midia" open={() => this.showModal("https://portfolio.duee.com.br/project/vedett-social-media/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-19-at-16.19.23.png" title="Grupo fit - social midia" open={() => this.showModal("https://portfolio.duee.com.br/project/grupo-fit-social-media/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/fox1-1.jpg" title="fox - ccxp 2014" open={() => this.showModal("https://portfolio.duee.com.br/project/fox-ccxp-2014/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/norpal1-1.jpg" title="Norpal - site" open={() => this.showModal("https://portfolio.duee.com.br/project/norpal-web/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/intel5.jpg" title="Intel racing - campanha de incentivo" open={() => this.showModal("https://portfolio.duee.com.br/project/intel-racing-campanha-de-incentivo/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-19-at-15.24.40.png" title="Clight - movimento 3x1" open={() => this.showModal("https://portfolio.duee.com.br/project/clight-movimento-3x1/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/DSC06251.jpg" title="Ativações Walmart - Jimmy click, garfo e faca" open={() => this.showModal("https://portfolio.duee.com.br/project/ativacoes-walmart-jimmy-click-garfo-e-faca/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2014-03-25-at-19.39.52.png" title="Crowshow - site" open={() => this.showModal("https://portfolio.duee.com.br/project/crowshow-website/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/mark-gatiss-bbc.jpg" title="bbc - evento wild brazil/mark gatiss" open={() => this.showModal("https://portfolio.duee.com.br/project/evento-wild-brazil-mark-gatiss-bbc/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/CorridaWalmart2.jpg" title="Corrida Walmart 2013" open={() => this.showModal("https://portfolio.duee.com.br/project/corrida-walmart-2013/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco01-2.jpg" title="bauducco - ativação são joão" open={() => this.showModal("https://portfolio.duee.com.br/project/ativacao-de-sao-joao-bauducco/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Habro-Playskool-Banner-Poppin-Park-1.jpg" title="Hasbro - Hotsite playskool" open={() => this.showModal("https://portfolio.duee.com.br/project/hotsite-playskool-hasbro/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/siteFinalV2.jpg" title="hasbro - hotsite littlelest pet shop" open={() => this.showModal("https://portfolio.duee.com.br/project/hotsite-littlelest-pet-shop-hasbro/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/CASCOLA.jpg" title="Cascola digital" open={() => this.showModal("https://portfolio.duee.com.br/project/cascola-digital/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco01-1.jpg" title="bauducco - social midia" open={() => this.showModal("https://portfolio.duee.com.br/project/bauducco-social-media/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/PILAO.jpg" title="café pilão - ação de checkout walmart" open={() => this.showModal("https://portfolio.duee.com.br/project/acao-de-checkout-walmart-cafe-pilao/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/calminex01.jpg" title="estande calminex" open={() => this.showModal("https://portfolio.duee.com.br/project/estande-calminex/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/HALLS.jpg" title="mondelez - ações de sampling" open={() => this.showModal("https://portfolio.duee.com.br/project/acoes-de-sampling-mondelez/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/NET-BBC.jpg" title="bbc hd - convenção net" open={() => this.showModal("https://portfolio.duee.com.br/project/convencao-net-bbc-hd/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/sentirbem.jpg" title="Sentir bem - ações de sampling" open={() => this.showModal("https://portfolio.duee.com.br/project/acoes-de-sampling-sentir-bem/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/work_gde.jpg" title="farmacias walmart - ações de sampling" open={() => this.showModal("https://portfolio.duee.com.br/project/farmacias-walmart-acoes-de-sampling/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/kimberly-job241.png" title="Flashmob intimus" open={() => this.showModal("https://portfolio.duee.com.br/project/flashmob-intimus/ ")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/huggies_gde-1.jpg" title="huggies turma da monica" open={() => this.showModal("https://portfolio.duee.com.br/project/huggies-turma-da-monica/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/sauza01.jpg" title="sauza tequila - social midia" open={() => this.showModal("https://portfolio.duee.com.br/project/sauza-tequila-social-media/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco02.jpg" title="Bauducco - ações de sampling" open={() => this.showModal("https://portfolio.duee.com.br/project/acoes-de-sampling-bauducco/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/aes01.jpg" title="AES eletropaulo - smart house" open={() => this.showModal("https://portfolio.duee.com.br/project/smart-house-aes-eletropaulo/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Layout_Hotsite_Conceito_02.jpg" title="exto" open={() => this.showModal("https://portfolio.duee.com.br/project/condominio-club-life-exto/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-18-at-16.57.22.png" title="intimus evolution sampling" open={() => this.showModal("https://portfolio.duee.com.br/project/intimus-evolution-sampling/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/serasa.jpg" title="serasa experian" open={() => this.showModal("https://portfolio.duee.com.br/project/serasa-experian/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/skpf-1.jpg" title="schwarzkopf - social midia" open={() => this.showModal("https://portfolio.duee.com.br/project/schwarzkopf-social-media/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bbc01.jpg" title="bbc hd - social midia" open={() => this.showModal("https://portfolio.duee.com.br/project/bbc-hd-social-media/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-18-at-16.28.51.png" title="Nickelodeon - social midia" open={() => this.showModal("https://portfolio.duee.com.br/project/nickelodeon/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/veja01.jpg" title="Veja - ação em pdv" open={() => this.showModal("https://portfolio.duee.com.br/project/veja-acao-em-pdv/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/VH1-FACEBOOK.jpg" title="vh1 - social midia" open={() => this.showModal("https://portfolio.duee.com.br/project/vh1-social-media/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/wm02.jpg" title="walmart - ações de degustação e sampling" open={() => this.showModal("https://portfolio.duee.com.br/project/walmart-acoes-de-degustacao-e-sampling/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-18-at-16.14.55.png" title="Walmart.com - divulgação do site" open={() => this.showModal("https://portfolio.duee.com.br/project/divulgacao-do-site-walmart-com/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-18-at-16.03.03.png" title="farmacia walmart - ações de verão" open={() => this.showModal("https://portfolio.duee.com.br/project/acoes-de-verao-da-farmacia-walmart/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-18-at-15.30.17.png" title="walmart - inaugiração dos postos walmart em todo brasil" open={() => this.showModal("https://portfolio.duee.com.br/project/inauguracoes-de-postos-walmart-em-todo-brasil/")} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/dest-festa.jpg" title="Walmart - festa de fim de ano" open={() => this.showModal("https://portfolio.duee.com.br/project/festa-de-fim-de-ano-walmart-brasil/")} />
                    </div>
                </div>
            </Layout >
        )
    }
}