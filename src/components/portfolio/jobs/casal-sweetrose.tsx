import React from 'react'
import { CaseBase } from '../caseBase'

export const SweetRose = () => {
    return <CaseBase
        backgroundColor='#FFF'
        name="Lançamento Casal Garcia Sweet Rosé"
        client='Casal Garcia'
        year='2023'
        color="black"
        description={<p>Casal Garcia escolheu a DUEE como parceira para desenvolver uma comunicação direcionada às redes sociais da marca, para o lançamento da nova versão de vinho rosé. A ideia foi buscar o tom necessário para gerar expectativa sobre o novo produto, trabalhando suas características como cor, sabor, leveza, junto ao visual para o lançamento.</p>}
        header="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2FCG-sweet-rose%2Fheadder.png?alt=media&token=c172659c-d756-4716-8bb7-fd9e84656a0f"
    >
        <div className="col-xs-12 col-md-4 col-sm-6">
            <video controls autoPlay={true} muted={true} loop src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2FCG-sweet-rose%2FTeaser%20-%20Post%201.mp4?alt=media&token=9f6cc5dc-5b5b-4b92-b674-d388c3782bee" />
            <img src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2FCG-sweet-rose%2FLanc%CC%A7amento%20-%20post%201.jpeg?alt=media&token=a4542755-320c-46cf-90bc-ca8ab8827211" alt="" />
            <video controls autoPlay={true} muted={true} loop src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2FCG-sweet-rose%2FSustentac%CC%A7a%CC%83o_Post%201.mp4?alt=media&token=4d8c2d8f-7a10-4456-95fa-2dc090f288ad" />
            <img src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2FCG-sweet-rose%2FSustentac%CC%A7a%CC%83o_Post%202.png?alt=media&token=195eff8a-8c21-44e7-b0f2-31bae49a16ac" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <video controls autoPlay={true} muted={true} loop src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2FCG-sweet-rose%2FTeaser%20-%20Post%202.mp4?alt=media&token=3f8c88dc-44a7-470f-9d5d-e9764f5030f7" />
            <video controls autoPlay={true} muted={true} loop src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2FCG-sweet-rose%2FLanc%CC%A7amento%20-%20Post%203.mp4?alt=media&token=80588a87-a009-4a29-b79f-9bc6defbc560" />
            <video controls autoPlay={true} muted={true} loop src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2FCG-sweet-rose%2FLanc%CC%A7amento%20-%20Post%202.mp4?alt=media&token=61b3ce55-dc6d-4465-8a66-1cdf416a3216" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2FCG-sweet-rose%2FTeaser%20-%20Storie%202.png?alt=media&token=599e45b9-d44d-44b8-bb1e-12fc9e436708" alt="" />
            <video controls autoPlay={true} muted={true} loop src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2FCG-sweet-rose%2FSustentac%CC%A7a%CC%83o_Reels.mp4?alt=media&token=2ebcd893-549c-442d-9798-560a9f51d4c4" />
        </div>
    </CaseBase>

}