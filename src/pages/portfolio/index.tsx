import React, { FC, ReactElement, useState } from "react"

import Layout from "@components/layout/layout"
import { CaseCard as Case } from "@components/portfolio"

import Panetone from "./pages/sbks-panetone"
import BFMade from "./pages/bf-made"
import Geladeiras from "./pages/geladeiras"
import DevOito from "./pages/dev-oito"
import Trapiche from "./pages/trapiche"
import VaiVedett from "./pages/vai-vedett"
import Namorados from "./pages/sbks-namorados"
import MadeLolla from "./pages/made-lolla"
import BMLanc from "./pages/bm-lanc"
import Dinner from "./pages/dinner"
import Ubus from "./pages/ubus"
import CasalMidia from "./pages/casal-midia"
import FaxePdv from "./pages/faxe-pdv"
import Chandon from "./pages/chandon"
import Butter from "./pages/sbks-butter"
import HappyHour from "./pages/makingof"
import Casal from "./pages/casal"
import VedettMidia from "./pages/vedett-midia"
import Draft from "./pages/sbks-draft"
import Suite from "./pages/suite49"
import Trova from "./pages/trova"
import Estagiario from "./pages/estagiario"
import Roadshow from "./pages/sbks-roadshow"
import Plataforma from "./pages/plataforma-via"
import CodorniuSite from "./pages/cordorniu-site"
// import Sene from './pages/sene'
import Jogo from "./pages/sbkd-jogo"
import Urso from "./pages/vedett-urso"
import Anatomy from "./pages/codorniu-anatomy"
import Petz from "./pages/petz"
import FCA from "./pages/fca"
import TNT from "./pages/tnt"
import LivingHNK from "./pages/livinghnk"
import PGadv from "./pages/pgadv"
import Serie from "./pages/codorniu-serie"
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
import Intel from "./pages/intel"
import Clight from "./pages/clight"
import Jimmy from "./pages/walmart-jimmy"
import Crownshow from "./pages/crowshow"
import Mark from "./pages/bbc-mark"
import Corrida from "./pages/walmart-corrida"
import SaoJoao from "./pages/bauducco-saojoao"
import Playskool from "./pages/hasbro-playskool"
import PetShop from "./pages/hasbro-petshop"
import Cascola from "./pages/cascola"
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
import Farmacia from "./pages/walmart-farmacia"
import Posto from "./pages/walmart-posto"
import BauduccoM from "./pages/bauducco-midia"
import MadeM from "./pages/made-midia"
import Inovini from "./pages/inovini"
import Maille from "./pages/maille"
import BML2020 from "./pages/bm-lanc2020"
import Giglio from "./pages/giglio"
import Natal2020 from "./pages/sbks-natal2020"
import Made30anos from "./pages/made-30"
import Kalassi from "./pages/kalassi"
import StarbucksTapume from "./pages/starbucks-tapume"
import CasalGarciaSorteio from "./pages/casalGarciaSorteio"
import MailleMaes from "./pages/maille-mae"
import KalassiFirtsBite from "./pages/kalassi-firts-bite"
import Azzurra from "./pages/azzurra"
import KalassiVeggie from "./pages/kalassi-veggie"
import Banica from "./pages/casalGarciaBanica"
import MaillePai from "./pages/maille-pais"
import { JBL } from "@components/portfolio/jobs/casalGarciaJBL"
import StarbucksWinter from "./pages/sbks-winter"
import Yelloween from './pages/yelloween';
import styled from "styled-components"

import { JobsList } from "@components/portfolio"

const Content = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  padding: 1rem;
  margin: 0;
  margin-top: 70px;
  align-items: flex-start;
  justify-content: center;
