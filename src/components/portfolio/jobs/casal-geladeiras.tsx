import React from 'react'
import { CaseBase } from '../caseBase'

export const Geladeiras = () => {
    return <CaseBase
        backgroundColor='#67c3b3'
        name="Geladeiras"
        client='Casal Garcia'
        year='2019'
        description={<>
            <p>As charmosas geladeiras de Casal Garcia estão presentes em diferentes pontos de venda e foram uma ação de posicionamento da marca em PDV.</p>
            <p>Essas geladeiras deixam Casal Garcia na temperatura ideal para o consumo, aproximando o produto do público final.</p>
        </>}
        header="https://portfolio.duee.com.br/wp-content/uploads/2020/01/banner-casal.png"
    >
        <div className="col-xs-12 col-md-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Casal_podqws.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/Casal_geladeira.png" alt="" />
        </div>
    </CaseBase>

}