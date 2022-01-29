import React from 'react'
import { CaseBase } from '../caseBase'

export const Kalassi = () => {
    return <CaseBase
        backgroundColor='#241e1d'
        name="Kalassi"
        client='Kalassi'
        year='2020'
        description={<>
            <p>A Kalassi é uma marca da Aurora Importadora que tem uma linha de snacks e molhos importados.
                O carro chefe da marca é o rice cracker, que foi pioneiro no Brasil, mas hoje ela conta com sabores import Kalassi from './kalassi-firts-bite';
                variados e surpreendentes, todos gluten free.
                A DUEE Brasil é responsável por toda a comunicação online da marca no Brasil.
            </p>
        </>}
        header="https://portfolio.duee.com.br/wp-content/uploads/2020/10/capa2.png"
    >
        <div className="col-xs-12 col-md-4 col-sm-6">
            <img src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/post-6_v2.png" alt="" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/post-7_V3.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/post-1-v2.mp4" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/Storie-Kalassi.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/post-6.mp4" />
        </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/post-8.mp4" />
            <video controls autoPlay={true} muted={true} loop src="https://portfolio.duee.com.br/wp-content/uploads/2020/10/post-1.mp4" />
        </div>
    </CaseBase>

}