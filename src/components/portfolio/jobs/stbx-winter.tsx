import React from 'react'
import { CaseBase } from '../caseBase'

export const StarbucksWinter = () => {
    return <CaseBase
        backgroundColor='#C9AA8B'
        color='black'
        name="StarbucksWinter"
        client='Starbucks'
        year='2021'
        description={<>
            <p>A campanha Winter já chegou às lojas Starbucks de todo o Brasil. Foram diversas peças desenvolvidas que tiveram um lindo resultado. Novos sabores de bebidas e comidas foram adicionadas ao cardápio para deixar a sua pausa ainda mais gostosa.
A Duee Brasil foi responsável por todo o desdobramento da campanha off-line da campanha Winter Starbucks.
</p>
        </>}
        header="https://portfolio.duee.com.br/wp-content/uploads/2021/09/header.png"
    >
            <div className="col-xs-12 col-md-4 col-sm-6">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/09/01.jpg" alt="" />
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/09/04.jpg" alt="" />
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/09/07.jpg" alt="" />
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/09/10.jpg" alt="" />
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/09/13.jpg" alt="" />
            </div>
            <div className="col-xs-12 col-md-4 col-sm-6">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/09/02.jpg" alt="" />
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/09/05.jpg" alt="" />
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/09/08.jpg" alt="" />
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/09/11.jpg" alt="" />
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/09/14.jpg" alt="" />
            </div>
            <div className="col-xs-12 col-md-4 col-sm-6">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/09/03.jpg" alt="" />
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/09/06.jpg" alt="" />
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/09/09.jpg" alt="" />
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2021/09/12.jpg" alt="" />
            </div>
    </CaseBase>

}