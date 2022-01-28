import React from 'react'
import { CaseBase } from '../caseBase'

export const BMLanc = () => {
    return <CaseBase
        backgroundColor='#00143a'
        name="BMLanc"
        client='Blue Moon'
        year='2019'
        description={<p>A Blue Moon é a cerveja especial número um dos Estados Unidos e chegou de forma oficial no Brasil recentemente. Nós criamos todo o planejamento estratégico e posicionamento de marca, fizemos a gestão e a criação de conteúdos para as redes sociais e o monitoramento de mídia.</p>}
        header="https://portfolio.duee.com.br/wp-content/uploads/2019/06/1-banner.png"
    >
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Post-Blue-Moon-1.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Post-Blue-Moon.gif" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Post-Blue-Moon-3.png" alt="" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/post-7.mp4" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/post2-1.gif" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Posts-BLUE-MOON-7.jpg" alt="" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/BlueMoonBumper_Boomerang.mp4" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/post-4-storie.gif" alt="" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Posts-quinzenais-Blue-Moon-Semana-2-5.mp4" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Posts-BLUE-MOON-3.jpg" alt="" />
        </div>
    </CaseBase>

}