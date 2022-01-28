import React from 'react'
import { CaseBase } from '../caseBase'

export const Sorteio = () => {
    return <CaseBase
        backgroundColor='#f3732b'
        name="Sorteio"
        client='Casal Garcia'
        year='2020'
        description={<>
            <p>Com o intuito de espalhar o conceito de "alegria" de Casal Garcia, o concurso cultural teve como objetivo premiar os 10 seguidores mais criativos do Instagram da marca.
                Era necessário apenas postar um Reels com o tema "Alegria em Boa Companhia", deixar o perfil da conta aberta e utilizar a #AlegriaEmBoaCompanhia para concorrer.
                Os melhores conteúdos ganharam um kit verão contendo uma câmera Instax, duas boias de flamingo, adesivos personalizados e um vinho Casal Garcia.
                A Duee Brasil foi responsável pela ideia de criação, desenvolvimento e aplicação do concurso.</p>
        </>}
        header="https://portfolio.duee.com.br/wp-content/uploads/2021/03/header.png"
    >
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/premios.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/cover.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/kit-verao.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/kit-feed.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/premios-feed.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/participando.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/ultima.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/regras.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/03/summer.png" alt="" />
        </div>
    </CaseBase>

}