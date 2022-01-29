import React from 'react'
import { CaseBase } from '../caseBase'

export const KalassiFirtsBite = () => {
    return <CaseBase
        backgroundColor='#241e1d'
        name="KalassiFirtsBite"
        client='Kalassi'
        year='2021'
        description={<>
            <p>A ação First Bite teve como propósito mostrar as reações das pessoas ao provarem os rice crackers Kalassi, focando na experimentação da principal característica da marca, sabores e experiências surpreendentes. Para aumentar o engajamento das redes sociais e reconhecimento de marca, utilizamos o trabalho dos influenciadores digitais Manu e Matheus, que formam o We Love, juntamente com o Estevam Pelo Mundo, para atingir o público-alvo de Kalassi. Ambos perfis possuem espírito aventureiro e explorador, abordando dicas de hotéis, restaurantes e passeios.
                A Duee Brasil foi responsável pelo planejamento das ações, seleção dos influenciadores e execução das ativações.</p>
        </>}
        header="https://portfolio.duee.com.br/wp-content/uploads/2020/10/capa2.png"
    >
        <div className="col-xs-12 col-md-4 col-sm-6">
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/story-1.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/story-4.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/story-7.mp4" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/story-2.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/story-5.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/story-8.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/Estevam-First-Bite.mp4" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/story-3.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/story-6.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/story-9.mp4" />
        </div>
    </CaseBase>

}