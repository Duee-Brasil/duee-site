import React from 'react'
import { CaseBase } from '../caseBase'

export const Nickledoen = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Nickledoen"
        client='VIACOM BRASIL'
        year='2011/2012'
        description={<p>Projeto especial de interação com os fãs do canal. Criação de conteúdo e interação direta com os usuários, além de alimentar o principal blog do canal com notícias e novidades das principais celebridades da Nick.</p>}
        header={<h2 style={{ color: 'black' }}>NICKELODEON – SOCIAL MEDIA</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/nick01.jpg" alt="" />
        </div>
    </CaseBase>

}