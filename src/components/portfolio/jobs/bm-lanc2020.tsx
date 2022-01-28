import React from 'react'
import { CaseBase } from '../caseBase'

export const BML2020 = () => {
    return <CaseBase
        backgroundColor='#00143a'
        name="BML2020"
        client='Blue Moon'
        year='2020'
        description={<p>Mais uma sessão de fotos para Blue Moon, com locações em bares de São Paulo, harmonização com diferentes pratos, ambientes, situações e pessoas.
            A Duee Brasil planejou, roteirizou e acompanhou o projeto e execução completos.</p>}
        header="https://portfolio.duee.com.br/wp-content/uploads/2020/06/banner_img_site_1-1.png"
    >
        <div className="col-xs-12 col-md-4 col-sm-6">
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/stories-bm-2.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-bm-fb-2.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-bm-8.mp4" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-blue-moon-1_01.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/stories-bm.png" alt="" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-bm-5.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-bm-2.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/stories-bm-1-.mp4" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-bm-7.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-bm-2-cópia.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-blue-moon-2.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-bm-6.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-bm-4-2.mp4" />
        </div>
    </CaseBase>

}