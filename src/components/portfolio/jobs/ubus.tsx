import React from 'react'

import { CaseBase } from '../caseBase'

export const Ubus = () => {
  return (
    <CaseBase
      backgroundColor="#00143a"
      client="UBus"
      description={
        <p>
          UBus chegou para mudar o jeito que você se locomove pela cidade. Os
          veículos são equipados com ar-condicionado e Wi-Fi e, pelo aplicativo,
          ainda dá para fazer o pagamento, monitorar a rota e reservar o seu
          assento. Nós criamos todo o planejamento estratégico e posicionamento
          de marca, fizemos a gestão e a criação de conteúdos para as redes
          sociais e o monitoramento de mídia. Produzimos, também, backdrops,
          flyers, manual de marca e a adesivação dos veículos.
        </p>
      }
      header="https://portfolio.duee.com.br/wp-content/uploads/2019/06/HEADER_1-5.jpg"
      name="Ubus"
      year="2019"
    >
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Artboard-1.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Artboard-2.png"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Artboard-1-copy.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Artboard-3.png"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Artboard-1-copy-2.png"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Artboard-3-1.png"
        />
      </div>
    </CaseBase>
  )
}
