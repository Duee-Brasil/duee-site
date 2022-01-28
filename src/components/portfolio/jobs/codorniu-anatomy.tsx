import React from 'react'
import { CaseBase } from '../caseBase'

export const Anatomy = () => {
    return <CaseBase
        backgroundColor='white'
        color='black'
        name="Anatomy"
        client='Codorníu'
        year='2017'
        description={<>
            <p>Para promover o sabor de Codorníu no verão, criamos uma websérie de 5 episódios, onde em cada um deles, apresentamos receitas preparadas com o famoso cava espanhol. O resultado foi de dar água na boca.</p>
            <p><a href="https://www.youtube.com/watch?v=OoXnsNyeEzU&list=PLWceFV7hyjj0yhFPCBHwDGDN29KCOhTW5">Veja aqui todos os episódios.</a></p>
        </>}
        header={<h2 style={{ color: 'black' }}>CODORNÍU – WEB SÉRIE – THE DRINK’S ANATOMY</h2>}
    >
        <div className="col-xs-12">
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/226356033" frameBorder="0" allowFullScreen id='vimeo'></iframe>
        </div>
    </CaseBase>

}