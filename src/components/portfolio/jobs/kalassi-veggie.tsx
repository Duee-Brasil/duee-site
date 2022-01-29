import React from 'react'
import { CaseBase } from '../caseBase'

export const KalassiVeggie = () => {
    return <CaseBase
        backgroundColor='#241e1d'
        name="KalassiVeggie"
        client='Kalassi'
        year='2021'
        description={<>
            <p>A nova linha Kalassi Veggie foi pensada nas principais tendências do mercado global de alimentos e no desafio de manter uma alimentação saudável sem abrir mão do sabor e da praticidade.
                Feita em três versões: couve, beterraba e mix de vegetais; a linha Veggie contém ingredientes de verdade, cuidadosamente selecionados e composta por mais de 90% de seus ingredientes com arroz e vegetais desidratados.
                A Duee Brasil foi responsável pela campanha de lançamento da nova linha de Kalassi Veggie, construção de identidade visual e envio de kits para influenciadores. </p>
        </>}
        header="https://portfolio.duee.com.br/wp-content/uploads/2020/10/capa2.png"
    >
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/post-2-v2.png" alt="" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/video-1.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/video-4.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/video-7.mp4" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/Banner-Site_mobile-v4.png" alt="" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/video-2.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/video-5.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/video-8.mp4" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/WhatsApp-Image-2021-05-27-at-15.35.53-1.jpeg" alt="" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/video-3.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/video-6.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/video-9.mp4" />
        </div>
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/Banner-Site_web-v4.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/post-3-v3.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/story-2-v2.mp4" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/post-5-v3.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/post-6.mp4" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/post-4-v3.mp4" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/06/story-1-v4.png" alt="" />
        </div>
    </CaseBase>

}