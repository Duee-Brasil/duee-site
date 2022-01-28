import React from 'react'
import { CaseBase } from '../caseBase'

export const BBChd = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="BBChd"
        client='BBC'
        year='2012/2014'
        description={<p>Conteúdo da página oficial no Facebook e perfil no Twitter com notícias e a programação do canal. Criação de conteúdo focado na programação da BBC HD Brasil, bem como interação direta com os usuários sobre os programas exibidos, além de SAC 2.0 para esclarecimentos de dúvidas em geral. Compra de mídia e estratégia de Ads.</p>}
        header={<h2 style={{ color: 'black' }}>BBC HD – SOCIAL MEDIA</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/bbc01.jpg" alt="" />
        </div>
    </CaseBase>

}