import React from 'react'
import { CaseBase } from '../caseBase'

export const JBL = () => {
    return <CaseBase
        backgroundColor='#169193'
        name="casal garcia jbl"
        client='Casal Garcia'
        year='2021'
        description={<>
            <p>Para comemorar o dia mais significativo do conceito da alegria de Casal Garcia, o “ Dia da Alegria”, fizemos um concurso cultural nas redes sociais para que os seguidores postassem uma foto ou vídeo que envolva o espírito dessa data. Os conteúdos mais criativos ganharam uma caixinha de som JBL.</p>
            <p>A Duee Brasil foi responsável pela criação, desenvolvimento e aplicação do concurso.</p></>}
        header='https://portfolio.duee.com.br/wp-content/uploads/2021/08/header-2.png'
    >
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/06-1.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/01-1.jpg" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/05-1.jpg" alt="" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/04.mp4" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/02-1.jpg" alt="" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/03.mp4" />
        </div>

    </CaseBase>

}