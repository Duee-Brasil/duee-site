import React from 'react'
import { CaseBase } from '../caseBase'

export const Yelloween = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Yelloween"
        client='Veuve Clicquot'
        year='2021'
        description={<>
            <p>Para comemorar o Yelloween da Veuve Clicquot, fizemos uma campanha em parceria com a Pati Piva, com o tema "Doces ou Travessuras".</p>
            <p>Essa ativação teve como foco a conversão, na compra de uma Veuve Clicquot Brut 750ML, ganhava os doces exclusivos da Pati Piva inspirados no halloween.
                A Duee Brasil foi responsável pela criação, desenvolvimento e execução da campanha.</p>
        </>}
        header="https://portfolio.duee.com.br/wp-content/uploads/2022/01/header.png"
    >
        <div className="col-xs-12 col-md-2 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Anúncio-parte-cima.png" alt="" style={{ marginBottom: 0 }} />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Anúncio-parte-baixo.png" alt="" style={{ marginTop: 0 }} />
        </div>
        <div className="col-xs-12 col-md-5 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Banner_1080x1920.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Banner_200x200.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-5 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Post_1080x1080.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Banner_840x315.png" alt="" />
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2022/01/Banner_300x250.png" alt="" />
        </div>
    </CaseBase>

}