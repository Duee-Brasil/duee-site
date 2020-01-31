import React, { Component } from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import './portfolio.scss'
import Case from '../../components/cases/cases'

export default class Portfolio extends Component {


render() {
    return (
        <Layout>
            <SEO title="Portfólio" />
            {/* <!-- First --> */}
            <div className="row ib-main-wrapper" id="portfolio">
                {/* <div className="col-xs-12" id="banner">
                <video src={banner} autoplay="true" muted="true" loop />
            </div> */}
                <div className="content row col-xs-12 ib-main">
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/capa_img_site_starbucks.jpg" link="https://portfolio.duee.com.br/project/panetone-starbucks/" title="Panetone Starbucks" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/capinha-casal.png" link="https://portfolio.duee.com.br/project/geladeiras-casal-garcia/" title="Geladeiras Casal Garcia" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/oito-capinha.png" link="https://portfolio.duee.com.br/project/desenvolvimento-site-oito/" title="Desenvolvimento Site Oito" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Banner-4.png" link="https://portfolio.duee.com.br/project/vitrine-trapiche/" title="Vitrine Trapiche" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Banner-3.png" link="https://portfolio.duee.com.br/project/vai-de-vedett/" title="vai de vedett" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Banner-1.jpg" link="https://portfolio.duee.com.br/project/starbucks-dia-dos-namorados/" title="Starbucks dia dos namorados" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Banner-1.png" link="https://portfolio.duee.com.br/project/made-no-lolla/" title="Made no lolla" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2019/06/1-banner.png" link="https://portfolio.duee.com.br/project/lancamento-blue-moon/" title="Lançamento Blue moon" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Banner.png" link="https://portfolio.duee.com.br/project/faxe-dinner-in-the-sky/" title="Faxe + Dinner in the sky" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Banner.jpg" link="https://portfolio.duee.com.br/project/ubus-digital/" title="Ubus Digital" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2019/03/Screen-Shot-2019-03-01-at-19.01.04.png" link="https://portfolio.duee.com.br/project/casal-garcia-campanha-de-midia/" title="Casal Garcia - campanha de mídia" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2019/03/Untitled-1.png" link="https://portfolio.duee.com.br/project/made-in-brazil-social-media/" title="MAde in brazil - social mídia" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2019/03/QUADRO-FAXE-pack-art-1.png" link="https://portfolio.duee.com.br/project/faxe-beer-kit-pdv/" title="Faxe - kit pdv" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2019/03/KV-CHANDON-MOOD_V2.png" link="https://portfolio.duee.com.br/project/chandon-realidade-aumentada/" title="Chandon - realidade aumentada" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2019/03/post-starbucks-butter-800x800-x2_02.png" link="https://portfolio.duee.com.br/project/starbucks-butter-frappuccino/" title="Starbucks - butter frappuccino" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Final_FAXE_MO.png" link="https://portfolio.duee.com.br/project/faxemakingof/" title="FAxe - making of happy hour viking" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2018/09/POST-CASALGARCIA-allpacks-800x800_V2.png" link="https://portfolio.duee.com.br/project/casal-garcia/" title="Casal Garcia - Social midia" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2018/09/Faxe_capa.png" link="https://portfolio.duee.com.br/project/faxe/" title="Faxe - social midia" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2018/09/3_1080x1350_Vedett_V1.png" link="https://portfolio.duee.com.br/project/vedett/" title="Vedett - social midia" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2018/09/Banner_via_news1080x675.png" link="https://portfolio.duee.com.br/project/starbucks-draft/" title="Starbucks draft" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2018/01/cover_suite.jpg" link="https://portfolio.duee.com.br/project/suite-49-travels-social-media-2/" title="suite 49 travels - social midia" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2018/01/trova01.jpg" link="https://portfolio.duee.com.br/project/website-trova-travertino/" title="Trova brasil - site" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2017/07/KV_ESTAGIO.jpg" link="https://portfolio.duee.com.br/project/respeita-o-estagiario-instituto-via-de-acesso-2/" title="REspeira o estágiario - instituto via de acesso" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2017/07/4c128dec-7acb-445e-b279-ffacbfb5d663.jpeg" link="https://portfolio.duee.com.br/project/starbucks-roadshow-winter/" title="Starbucks roadshow winter" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2017/07/site_via01.jpg" link="https://portfolio.duee.com.br/project/plataforma-digital-instituto-via-de-acesso/" title="Plataforma digital - instituto via de acesso" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2017/05/Captura-de-Tela-2017-05-26-às-16.08.52.jpg" link="https://portfolio.duee.com.br/project/website-codorniu/" title="Site Codorníu" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2017/05/cover_Sene.jpg" link="https://portfolio.duee.com.br/project/website-sene/" title="Site Sene" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2017/03/logo_Starbucks.jpg" link="https://portfolio.duee.com.br/project/starbucks-jogo-das-estrelas-2017/" title="Starbucks - Jogo das estrelas 2017" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2017/03/IMG_4273.jpg" link="https://portfolio.duee.com.br/project/1007/" title="Vedett - vedett on the road" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2017/03/31ab6449958441.58c2f4e5c9e0e.jpg" link="https://portfolio.duee.com.br/project/codorniu-web-serie-drinks-anatomy/" title="codorníu - web serie drink`s anatomy" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/11/Petz_Img_Cover.jpg" link="https://portfolio.duee.com.br/project/petz-tv-petz-2/" title="Petz - tv petz" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/11/img_3921.jpg" link="https://portfolio.duee.com.br/project/digital-day-fca/" title="FCA - digital day" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/11/KV_TNT_V2.jpg" link="https://portfolio.duee.com.br/project/sua-cara-sua-luta-tnt-no-spfw/" title="TNT no SPFW - sua cara sua luta" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/07/cover_pg_adv-copy.jpg" link="https://portfolio.duee.com.br/project/pg-advogados-social-media/" title="PG advogados - social midia" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/06/IMG_1495.jpg" link="https://portfolio.duee.com.br/project/codorniu-web-serie-somos-codorniu/" title="codorníu - web serie somos codorníu" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/06/03-1.jpg" link="https://portfolio.duee.com.br/project/hersheys-acao-de-sampling/" title="hershey`s - ação de sampling" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/06/01.jpg" link="https://portfolio.duee.com.br/project/bbc-espacos-cbeebieslivraria-cultura/" title="BBc - espaços cbeebies/livraria cultura" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/06/IMG_2097.jpg" link="https://portfolio.duee.com.br/project/lancamento-do-mobile-view-abril/" title="Abril - lançamento do mobile view abril" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco1_avatar.jpg" link="https://portfolio.duee.com.br/project/bauducco-teatro-infantil-e-oficina-roll/" title="Bauducco - teatro infantil e oficina roll" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-26-at-19.31.11.png" link="https://portfolio.duee.com.br/project/revista-veja-rio-450-anos/" title="Revista veja - rio 450 anos" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Consul1.jpg" link="https://portfolio.duee.com.br/project/showroom-consul/" title="Consul - Showroom" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/cover_bombardier.jpg" link="https://portfolio.duee.com.br/project/bombardier-social-media/" title="Bombardier - social midia" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/codorniu_avatar.jpg" link="https://portfolio.duee.com.br/project/cointreau-social-media/" title="Cointreau - social midia" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/vedett01-1.jpg" link="https://portfolio.duee.com.br/project/vedett-social-media/" title="Vedett - social midia" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-19-at-16.19.23.png" link="https://portfolio.duee.com.br/project/grupo-fit-social-media/" title="Grupo fit - social midia" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/fox1-1.jpg" link="https://portfolio.duee.com.br/project/fox-ccxp-2014/" title="fox - ccxp 2014" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/norpal1-1.jpg" link="https://portfolio.duee.com.br/project/norpal-web/" title="Norpal - site" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/intel5.jpg" link="https://portfolio.duee.com.br/project/intel-racing-campanha-de-incentivo/" title="Intel racing - campanha de incentivo" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-19-at-15.24.40.png" link="https://portfolio.duee.com.br/project/clight-movimento-3x1/" title="Clight - movimento 3x1" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/DSC06251.jpg" link="https://portfolio.duee.com.br/project/ativacoes-walmart-jimmy-click-garfo-e-faca/" title="Ativações Walmart - Jimmy click, garfo e faca" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2014-03-25-at-19.39.52.png" link="https://portfolio.duee.com.br/project/crowshow-website/" title="Crowshow - site" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/mark-gatiss-bbc.jpg" link="https://portfolio.duee.com.br/project/evento-wild-brazil-mark-gatiss-bbc/" title="bbc - evento wild brazil/mark gatiss" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/CorridaWalmart2.jpg" link="https://portfolio.duee.com.br/project/corrida-walmart-2013/" title="Corrida Walmart 2013" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco01-2.jpg" link="https://portfolio.duee.com.br/project/ativacao-de-sao-joao-bauducco/" title="bauducco - ativação são joão" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Habro-Playskool-Banner-Poppin-Park-1.jpg" link="https://portfolio.duee.com.br/project/hotsite-playskool-hasbro/" title="Hasbro - Hotsite playskool" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/siteFinalV2.jpg" link="https://portfolio.duee.com.br/project/hotsite-littlelest-pet-shop-hasbro/" title="hasbro - hotsite littlelest pet shop" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/CASCOLA.jpg" link="https://portfolio.duee.com.br/project/cascola-digital/" title="Cascola digital" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco01-1.jpg" link="https://portfolio.duee.com.br/project/bauducco-social-media/" title="bauducco - social midia" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/PILAO.jpg" link="https://portfolio.duee.com.br/project/acao-de-checkout-walmart-cafe-pilao/" title="café pilão - ação de checkout walmart" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/calminex01.jpg" link="https://portfolio.duee.com.br/project/estande-calminex/" title="estande calminex" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/HALLS.jpg" link="https://portfolio.duee.com.br/project/acoes-de-sampling-mondelez/" title="mondelez - ações de sampling" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/NET-BBC.jpg" link="https://portfolio.duee.com.br/project/convencao-net-bbc-hd/" title="bbc hd - convenção net" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/sentirbem.jpg" link="https://portfolio.duee.com.br/project/acoes-de-sampling-sentir-bem/" title="Sentir bem - ações de sampling" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/work_gde.jpg" link="https://portfolio.duee.com.br/project/farmacias-walmart-acoes-de-sampling/" title="farmacias walmart - ações de sampling" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/kimberly-job241.png" link="https://portfolio.duee.com.br/project/flashmob-intimus/" title="Flashmob intimus" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/huggies_gde-1.jpg" link="https://portfolio.duee.com.br/project/huggies-turma-da-monica/" title="huggies turma da monica" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/sauza01.jpg" link="https://portfolio.duee.com.br/project/sauza-tequila-social-media/" title="sauza tequila - social midia" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bauducco02.jpg" link="https://portfolio.duee.com.br/project/acoes-de-sampling-bauducco/" title="Bauducco - ações de sampling" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/aes01.jpg" link="https://portfolio.duee.com.br/project/smart-house-aes-eletropaulo/" title="AES eletropaulo - smart house" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Layout_Hotsite_Conceito_02.jpg" link="https://portfolio.duee.com.br/project/condominio-club-life-exto/" title="exto" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-18-at-16.57.22.png" link="https://portfolio.duee.com.br/project/intimus-evolution-sampling/" title="intimus evolution sampling" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/serasa.jpg" link="https://portfolio.duee.com.br/project/serasa-experian/" title="serasa experian" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/skpf-1.jpg" link="https://portfolio.duee.com.br/project/schwarzkopf-social-media/" title="schwarzkopf - social midia" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bbc01.jpg" link="https://portfolio.duee.com.br/project/bbc-hd-social-media/" title="bbc hd - social midia" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-18-at-16.28.51.png" link="https://portfolio.duee.com.br/project/nickelodeon/" title="Nickelodeon - social midia" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/veja01.jpg" link="https://portfolio.duee.com.br/project/veja-acao-em-pdv/" title="Veja - ação em pdv" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/VH1-FACEBOOK.jpg" link="https://portfolio.duee.com.br/project/vh1-social-media/" title="vh1 - social midia" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/wm02.jpg" link="https://portfolio.duee.com.br/project/walmart-acoes-de-degustacao-e-sampling/" title="walmart - ações de degustação e sampling" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-18-at-16.14.55.png" link="https://portfolio.duee.com.br/project/divulgacao-do-site-walmart-com/" title="Walmart.com - divulgação do site" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-18-at-16.03.03.png" link="https://portfolio.duee.com.br/project/acoes-de-verao-da-farmacia-walmart/" title="farmacia walmart - ações de verão" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Screen-Shot-2016-02-18-at-15.30.17.png" link="https://portfolio.duee.com.br/project/inauguracoes-de-postos-walmart-em-todo-brasil/" title="walmart - inaugiração dos postos walmart em todo brasil" />
                    <Case img="https://portfolio.duee.com.br/wp-content/uploads/2016/02/dest-festa.jpg" link="https://portfolio.duee.com.br/project/festa-de-fim-de-ano-walmart-brasil/" title="Walmart - festa de fim de ano" />
                </div>
            </div>
        </Layout >
    )
}
}