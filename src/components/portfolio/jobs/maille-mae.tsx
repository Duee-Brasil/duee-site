import React from 'react'
import { CaseBase } from '../caseBase'

export const MailleMaes = () => {
    return <CaseBase
        backgroundColor='#241e1d'
        name="MailleMaes"
        client='Maille'
        year='2021'
        description={<>
            <p>DIA DAS MÃES COM MAILLE</p>
            <p>A ação de dia das mães teve como objetivo unir a data comemorativa juntamente com o influenciador Lorenzo Ravioli, para mostrar que Maille está presente em todos os momentos especiais.
                Selecionamos esse influenciador por estar imerso no universo da gastronomia, sendo o vencedor do MasterChef Júnior. No conteúdo proposto, ele fez uma receita utilizando os produtos da marca e presenteou a mãe com um prato delicioso.
                A Duee Brasil foi responsável pela busca e briefing do influenciador que entrega o melhor conteúdo de acordo com o perfil do cliente.
            </p>
        </>}
        header="https://portfolio.duee.com.br/wp-content/uploads/2021/05/header-maille.png"
    >
        <div className="col-xs-12 col-md-3 col-sm-2">
        </div>
        <div className="col-xs-12 col-md-6 col-sm-6">
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/05/lorenzo-maille.mp4" />
        </div>
        <div className="col-xs-12 col-md-3 col-sm-2">
        </div>
    </CaseBase>

}