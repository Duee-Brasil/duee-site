import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import './portfolio.scss'
import Case from '../../components/cases/cases'

import banner from '../../images/portfolio/Banner Portfolio site.mp4'

import clt1 from '../../images/portfolio/clients/Prancheta 1.png'
import clt2 from '../../images/portfolio/clients/Prancheta 1 cópia.png'
import clt3 from '../../images/portfolio/clients/Prancheta 1 cópia 2.png'
import clt4 from '../../images/portfolio/clients/Prancheta 1 cópia 3.png'
import clt5 from '../../images/portfolio/clients/Prancheta 1 cópia 4.png'
import clt6 from '../../images/portfolio/clients/Prancheta 1 cópia 5.png'
import clt7 from '../../images/portfolio/clients/Prancheta 1 cópia 6.png'
import clt8 from '../../images/portfolio/clients/Prancheta 1 cópia 7.png'
import clt9 from '../../images/portfolio/clients/Prancheta 1 cópia 8.png'
import clt10 from '../../images/portfolio/clients/Prancheta 1 cópia 9.png'
import clt11 from '../../images/portfolio/clients/Prancheta 1 cópia 10.png'
import clt12 from '../../images/portfolio/clients/Prancheta 1 cópia 11.png'
import clt13 from '../../images/portfolio/clients/Prancheta 1 cópia 12.png'
import clt14 from '../../images/portfolio/clients/Prancheta 1 cópia 13.png'
import clt15 from '../../images/portfolio/clients/Prancheta 1 cópia 14.png'
import clt16 from '../../images/portfolio/clients/Prancheta 1 cópia 15.png'
import clt17 from '../../images/portfolio/clients/Prancheta 1 cópia 16.png'
import clt18 from '../../images/portfolio/clients/Prancheta 1 cópia 17.png'
import clt19 from '../../images/portfolio/clients/Prancheta 1 cópia 18.png'
import clt20 from '../../images/portfolio/clients/Prancheta 1 cópia 19.png'
import clt21 from '../../images/portfolio/clients/Prancheta 1 cópia 20.png'
import clt22 from '../../images/portfolio/clients/Prancheta 1 cópia 21.png'
import clt23 from '../../images/portfolio/clients/Prancheta 1 cópia 22.png'
import clt24 from '../../images/portfolio/clients/Prancheta 1 cópia 23.png'
import clt25 from '../../images/portfolio/clients/Prancheta 1 cópia 24.png'
import clt26 from '../../images/portfolio/clients/Prancheta 1 cópia 25.png'
import clt27 from '../../images/portfolio/clients/Prancheta 1 cópia 26.png'
import clt28 from '../../images/portfolio/clients/Prancheta 1 cópia 27.png'
import clt29 from '../../images/portfolio/clients/Prancheta 1 cópia 28.png'
import clt30 from '../../images/portfolio/clients/Prancheta 1 cópia 29.png'
import clt31 from '../../images/portfolio/clients/Prancheta 1 cópia 30.png'
import clt32 from '../../images/portfolio/clients/Prancheta 1 cópia 31.png'
import clt33 from '../../images/portfolio/clients/Prancheta 1 cópia 32.png'
import clt34 from '../../images/portfolio/clients/Prancheta 1 cópia 33.png'
import clt35 from '../../images/portfolio/clients/Prancheta 1 cópia 34.png'
import clt36 from '../../images/portfolio/clients/Prancheta 1 cópia 35.png'


import Rappi1 from '../../images/starbucks/Posts/26_03.png'

const Portfolio = () => (
    <Layout>
        <SEO title="Starbucks" />
        {/* <!-- First --> */}
        <div className="row" id="portfolio">
            <div className="col-xs-12" id="banner">
                <video src={banner} autoplay="true" muted="true" loop />
            </div>
            <div className="row col-xs-12 clients">
                <h2 className="col-xs-12 title">Clientes</h2>
                <img src={clt1} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt2} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt3} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt4} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt5} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt6} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt7} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt8} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt9} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt10} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt11} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt12} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt12} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt13} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt14} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt15} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt16} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt17} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt18} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt19} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt20} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt21} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt22} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt23} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt24} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt25} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt26} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt27} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt28} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt29} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt30} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt31} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt32} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt33} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt34} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt35} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />
                <img src={clt36} alt="clientes" className="col-xs-6 col-sm-4 col-md-3 col-lg-2" />

            </div>
            <div className="content row col-xs-12">

                <h2 className="title col-xs-12">Cases</h2>
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
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
                <Case img="https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png" link="https://portfolio.duee.com.br/project/black-friday-made/" title="Black Friday Made" />
            </div>
        </div>
    </Layout >
)

export default Portfolio