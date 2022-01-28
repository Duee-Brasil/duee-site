import React from 'react'
import { CaseBase } from '../caseBase'

export const Maille = () => {
    return <CaseBase
        backgroundColor='#241e1d'
        name="Maille"
        client='Maille'
        year='2020'
        description={<>
            <p>A Maille uma marca tradicional na França, que une mais de 260 anos de tradição com a modernidade de pertencer a uma empresa global como a Unilever. A excelência em mostarda Dijon se deve aos Maître Moutardiers, que elaboram e escolhem os ingredientes de cada produto, e ao uso de sementes de mostarda de melhor qualidade, a Brassica Juncea. A DUEE Brasil é responsável por toda a comunicação da marca no Brasil. </p>
        </>}
        header="https://portfolio.duee.com.br/wp-content/uploads/2020/06/banner_img_site_1.png"
    >
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/site_1.jpg" alt="" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-maille-6.mp4" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/stories_3.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/site_4.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-maille-5.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">

            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-maille-1.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/site_3.jpg" alt="" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/stories_1.mp4" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-maille-2.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/site_3.jpg" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-maille-3.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/site_2.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-maille-4.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/stories_2.png" alt="" />
        </div>
    </CaseBase>

}