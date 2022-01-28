import React from 'react'
import { CaseBase } from '../caseBase'

export const CodorniuM = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="CodorniuM"
        client='Interfood'
        year='2014/2015/2016'
        description={<p>Criamos o posicionamento e o planejamento estratégico da marca para construir os conteúdos das redes sociais. Fazemos também a constante compra de mídia, gestão de conteúdos e monitoramento de publicações, público e concorrentes.</p>}
        header={<h2 style={{ color: 'black' }}>CODORNÍU – SOCIAL MEDIA</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/codorniu02.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/codorniu01.jpg" alt="" />
        </div>
    </CaseBase>

}