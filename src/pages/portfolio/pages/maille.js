import React from 'react'
//

export default class Maille extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "#241e1d" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/banner_img_site_1.png" alt="Maille" />
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12 col-md-4 col-sm-6">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/site_1.jpg" alt="" />
                    <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-maille-6.mp4" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/stories_3.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/site_4.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-maille-5.png" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-maille-1.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/site_3.jpg" alt="" />
                    <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/stories_1.mp4" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-maille-2.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/site_3.jpg" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-maille-3.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/site_2.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-maille-4.png" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/06/stories_2.png" alt="" />
                </div>
            </div>

            <div className="row content describes">
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>A Maille uma marca tradicional na França, que une mais de 260 anos de tradição com a modernidade de pertencer a uma empresa global como a Unilever. A excelência em mostarda Dijon se deve aos Maître Moutardiers, que elaboram e escolhem os ingredientes de cada produto, e ao uso de sementes de mostarda de melhor qualidade, a Brassica Juncea. A DUEE Brasil é responsável por toda a comunicação da marca no Brasil. </p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Maille</p>
                    <p><b>DATA</b> 2020</p>
                </div>
            </div>
        </article>
    }
}