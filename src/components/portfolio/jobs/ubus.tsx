import React from 'react'
import { CaseBase } from '../caseBase'

export const Ubus = () => {
    return <CaseBase
        backgroundColor='#00143a'
        name="Ubus"
        client='UBus'
        year='2019'
        description={<p>UBus chegou para mudar o jeito que você se locomove pela cidade. Os veículos são equipados com ar-condicionado e Wi-Fi e, pelo aplicativo, ainda dá para fazer o pagamento, monitorar a rota e reservar o seu assento. Nós criamos todo o planejamento estratégico e posicionamento de marca, fizemos a gestão e a criação de conteúdos para as redes sociais e o monitoramento de mídia. Produzimos, também, backdrops, flyers, manual de marca e a adesivação dos veículos.</p>}
        header="https://portfolio.duee.com.br/wp-content/uploads/2019/06/HEADER_1-5.jpg"
    >
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Artboard-1.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Artboard-2.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Artboard-1-copy.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Artboard-3.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Artboard-1-copy-2.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Artboard-3-1.png" alt="" />
        </div>
    </CaseBase>

}