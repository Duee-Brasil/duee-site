import React from 'react'
import { CaseBase } from '../caseBase'

export const FaxeMidia = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="FaxeMidia"
        client='Faxe'
        year='2018'
        description={<>
            <p>Fizemos todo o planejamento estratégico e posicionamento de marca de Casal Garcia no Brasil. Também somos os responsáveis pela gestão e criação de conteúdos para redes sociais, além de promoções e ativações de marca, compra de mídia e monitoramento de publicações.</p>
        </>}
    >
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/Casalgarcia-800x800.png" alt="" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/2_FB_POST-CASALGARCIA-800x800_V1.mp4" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/Casalgarcia-800x800-2.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/1080x1080_CG_FB-v2.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/DOURO%E2%80%93POST-CASALGARCIA-800x800.mp4" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/POST-CASALGARCIA-allpacks-800x800_V2.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Posts-BLUE-MOON-7.jpg" alt="" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/POST-CASALGARCIA-ROSE-800x800_V2.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/post%E2%80%93cg-1080x1080.mp4" />

        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/1_BRANCO_800x800_V1.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/3_FB_1080x1080_V1.png" alt="" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/2_POST-CASALGARCIA-SWEET-800x800_V1.mp4" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/POST-CASALGARCIA-800x800.png" alt="" />
            <a href="https://www.facebook.com/casalgarciabr/"><i className="fab fa-facebook-square" style={{ color: "#4c6ef5" }} /></a>
        </div>
    </CaseBase>

}