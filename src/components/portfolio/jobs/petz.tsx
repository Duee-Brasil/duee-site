import React from 'react'
import { CaseBase } from '../caseBase'

export const Petz = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Petz"
        client='Petz'
        year='2016'
        description={<p>Planejamos uma websérie para a Petz. Os episódios abordam dicas e informações fundamentais sobre alimentação, cuidados, saúde dos pets, entre outras.</p>}
        header={<h2 style={{ color: 'black' }}>PETZ TV – PETZ</h2>}
    >
        <div className="col-xs-12">
            <iframe src="https://www.youtube.com/embed/p6frgKZKTgk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen id='vimeo'></iframe>
        </div>
    </CaseBase>

}