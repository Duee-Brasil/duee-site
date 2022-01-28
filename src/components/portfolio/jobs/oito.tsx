import React from 'react'
import { CaseBase } from '../caseBase'

export const DevOito = () => {
    return <CaseBase
        backgroundColor='#65519e'
        name="DevOito"
        client='Oito App'
        year='2019'
        description={<>
            <p>A OITO é uma plataforma que permite que profissionais autônomos anunciem os seus trabalhos e adicionem as suas habilidades, para que clientes os encontrem quando precisarem desses serviços, tudo de forma gratuita.</p>
            <p>A Duee Brasil é responsável pelo desenvolvimento da plataforma, branding, comunicação e campanhas de mídia.</p>
        </>}
        header="https://portfolio.duee.com.br/wp-content/uploads/2020/01/banner-oito.png"
    >
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Oito_post_7.png" alt="" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Oito_post_3.mp4" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Oito_post_3.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Oito_post_2.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Oito_stories_2.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Oito_post_4.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Oito_post_1.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/POST_OITO_S3_8.png" alt="" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Oito_stories_1.mp4" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Oito_post_4-2.png" alt="" />
        </div>
        <div className="col-xs-12">
            <iframe id="vimeo" src="https://www.youtube.com/embed/XTUJJF9g1i4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    </CaseBase>

}