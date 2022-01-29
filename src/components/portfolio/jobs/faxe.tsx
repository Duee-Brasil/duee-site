import React from 'react'
import Swiper from 'react-id-swiper'
import { CaseBase } from '../caseBase'

export const Faxe = () => {
    const params = {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    }

    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Faxe"
        client='Faxe'
        year='2018'
        description={<>
            <p>Elaboramos o planejamento estratégico e o posicionamento de marca, e somos os responsáveis pela gestão e criação de conteúdos para as redes sociais. Atualmente, também fazemos promoções e ativações de marca, compra de mídia e monitoramento das publicações.</p>
        </>}
    >
        <div className="col-xs-12 col-md-4 col-sm-6">
            <Swiper {...params}>
                <div><img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/5.png" alt="" className='carrosel' /></div>
                <div><img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/2-1.png" alt="" className='carrosel' /></div>
                <div><img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/1.png" alt="" className='carrosel' /></div>
                <div><img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/3-1.png" alt="" className='carrosel' /></div>
                <div><img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/4.png" alt="" className='carrosel' /></div>
            </Swiper>
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/1_IN_FB_1080x1080_V1.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/post-1.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/2_IN_FB_1080x1080.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/02_Faxe_V1.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/FAXE-1080x1080.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/post-faxe-1-1080x1080.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/3_post_V1.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/our-story-FAXE.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/FAXE3.png" alt="" />
        </div>

        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/01_Faxe_3x1_01_V2.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/01_Faxe_3x1_02_V2.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/01_Faxe_3x1_03_V2.png" alt="" />
        </div>

        <div className="col-xs-6 col-md-3 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/Faxe_4x1_V1_01.png" alt="" />
        </div>
        <div className="col-xs-6 col-md-3 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/Faxe_4x1_V1_02.png" alt="" />
        </div>
        <div className="col-xs-6 col-md-3 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/Faxe_4x1_V1_03.png" alt="" />
        </div>
        <div className="col-xs-6 col-md-3 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/Faxe_4x1_V1_04.png" alt="" />
        </div>

        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/post-FAXE-1000x1300.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/2_mountain_view_V1.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/1_mountain_view_V1.png" alt="" />
            <a href="https://www.facebook.com/faxebeer.br/"><i className="fab fa-facebook-square" style={{ fontSize: "3em", color: "#4c6ef5" }} /></a>
            <a href="https://www.instagram.com/faxebeer.br/"><i className="fab fa-instagram-square" style={{ fontSize: "3em", color: "#4c6ef5" }} /></a>
        </div>
    </CaseBase>

}