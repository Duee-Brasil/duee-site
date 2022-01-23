import React from 'react'
import './default.css'

export default class Panetone extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "#106242" }}>
            <div className="col-12 title">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/banner_img_site_1.jpg" alt="Starbucks Panetone" />
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/site_img_starbucks_4.jpg" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/site_img_starbucks_5.jpg" alt="" />
                    <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/video_site_starbucks.mp4" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/site_img_starbucks_3.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/site_img_starbucks_1.jpg" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/site_img_site_marshmallow.jpg" alt="" />
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/site_img_starbucks_6.jpg" alt="" />
                </div>
                <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/img_site_starbucks_2.jpg" alt="" />
                </div>
                <div className="col-xs-12 col-md-6 col-sm-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/site_img_starbucks_9.jpg" alt="" />
                </div>
                <div className="col-xs-12 col-md-6 col-sm-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/site_img_starbucks_8.jpg" alt="" />
                </div>
                <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/img_site_starbucks.jpg" alt="" />
                </div>
            </div>

            <div className="row content describes">
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>O Panetone e o Mini Panetone da Starbucks, recheados com delicioso chocolate de qualidade, foram um sucesso de vendas em 2019.</p>
                    <p>E essas embalagens incríveis com tema natalino foram criadas e desenvolvidas pela Duee Brasil.</p>
                    <p>Além disso, desenvolvemos a arte dos Marshmallows e do Gingerbread, também com temas inspirados nas festas de fim de ano.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Starbucks</p>
                    <p><b>DATA</b> 2019</p>
                </div>
            </div>
        </article>
    }
}