`

const ModalContent = styled.div`
  border-top      : 1px solid #333;
  transition      : all ease 1s;
  background-color: black;
  position: fixed;
  top: 70px;
  width: 97%;
  height: calc(94% - 70px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: auto;
  transition: all 1s ease-in-out;
`

const ModalTopBar = styled.div`
  text-align: right;
  width     : 100%;
  padding  : 0.5rem 3rem;
  font-size: 1.5em;
`

const BackButton = styled.div`
  position: fixed;
  bottom: 1%;
  right: 120px;
  padding: 0.5rem 2rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 0.5em 0.5em 0 0;
  cursor: pointer;
`

const JobContent = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`

const LoadingContainer = styled.div`
  width      : 100%;
  height     : 100px;
  line-height: 100px;
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  span {
    margin : 0 5px;
    color  : #fff;

    @keyframes blur-text {
      0% {
          filter: blur(0px);
      }

      100% {
          filter: blur(4px);
      }
    }

    &:nth-child(#1) {
        animation   : blur-text 1.5s (calc(0 / 5)s) infinite linear alternate;
    }

    &:nth-child(#2) {
        animation   : blur-text 1.5s (calc(1 / 5)s) infinite linear alternate;
    }

    &:nth-child(#3) {
        animation   : blur-text 1.5s (calc(2 / 5)s) infinite linear alternate;
    }

    /* @for $i from 0 through 6 {
        &:nth-child(#{$i + 1}) {
            // filter   : blur(0px);
            animation   : blur-text 1.5s (calc($i / 5)s) infinite linear alternate;
        }
    } */
  }
`

const Portfolio = () => {

  const [caseSelected, setCaseSelected] = useState<ReactElement | string | null>(null)

  const closeModal = () => setCaseSelected(null)

  const CaseModal: FC<{ job: ReactElement | string | null }> = ({ job }) => {

    if (!job) {
      return null
    }

    return <ModalContent>

      <ModalTopBar onClick={() => closeModal()}>
        <i className="fas fa-times" />
      </ModalTopBar>

      {/* <LoadingContainer>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </LoadingContainer> */}

      <JobContent>
        {typeof job === "string" ?
          <iframe src={job} id="htmlcontent" />
          : job}
      </JobContent>

      <BackButton onClick={() => closeModal()}>Voltar</BackButton>

    </ModalContent>
  }

  return <Layout title="Portfólio">
    <Content>
      {JobsList.map((job) => <Case
        img={job.thumbnail}
        title={job.title}
        open={() => setCaseSelected(job.job)}
      />)}


      {/* <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2022/01/tumb.png"
        title="Yelloween da Veuve Clicquot"
        open={() => setCaseSelected(<Yelloween />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2021/08/tumb-2.png"
        title="Concurso Cultural Dia da Alegria/Casal Garcia"
        open={() => setCaseSelected(<JBL />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2021/08/tumb-1.png"
        title="Maille Dia dos Pais"
        open={() => setCaseSelected(<MaillePai />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2021/08/tumb.png"
        title="Banila Co/Casal Garcia (Co-Branding)"
        open={() => setCaseSelected(<Banica />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2021/09/cover.png"
        title="Starbucks Winter"
        open={() => setCaseSelected(<StarbucksWinter />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2021/06/kalassi-veggie.png"
        title="Kalassi Veggie"
        open={() => setCaseSelected(<KalassiVeggie />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2021/06/azzurra.png"
        title="Azzurra Gin"
        open={() => setCaseSelected(<Azzurra />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2021/05/kalassi.png"
        title="First Bite Kalassi"
        open={() => setCaseSelected(<KalassiFirtsBite />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2021/05/maille.png"
        title="Dia das Mães com Maille"
        open={() => setCaseSelected(<MailleMaes />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2021/03/cover.png"
        title="Concurso Cultural Casal Garcia"
        open={() => setCaseSelected(<CasalGarciaSorteio />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2020/11/capa.png"
        title="Starbucks Natal 2020"
        open={() => setCaseSelected(<Natal2020 />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2020/11/3.png"
        title="Made in Brazil 30 anos"
        open={() => setCaseSelected(<Made30anos />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2020/10/kalassi.png"
        title="Kalassi"
        open={() => setCaseSelected(<Kalassi />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2020/10/capastarbucks.png"
        title="Tapume Starbucks"
        open={() => setCaseSelected(<StarbucksTapume />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2020/06/capa.jpg"
        title="Maille"
        open={() => setCaseSelected(<Maille />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-blue-moon-1_04.png"
        title="Blue Moon"
        open={() => setCaseSelected(<BML2020 />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2020/03/Untitled-2.png"
        title="Inovini"
        open={() => setCaseSelected(<Inovini />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2020/06/Giglio_linkdln_PT.png"
        title="Giglio Neto"
        open={() => setCaseSelected(<Giglio />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/capa_img_site_starbucks.jpg"
        title="Panetone Starbucks"
        open={() => setCaseSelected(<Panetone />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png"
        title="Black Friday Made"
        open={() => setCaseSelected(<BFMade />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/capinha-casal.png"
        title="Geladeiras Casal Garcia"
        open={() => setCaseSelected(<Geladeiras />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/oito-capinha.png"
        title="Desenvolvimento Site Oito"
        open={() => setCaseSelected(<DevOito />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Banner-4.png"
        title="Vitrine Trapiche"
        open={() => setCaseSelected(<Trapiche />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Banner-3.png"
        title="vai de vedett"
        open={() => setCaseSelected(<VaiVedett />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Banner-1.jpg"
        title="Starbucks dia dos namorados"
        open={() => setCaseSelected(<Namorados />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Banner-1.png"
        title="Made no lolla"
        open={() => setCaseSelected(<MadeLolla />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2019/06/1-banner.png"
        title="Lançamento Blue moon"
        open={() => setCaseSelected(<BMLanc />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Banner.png"
        title="Faxe + Dinner in the sky"
        open={() => setCaseSelected(<Dinner />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Banner.jpg"
        title="Ubus Digital"
        open={() => setCaseSelected(<Ubus />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2019/03/Screen-Shot-2019-03-01-at-19.01.04.png"
        title="Casal Garcia - campanha de mídia"
        open={() => setCaseSelected(<CasalMidia />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2019/03/Untitled-1.png"
        title="MAde in brazil - social mídia"
        open={() => setCaseSelected(<MadeM />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2019/03/QUADRO-FAXE-pack-art-1.png"
        title="Faxe - kit pdv"
        open={() => setCaseSelected(<FaxePdv />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2019/03/KV-CHANDON-MOOD_V2.png"
        title="Chandon - realidade aumentada"
        open={() => setCaseSelected(<Chandon />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2019/03/post-starbucks-butter-800x800-x2_02.png"
        title="Starbucks - butter frappuccino"
        open={() => setCaseSelected(<Butter />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Final_FAXE_MO.png"
        title="FAxe - making of happy hour viking"
        open={() => setCaseSelected(<HappyHour />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2018/09/POST-CASALGARCIA-allpacks-800x800_V2.png"
        title="Casal Garcia - Social midia"
        open={() => setCaseSelected(<Casal />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2018/09/Faxe_capa.png"
        title="Faxe - social midia"
        open={() =>
          setCaseSelected("https://portfolio.duee.com.br/project/faxe/")
        }
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2018/09/3_1080x1350_Vedett_V1.png"
        title="Vedett - social midia"
        open={() => setCaseSelected(<VedettMidia />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2018/09/Banner_via_news1080x675.png"
        title="Starbucks draft"
        open={() => setCaseSelected(<Draft />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2018/01/cover_suite.jpg"
        title="suite 49 travels - social midia"
        open={() => setCaseSelected(<Suite />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2018/01/trova01.jpg"
        title="Trova brasil - site"
        open={() => setCaseSelected(<Trova />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2017/07/KV_ESTAGIO.jpg"
        title="REspeira o estágiario - instituto via de acesso"
        open={() => setCaseSelected(<Estagiario />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2017/07/4c128dec-7acb-445e-b279-ffacbfb5d663.jpeg"
        title="Starbucks roadshow winter"
        open={() => setCaseSelected(<Roadshow />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2017/07/site_via01.jpg"
        title="Plataforma digital - instituto via de acesso"
        open={() => setCaseSelected(<Plataforma />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2017/05/Captura-de-Tela-2017-05-26-às-16.08.52.jpg"
        title="Site Codorníu"
        open={() => setCaseSelected(<CodorniuSite />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2017/03/logo_Starbucks.jpg"
        title="Starbucks - Jogo das estrelas 2017"
        open={() => setCaseSelected(<Jogo />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2017/03/IMG_4273.jpg"
        title="Vedett - vedett on the road"
        open={() => setCaseSelected(<Urso />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2017/03/31ab6449958441.58c2f4e5c9e0e.jpg"
        title="codorníu - web serie drink`s anatomy"
        open={() => setCaseSelected(<Anatomy />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/11/Petz_Img_Cover.jpg"
        title="Petz - tv petz"
        open={() => setCaseSelected(<Petz />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/11/img_3921.jpg"
        title="FCA - digital day"
        open={() => setCaseSelected(<FCA />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/11/KV_TNT_V2.jpg"
        title="TNT no SPFW - sua cara sua luta"
        open={() => setCaseSelected(<TNT />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/07/cover_living.jpg"
        title="Living HNK - social midia"
        open={() => setCaseSelected(<LivingHNK />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/07/cover_pg_adv-copy.jpg"
        title="PG advogados - social midia"
        open={() => setCaseSelected(<PGadv />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/06/IMG_1495.jpg"
        title="codorníu - web serie somos codorníu"
        open={() => setCaseSelected(<Serie />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/06/03-1.jpg"
        title="hershey`s - ação de sampling"
        open={() => setCaseSelected(<Hersheys />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/06/01.jpg"
        title="BBc - espaços cbeebies/livraria cultura"
        open={() => setCaseSelected(<Cbeebies />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/06/IMG_2097.jpg"
        title="Abril - lançamento do mobile view abril"
        open={() => setCaseSelected(<AbrilMobile />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco1_avatar.jpg"
        title="Bauducco - teatro infantil e oficina roll"
        open={() => setCaseSelected(<Roll />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-26-at-19.31.11.png"
        title="Revista veja - rio 450 anos"
        open={() => setCaseSelected(<Veja450 />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Consul1.jpg"
        title="Consul - Showroom"
        open={() => setCaseSelected(<Consul />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/cover_bombardier.jpg"
        title="Bombardier - social midia"
        open={() => setCaseSelected(<BombardierM />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/cointreau_avatar.jpg"
        title="Cointreau - social midia"
        open={() => setCaseSelected(<CointreauM />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/codorniu_avatar.jpg"
        title="Codorníu - social midia"
        open={() => setCaseSelected(<CodorniuM />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/vedett01-1.jpg"
        title="Vedett - social midia"
        open={() => setCaseSelected(<VedettM />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-19-at-16.19.23.png"
        title="Grupo fit - social midia"
        open={() => setCaseSelected(<FitMidia />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/fox1-1.jpg"
        title="fox - ccxp 2014"
        open={() => setCaseSelected(<FoxCcxp />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/norpal1-1.jpg"
        title="Norpal - site"
        open={() => setCaseSelected(<Norpal />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/intel5.jpg"
        title="Intel racing - campanha de incentivo"
        open={() => setCaseSelected(<Intel />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-19-at-15.24.40.png"
        title="Clight - movimento 3x1"
        open={() => setCaseSelected(<Clight />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/DSC06251.jpg"
        title="Ativações Walmart - Jimmy click, garfo e faca"
        open={() => setCaseSelected(<Jimmy />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2014-03-25-at-19.39.52.png"
        title="Crowshow - site"
        open={() => setCaseSelected(<Crownshow />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/mark-gatiss-bbc.jpg"
        title="bbc - evento wild brazil/mark gatiss"
        open={() => setCaseSelected(<Mark />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/CorridaWalmart2.jpg"
        title="Corrida Walmart 2013"
        open={() => setCaseSelected(<Corrida />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco01-2.jpg"
        title="bauducco - ativação são joão"
        open={() => setCaseSelected(<SaoJoao />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Habro-Playskool-Banner-Poppin-Park-1.jpg"
        title="Hasbro - Hotsite playskool"
        open={() => setCaseSelected(<Playskool />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/siteFinalV2.jpg"
        title="hasbro - hotsite littlelest pet shop"
        open={() => setCaseSelected(<PetShop />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/CASCOLA.jpg"
        title="Cascola digital"
        open={() => setCaseSelected(<Cascola />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco01-1.jpg"
        title="bauducco - social midia"
        open={() => setCaseSelected(<BauduccoM />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/PILAO.jpg"
        title="café pilão - ação de checkout walmart"
        open={() => setCaseSelected(<Pilao />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/calminex01.jpg"
        title="estande calminex"
        open={() => setCaseSelected(<Calminex />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/HALLS.jpg"
        title="mondelez - ações de sampling"
        open={() => setCaseSelected(<Mondelez />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/NET-BBC.jpg"
        title="bbc hd - convenção net"
        open={() => setCaseSelected(<BBCNet />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/sentirbem.jpg"
        title="Sentir bem - ações de sampling"
        open={() => setCaseSelected(<SentirBem />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/work_gde.jpg"
        title="farmacias walmart - ações de sampling"
        open={() => setCaseSelected(<Farmacia />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/kimberly-job241.png"
        title="Flashmob intimus"
        open={() => setCaseSelected(<Intimus />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/huggies_gde-1.jpg"
        title="huggies turma da monica"
        open={() => setCaseSelected(<Huggies />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/sauza01.jpg"
        title="sauza tequila - social midia"
        open={() => setCaseSelected(<SauzaM />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco02.jpg"
        title="Bauducco - ações de sampling"
        open={() => setCaseSelected(<BauduccoS />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/aes01.jpg"
        title="AES eletropaulo - smart house"
        open={() => setCaseSelected(<AESEletropaulo />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Layout_Hotsite_Conceito_02.jpg"
        title="exto"
        open={() => setCaseSelected(<Exto />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-18-at-16.57.22.png"
        title="intimus evolution sampling"
        open={() => setCaseSelected(<IntimusS />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/serasa.jpg"
        title="serasa experian"
        open={() => setCaseSelected(<Serasa />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/skpf-1.jpg"
        title="schwarzkopf - social midia"
        open={() => setCaseSelected(<Schwarzkopf />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bbc01.jpg"
        title="bbc hd - social midia"
        open={() => setCaseSelected(<BBChd />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-18-at-16.28.51.png"
        title="Nickelodeon - social midia"
        open={() => setCaseSelected(<Nickledoen />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/veja01.jpg"
        title="Veja - ação em pdv"
        open={() => setCaseSelected(<VejaPDV />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/VH1-FACEBOOK.jpg"
        title="vh1 - social midia"
        open={() => setCaseSelected(<VH1Midia />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/wm02.jpg"
        title="walmart - ações de degustação e sampling"
        open={() => setCaseSelected(<Degustacao />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-18-at-16.14.55.png"
        title="Walmart.com - divulgação do site"
        open={() => setCaseSelected(<WalmartM />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-18-at-16.03.03.png"
        title="farmacia walmart - ações de verão"
        open={() => setCaseSelected(<Verao />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-18-at-15.30.17.png"
        title="walmart - inaugiração dos postos walmart em todo brasil"
        open={() => setCaseSelected(<Posto />)}
      />
      <Case
        img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/dest-festa.jpg"
        title="Walmart - festa de fim de ano"
        open={() => setCaseSelected(<Confraternizacao />)}
      /> */}



    </Content>

    <CaseModal job={caseSelected} />
  </Layout>

}

export default Portfolio