import React from 'react'
import { CaseBase } from '../caseBase'

export const MaillePai = () => {
    return <CaseBase
        backgroundColor='#241e1d'
        name="MaillePai"
        client='Maille'
        year='2021'
        description={<>
            <p>DIA DOS PAIS COM MAILLE</p>
            <p>A ação de dia dos pais em parceria com a ganhadora do MasterChef, Elisa Fernandes, teve como propósito trazer reconhecimento de marca com uma das chefes e influenciadora mais conhecida no universo gastronômico brasileiro.</p>
            <p>A Duee Brasil foi responsável pelo planejamento da ação, seleção da influenciadora e desenvolvimento da ativação.
            </p>
        </>}
        header="https://portfolio.duee.com.br/wp-content/uploads/2021/08/header-1.png"
    >
        <div className="col-xs-12 col-md-3 col-sm-2">
        </div>
        <div className="col-xs-12 col-md-6 col-sm-6">
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2021/08/elisa_FINAL_maille-1.mp4" />
        </div>
        <div className="col-xs-12 col-md-3 col-sm-2">
        </div>
    </CaseBase>

}