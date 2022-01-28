import React from 'react'
import { CaseBase } from '../caseBase'

export const Schwarzkopf = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Schwarzkopf"
        client='Schwarzkopf'
        year='2011'
        description={<p>Conteúdo das páginas oficiais nas redes sociais com noticias relacionadas a marca. Estratégia de redes sociais com gestão do conteúdo da marca, deixando alinhada com o público alvo e aumentando a interatividade com os usuários.</p>}
        header={<h2 style={{ color: 'black' }}>SCHWARZKOPF – SOCIAL MEDIA</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/02/skpf-1.jpg" alt="" />
        </div>
    </CaseBase>

}