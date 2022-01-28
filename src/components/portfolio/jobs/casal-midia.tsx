import React from 'react'
import { CaseBase } from '../caseBase'

export const CasalMidia = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="CasalMidia"
        client='Casal Garcia'
        year='2018/2019'
        description={<p>Planejamento estratégico de social media e posicionamento da marca. Campanha de Verão Casal Garcia,  realizada com foco nos meses de dezembro e janeiro e nas férias e no verão. Criamos a promoção, realizamos as ativações, a gestão de conteúdo, a compra de mídia e o monitoramento.</p>}
        header="https://portfolio.duee.com.br/wp-content/uploads/2019/03/HEADER_1-6.png"
    >
        <div className="col-xs-12">
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/CG-Versa%CC%83o-PT-01_00-HD-1080p.mov" />
        </div>
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/728x90_ESTATICO3.jpg" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/300x600_gif2.gif" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/300x250_gif4.gif" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/300x250_gif3.gif" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/300x250_gif1.gif" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/300x250_gif2.gif" alt="" />
        </div>
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/728x90_ESTATICO1.jpg" alt="" />
        </div>
    </CaseBase>

}