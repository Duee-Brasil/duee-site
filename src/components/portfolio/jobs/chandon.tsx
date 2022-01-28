import React from 'react'
import { CaseBase } from '../caseBase'

export const Chandon = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Chandon"
        client='MOET Chandon'
        year='2018'
        description={<p>Para reforçar nossa campanha de ativação de marca, trazer um conceito mais jovem e integrar Chandon no ambiente digital, criamos um aplicativo de realidade aumentada, uma experiência inovadora disponível na Play Store e App Store.</p>}
        header="https://portfolio.duee.com.br/wp-content/uploads/2020/06/banner_img_site_giglio.png"
    >
        <div className="col-xs-12">
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/Chandon-Realidade-Aumentada.mp4" />
        </div>
    </CaseBase>

}