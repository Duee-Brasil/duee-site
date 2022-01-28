import React from 'react'
import { CaseBase } from '../caseBase'

export const Estagiario = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Estagiario"
        client='Instituto Via de Acesso'
        year='2017'
        description={<p>O Instituto Via de Acesso valoriza o papel do estagiário dentro do mercado de trabalho e incentiva que empresas façam o mesmo. Pensando nisso, criamos uma campanha com diversos conteúdos nas redes sociais, banner para site, relógio de rua e um e-book, para mostrar às empresas que os estagiários não são mão de obra barata e estão trabalhando para contribuir.</p>}
        header={<h2 style={{ color: 'black' }}>RESPEITA O ESTAGIÁRIO – INSTITUTO VIA DE ACESSO</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/KV_ESTAGIO.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/posts_estagio.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/Pg_Dupla-copy.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2017/07/Relogio_Rua.jpg" alt="" />
        </div>
    </CaseBase>

}