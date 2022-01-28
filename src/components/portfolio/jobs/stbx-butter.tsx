import React from 'react'
import { CaseBase } from '../caseBase'

export const Butter = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Butter"
        client='Starbucks'
        year='2018'
        description={<>
            <p>Criamos ações de marketing e comunicação nas redes sociais para divulgar o lançamento do Starbucks Butter Frappuccino. Assim como o Frappuccino, toda a comunicação foi planejada com base na série de filmes do Harry Potter.</p>
        </>}
        header="https://portfolio.duee.com.br/wp-content/uploads/2019/03/HEADER_1.png"
    >
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/V2-Comp-1-teaser-Starbucks-butterfrap.gif" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/Stories-mock.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/Board-Starbucks-butterfrapp-v2.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/post-starbucks-butter-800x800-x2_01.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/11-12_post-starbucks-butter-800x800-x2.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/post-gif-1080x1080.gif" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/13.12-stories-post-starbucks-1920x1080.gif" alt="" />
        </div>
    </CaseBase>

}