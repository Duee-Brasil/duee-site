import React from 'react'
import { CaseBase } from '../caseBase'

export const Dinner = () => {
    return <CaseBase
        backgroundColor='#122f41'
        name="Dinner"
        client='Faxe'
        year='2019'
        description={<>
            <p>O Dinner in the Sky é um evento que coloca os participantes para provarem cardápios de dar água na boca em uma estrutura suspensa a mais de 50 metros de altura! E o melhor: eles puderam aproveitar as refeições acompanhados de muita Faxe, a cerveja viking! Nós produzimos os conteúdos digitais, com posts e stories, além de vídeos exclusivos para diversas plataformas.</p>
        </>}
        header="https://portfolio.duee.com.br/wp-content/uploads/2019/06/HEADER_1-2.png"
    >
        <div className="col-xs-12 col-md-4 col-sm-6">
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/2_DINNER_V1.mp4" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Faxe-109.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Faxe-305.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Faxe-224.jpg" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Faxe-37.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Faxe-286.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Faxe-220.jpg" alt="" />
        </div>
    </CaseBase>

}