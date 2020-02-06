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
import Plataforma from './pages/plataforma-via'
import CodorniuSite from './pages/cordorniu-site'
import Sene from './pages/sene'
import Jogo from './pages/sbkd-jogo'
import Urso from './pages/vedett-urso'
import Anatomy from './pages/codorniu-anatomy'
import Petz from './pages/petz'
import FCA from './pages/fca'
import TNT from './pages/tnt'
import LivingHNK from './pages/livinghnk'
import PGadv from "./pages/pgadv"
import Serie from './pages/codorniu-serie'
import Hersheys from "./pages/hersheys"
import Cbeebies from "./pages/cbeebies"
import AbrilMobile from "./pages/abril-mobile"
import Roll from "./pages/bauducco-roll"
import Veja450 from "./pages/veja-450"
import Consul from "./pages/consul"
import BombardierM from "./pages/bombardier-midia"
import CointreauM from "./pages/cointreau-midia"
import CodorniuM from "./pages/codorniu-midia"
import VedettM from "./pages/vedett-midia2"
import FitMidia from "./pages/fit-midia"
import FoxCcxp from "./pages/fox-ccxp"
import Norpal from "./pages/norpal"
import Intel from './pages/intel'
import Clight from "./pages/clight"
import Jimmy from "./pages/walmart-jimmy"
import Crownshow from "./pages/crowshow"
import Mark from "./pages/bbc-mark"
import Corrida from "./pages/walmart-corrida"
import SaoJoao from "./pages/bauducco-saojoao"
import Playskool from "./pages/hasbro-playskool"
import PetShop from "./pages/hasbro-petshop"
import Cascola from './pages/cascola'
import Pilao from "./pages/walmart-pilao"
import Calminex from "./pages/calminex"
import Mondelez from "./pages/mondelez"
import BBCNet from "./pages/bbc-net"
import SentirBem from "./pages/walmart-sentirbem"
import Intimus from "./pages/intimus"
import Huggies from "./pages/huggies"
import SauzaM from "./pages/sauza-midia"
import BauduccoS from "./pages/bauducco-sampling"
import AESEletropaulo from "./pages/aeseletropaulo"
import Exto from "./pages/exto"
import IntimusS from "./pages/intimus-sampling"
import Serasa from "./pages/serasa"
import Schwarzkopf from "./pages/schwarzkopf"
import BBChd from "./pages/bbchd"
import Nickledoen from "./pages/nickelodeon"
import VejaPDV from "./pages/veja-pdv"
import VH1Midia from "./pages/vh1-midia"
import Degustacao from "./pages/walmart-degustacao"
import WalmartM from "./pages/walmart-site"
import Verao from "./pages/walmart-verao"
import Confraternizacao from "./pages/walmart-confraternizacao"
import Farmacia from './pages/walmart-farmacia'
import Posto from './pages/walmart-posto'
import BauduccoM from "./pages/bauducco-midia"

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
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2017/07/site_via01.jpg" title="Plataforma digital - instituto via de acesso" open={() => this.showModal(<Plataforma />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2017/05/Captura-de-Tela-2017-05-26-às-16.08.52.jpg" title="Site Codorníu" open={() => this.showModal(<CodorniuSite />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2017/05/cover_Sene.jpg" title="Site Sene" open={() => this.showModal(<Sene />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2017/03/logo_Starbucks.jpg" title="Starbucks - Jogo das estrelas 2017" open={() => this.showModal(<Jogo />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2017/03/IMG_4273.jpg" title="Vedett - vedett on the road" open={() => this.showModal(<Urso />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2017/03/31ab6449958441.58c2f4e5c9e0e.jpg" title="codorníu - web serie drink`s anatomy" open={() => this.showModal(<Anatomy />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/11/Petz_Img_Cover.jpg" title="Petz - tv petz" open={() => this.showModal(<Petz />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/11/img_3921.jpg" title="FCA - digital day" open={() => this.showModal(<FCA />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/11/KV_TNT_V2.jpg" title="TNT no SPFW - sua cara sua luta" open={() => this.showModal(<TNT />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/07/cover_living.jpg" title="Living HNK - social midia" open={() => this.showModal(<LivingHNK />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/07/cover_pg_adv-copy.jpg" title="PG advogados - social midia" open={() => this.showModal(<PGadv />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/06/IMG_1495.jpg" title="codorníu - web serie somos codorníu" open={() => this.showModal(<Serie />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/06/03-1.jpg" title="hershey`s - ação de sampling" open={() => this.showModal(<Hersheys />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/06/01.jpg" title="BBc - espaços cbeebies/livraria cultura" open={() => this.showModal(<Cbeebies />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/06/IMG_2097.jpg" title="Abril - lançamento do mobile view abril" open={() => this.showModal(<AbrilMobile />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco1_avatar.jpg" title="Bauducco - teatro infantil e oficina roll" open={() => this.showModal(<Roll />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-26-at-19.31.11.png" title="Revista veja - rio 450 anos" open={() => this.showModal(<Veja450 />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Consul1.jpg" title="Consul - Showroom" open={() => this.showModal(<Consul />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/cover_bombardier.jpg" title="Bombardier - social midia" open={() => this.showModal(<BombardierM />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/cointreau_avatar.jpg" title="Cointreau - social midia" open={() => this.showModal(<CointreauM />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/codorniu_avatar.jpg" title="Codorníu - social midia" open={() => this.showModal(<CodorniuM />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/vedett01-1.jpg" title="Vedett - social midia" open={() => this.showModal(<VedettM />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-19-at-16.19.23.png" title="Grupo fit - social midia" open={() => this.showModal(<FitMidia />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/fox1-1.jpg" title="fox - ccxp 2014" open={() => this.showModal(<FoxCcxp />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/norpal1-1.jpg" title="Norpal - site" open={() => this.showModal(<Norpal />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/intel5.jpg" title="Intel racing - campanha de incentivo" open={() => this.showModal(<Intel />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-19-at-15.24.40.png" title="Clight - movimento 3x1" open={() => this.showModal(<Clight />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/DSC06251.jpg" title="Ativações Walmart - Jimmy click, garfo e faca" open={() => this.showModal(<Jimmy />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2014-03-25-at-19.39.52.png" title="Crowshow - site" open={() => this.showModal(<Crownshow />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/mark-gatiss-bbc.jpg" title="bbc - evento wild brazil/mark gatiss" open={() => this.showModal(<Mark />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/CorridaWalmart2.jpg" title="Corrida Walmart 2013" open={() => this.showModal(<Corrida />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco01-2.jpg" title="bauducco - ativação são joão" open={() => this.showModal(<SaoJoao />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Habro-Playskool-Banner-Poppin-Park-1.jpg" title="Hasbro - Hotsite playskool" open={() => this.showModal(<Playskool />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/siteFinalV2.jpg" title="hasbro - hotsite littlelest pet shop" open={() => this.showModal(<PetShop />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/CASCOLA.jpg" title="Cascola digital" open={() => this.showModal(<Cascola />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco01-1.jpg" title="bauducco - social midia" open={() => this.showModal(<BauduccoM />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/PILAO.jpg" title="café pilão - ação de checkout walmart" open={() => this.showModal(<Pilao />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/calminex01.jpg" title="estande calminex" open={() => this.showModal(<Calminex />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/HALLS.jpg" title="mondelez - ações de sampling" open={() => this.showModal(<Mondelez />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/NET-BBC.jpg" title="bbc hd - convenção net" open={() => this.showModal(<BBCNet />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/sentirbem.jpg" title="Sentir bem - ações de sampling" open={() => this.showModal(<SentirBem />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/work_gde.jpg" title="farmacias walmart - ações de sampling" open={() => this.showModal(<Farmacia />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/kimberly-job241.png" title="Flashmob intimus" open={() => this.showModal(<Intimus />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/huggies_gde-1.jpg" title="huggies turma da monica" open={() => this.showModal(<Huggies />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/sauza01.jpg" title="sauza tequila - social midia" open={() => this.showModal(<SauzaM />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco02.jpg" title="Bauducco - ações de sampling" open={() => this.showModal(<BauduccoS />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/aes01.jpg" title="AES eletropaulo - smart house" open={() => this.showModal(<AESEletropaulo />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Layout_Hotsite_Conceito_02.jpg" title="exto" open={() => this.showModal(<Exto />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-18-at-16.57.22.png" title="intimus evolution sampling" open={() => this.showModal(<IntimusS />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/serasa.jpg" title="serasa experian" open={() => this.showModal(<Serasa />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/skpf-1.jpg" title="schwarzkopf - social midia" open={() => this.showModal(<Schwarzkopf />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bbc01.jpg" title="bbc hd - social midia" open={() => this.showModal(<BBChd />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-18-at-16.28.51.png" title="Nickelodeon - social midia" open={() => this.showModal(<Nickledoen />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/veja01.jpg" title="Veja - ação em pdv" open={() => this.showModal(<VejaPDV />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/VH1-FACEBOOK.jpg" title="vh1 - social midia" open={() => this.showModal(<VH1Midia />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/wm02.jpg" title="walmart - ações de degustação e sampling" open={() => this.showModal(<Degustacao />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-18-at-16.14.55.png" title="Walmart.com - divulgação do site" open={() => this.showModal(<WalmartM />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-18-at-16.03.03.png" title="farmacia walmart - ações de verão" open={() => this.showModal(<Verao />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-18-at-15.30.17.png" title="walmart - inaugiração dos postos walmart em todo brasil" open={() => this.showModal(<Posto />)} />
                        <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/dest-festa.jpg" title="Walmart - festa de fim de ano" open={() => this.showModal(<Confraternizacao />)} />
                    </div>
                </div>
            </Layout >
        )
    }
}