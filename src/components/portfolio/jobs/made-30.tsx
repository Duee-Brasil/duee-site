import React from 'react'
import { CaseBase } from '../caseBase'

export const Made30anos = () => {
    return <CaseBase
        backgroundColor='black'
        name="Made30anos"
        client='Made In Brazil'
        year='2020'
        description={<>
            <p>A Made In Brazil fez 30 anos e a Duee criou uma identidade incrível para a campanha de aniversário da marca.</p>
            <p>A campanha foi inspirada nas conexões que a música promove e no fio do destino, uma lenda antiga que serviu de base para o key visual e o storytelling.</p>
            <p>Foram produzidos materiais para o PDV, posts para redes sociais e um vídeo veiculado na internet, com o tema de conexão.</p>
        </>}
        header="https://portfolio.duee.com.br/wp-content/uploads/2020/11/2.png"
    >
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/11/5.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/11/4.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/11/1.png" alt="" />
        </div>
        <div className="col-xs-12">
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2020/11/MADE-IN-BRAZIL-CORTE-08-09.11.2020-422HQ1-convert-video-online.com_.mp4" />
        </div>
    </CaseBase>

}