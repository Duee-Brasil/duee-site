import React from 'react'
import { CaseBase } from '../caseBase'

export const Plataforma = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Plataforma"
        client='Instituto Via de Acesso'
        year='2017'
        description={<p>Somos os responsáveis por colocar o Instituto na internet. Nossa equipe criou o novo site, um blog, os conteúdos para redes sociais (Facebook, Instagram, Linkedin), gerenciamento de conteúdos, monitoramento de publicações e compra de mídia.</p>}
        header={<h2 style={{ color: 'black' }}>PLATAFORMA DIGITAL – INSTITUTO VIA DE ACESSO</h2>}
    >
        <div className="col-xs-12">
            <video controls autoPlay={true} muted={true} loop src="https://duee.com.br/Site_2018/wp-content/uploads/2017/07/Apresentacao_Via.mp4" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/site_via01-1.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/via_acesso01.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/via_acesso02.jpg" alt="" />
        </div>
    </CaseBase>

}