import React from 'react'
import { CaseBase } from '../caseBase'

export const VedettMidia = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="VedettMidia"
        client='Interfood'
        year='2018'
        description={<p>Fizemos todo o planejamento estratégico e posicionamento de marca de Casal Garcia no Brasil. Também somos os responsáveis pela gestão e criação de conteúdos para redes sociais, além de promoções e ativações de marca, compra de mídia e monitoramento de publicações.</p>}
        header="https://portfolio.duee.com.br/wp-content/uploads/2018/09/Header.gif"
    >
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/1000x1300_FB_VEDETT-2-1.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/1000x1300_FB_VEDETT.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/1000x1300_FB_VEDETT-3.png" alt="" />
        </div>

        <div className="col-xs-12 col-md-6 col-sm-12">
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/2_IN_H_1080x566_VEDETT_V1.mp4" />
        </div>
        <div className="col-xs-12 col-md-3 col-sm-6">
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/2_POST-VEDETT-IG_V2.mp4" />

        </div>
        <div className="col-xs-12 col-md-3 col-sm-6">
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/4_POST-VEDETT_V1.mp4" />
        </div>

        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/vedett-POST-VEDETT-1080X1080.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/post-VEDETT-800x800.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/1080x1080_FBIG_VEDETT-copy.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/2.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/3_VEDETT_V1.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/Post-VEDETT-1080X1440px.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/3_1080x1350_Vedett_V1.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/3.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/1.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/post_gelo.png" alt="" />
            <a href="https://www.facebook.com/vedettbrasil/"><i className="fab fa-facebook-square" style={{ fontSize: "3em", color: "#4c6ef5" }} /></a>
            <a href="https://www.instagram.com/vedett_brasil/"><i className="fab fa-instagram-square" style={{ fontSize: "3em", color: "#4c6ef5" }} /></a>
        </div>
    </CaseBase>

}