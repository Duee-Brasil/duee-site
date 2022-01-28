import React from 'react'
import { CaseBase } from '../caseBase'

export const FCA = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="FCA"
        client='FCA – Fiat Chrysler Automobiles'
        year='2016'
        description={<p>Criamos materiais e o planejamento para o Digital Day, evento da Fiat Chrysler Automobiles, para as concessionárias, com palestras e relacionamento digital entre colaboradores e parceiros.</p>}
        header={<h2 style={{ color: 'black' }}>DIGITAL DAY – FCA – FIAT CHRYSLER AUTOMOBILES</h2>}
    >
        <div className="col-xs-12">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/11/img_3921.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/11/img_3930.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/11/img_4173.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/11/img_4096.jpg" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2016/11/img_4159.jpg" alt="" />
        </div>
    </CaseBase>

}