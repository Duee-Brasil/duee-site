import React from 'react'
import { CaseBase } from '../caseBase'

export const Banila = () => {
    return <CaseBase
        backgroundColor='#D1375D'
        name="Banila"
        client='Casal Garcia'
        year='2021'
        description={<>
            <p>Com o intuito de unir o autocuidado e a alegria de reservar um momento para apreciar um bom vinho, fizemos uma parceria entre Casal Garcia e a marca de produtos de skincare coreana Banila Co.</p>
            <p>Foram enviados kits de produtos para influenciadoras selecionadas, além de conteúdos de harmonizações em ambas as redes sociais das marcas. </p>
            <p>A Duee Brasil foi responsável pela co-branding entre as marcas, desenvolvimento e criação dos conteúdos.</p>
        </>}
        header="https://portfolio.duee.com.br/wp-content/uploads/2021/08/header.png"
    >
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/05.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/02.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/07.jpg" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/04.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/01.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/15.jpg" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/03.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/06.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/14.jpg" alt="" />
        </div>
    </CaseBase>

}