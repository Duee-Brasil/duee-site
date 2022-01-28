import React from 'react'
import { CaseBase } from '../caseBase'

export const PetShop = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="PetShop"
        client='Hasbro'
        year='2010'
        description={<p>Desenvolvimento de site, game e aplicações interativas.</p>}
        header={<h2 style={{ color: 'black' }}>HOTSITE LITTLELEST PET SHOP – HASBRO</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/KV_Hasbro_Natal_V4.jpg" alt="" />
        </div>
    </CaseBase>

}