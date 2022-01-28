import React from 'react'
import { CaseBase } from '../caseBase'

export const CodorniuSite = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="CodorniuSite"
        client='Codorníu'
        year='2015'
        description={<p>Criamos o posicionamento e o planejamento estratégico da marca para construir os conteúdos das redes sociais. Fazemos também a constante compra de mídia, gestão de conteúdos e monitoramento de publicações, público e concorrentes.</p>}
        header={<h2 style={{ color: 'black' }}>CODORNÍU – WEB SÉRIE – SOMOS CODORNÍU</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/05/Captura-de-Tela-2017-05-26-a%CC%80s-16.45.37.png" alt="" />
        </div>
    </CaseBase>

}