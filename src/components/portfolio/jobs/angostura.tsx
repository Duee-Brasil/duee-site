import React from 'react'
import { CaseBase } from '../caseBase'

export const Angostura = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Angostura"
        client='Angostura'
        year='2022'
        description={<p>Angostura é o ingrediente essencial para a preparação de drinks. Indispensável para bares e cozinhas.
            Os bitters realçam as nuances de sabores, tornando uma simples bebida em uma experiência completa.
            O rum 1919 contém notas amadeiradas com baunilha, perfeito para saborear puro ou com gelo.
            Já o licor Amaro Di Angostura exala aromas de canela e alcaçuz, podendo ser apreciado com gelo, em coquetéis ou sozinho.
            A Duee Brasil é responsável pela estratégia digital, criação de conteúdo e ativação da marca para Angostura no Brasil.
        </p>}
        header='https://portfolio.duee.com.br/wp-content/uploads/2022/03/02_header.jpeg'
    >
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/03/post-1-2.jpeg" alt="" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2022/03/post-1-1.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2022/03/post-3.mp4" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/03/story-2.jpeg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/03/story-1.jpeg" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/03/post-1.jpeg" alt="" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2022/03/post-1.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2022/03/post-4-1.mp4" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/03/story-2-3.jpeg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/03/story-1-2.jpeg" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/03/post-2.jpeg" alt="" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2022/03/post-3_1.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2022/03/post-4.mp4" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/03/story-2-2.jpeg" alt="" />
        </div>

    </CaseBase>

}