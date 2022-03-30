import React from 'react'
import { CaseBase } from '../caseBase'

export const Marodine = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Marodine"
        client='Marodine LiV'
        year='2021'
        description={<p>Marodyne LiV é um dispositivo de vibração de baixa intensidade que usa tecnologia biomecânica que gerencia de forma suave e natural a saúde óssea e muscular.
            A Duee Brasil é responsável pela estratégia digital, segmentação de mídia e criação de conteúdo em inglês para as mídias sociais de Marodyne LiV. Cliente com foco no mercado americano.
        </p>}
        header='https://portfolio.duee.com.br/wp-content/uploads/2022/03/02-header.png'
    >
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/03/post-01.jpeg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/03/post-04.jpeg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/03/post-07.jpeg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/03/story-02.jpeg" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/03/post-02.jpeg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/03/post-05.jpeg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/03/post-08.jpeg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/03/story-03.jpeg" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/03/post-03.jpeg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/03/post-06.jpeg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/03/story-01.jpeg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/03/story-04.jpeg" alt="" />
        </div>

    </CaseBase>

}