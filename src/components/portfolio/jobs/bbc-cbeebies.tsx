import React from 'react'
import { CaseBase } from '../caseBase'

export const Cbeebies = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Cbeebies"
        client='BBC'
        year='2016'
        description={<p>Em uma parceria com a Livraria Cultura, fizemos a divulgação do app CBeebis. Criamos um espaço lúdico e bem colorido, recheado de tablets para que as crianças pudessem experimentar as atividades e conteúdos disponíveis gratuitamente.</p>}
        header={<h2 style={{ color: 'black' }}>BBC – ESPAÇOS CBEEBIES/LIVRARIA CULTURA</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/06/03.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/06/02.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/06/04.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/06/01.jpg" alt="" />
        </div>
    </CaseBase>

}