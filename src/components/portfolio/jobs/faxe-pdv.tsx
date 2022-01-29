import React from 'react'
import { CaseBase } from '../caseBase'

export const FaxePdv = () => {
    return <CaseBase
        backgroundColor='#122f41'
        name="FaxePdv"
        client='Faxe'
        year='2019'
        description={<>
            <p>Criamos um kit exclusivo com copo e lata de Faxe, apresentando elementos da cultura viking por toda a caixa. Essa novidade reforça a relação dos vikings com nossa cerveja e deixa o ponto de venda ainda mais marcante e destacado.</p>
        </>}
        header="https://portfolio.duee.com.br/wp-content/uploads/2019/03/HEADER_1-2.png"
    >
                <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/FAXE_POST.gif" alt="" />
                </div>
                <div className="col-xs-12">
                    <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/BOARD-MOCKUP-PACK-FAXE.jpg" alt="" />
                </div>
    </CaseBase>

}