import React from 'react'
import { CaseBase } from '../caseBase'

export const FitMidia = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="FitMidia"
        client='Grupo Fit'
        year='2014/2015/2016'
        description={<p>Conteúdo para as redes sociais dos estabelecimentos do Grupo Fit: Bar Aurora, St. George’s Pub, She Rocks e O Pasquim.</p>}
        header={<h2 style={{ color: 'black' }}>GRUPO FIT – SOCIAL MEDIA</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/posts-aurora.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/posts-pasquim.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/posts-st-george.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/posts-she-rocks.jpg" alt="" />
        </div>
    </CaseBase>

}