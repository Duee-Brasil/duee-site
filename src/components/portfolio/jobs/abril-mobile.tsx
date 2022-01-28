import React from 'react'
import { CaseBase } from '../caseBase'

export const AbrilMobile = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="abrilmobile"
        client='Editora Abril'
        year='2016'
        description={<p>Campanha de ativação de marca para a Revista Veja, em diversas bancas de jornal espalhadas por São Paulo. Junto, realizamos pesquisas de opinião sobre a marca.</p>}
        header='https://portfolio.duee.com.br/wp-content/uploads/2021/08/header-2.png'
    >
        <div className="col-xs-12">
            <video controls autoPlay={true} muted={true} loop src="https://duee.com.br/Site_2016/wp-content/uploads/2016/06/video_abril.webmhd.webm" />
        </div>

    </CaseBase>

}