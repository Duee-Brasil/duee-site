import React from 'react'
import { CaseBase } from '../caseBase'

export const Playskool = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Playskool"
        client='Hasbro'
        year='2011/2012'
        description={<p>Desenvolvimento de site, SEO, elaboração de estratégias e redes sociais.</p>}
        header={<h2 style={{ color: 'black' }}>HOTSITE PLAYSKOOL – HASBRO</h2>}
    >
        <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/Habro-Playskool-Banner-Poppin-Park.jpg" alt="" />
                </div>
    </CaseBase>

}