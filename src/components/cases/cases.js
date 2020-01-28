import React from "react"
import './case.scss'

const Case = ({ img, title, link }) =>
    <div className="proj col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" style={{ backgroundImage: `url(${img})` }}>
        <a href={link} >
            <div>
                <i className="fas fa-search" />
                <br />
                {title.toUpperCase()}
            </div>
        </a>
    </div>

export default Case