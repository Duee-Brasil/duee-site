import React from "react"
// import './case.scss'

export default ({ img, title, link, open }) => {        
        return (
            <div className="ib-content" onClick={open}>
                {/* <div className="ib-content-full">
                    <iframe src={link} height="100%" width="100%" />
                </div> */}
                <div className="ovrlyT" />
                <div className="ovrlyB" />
                <span><i className="fas fa-search" />
                    <br />{title.toUpperCase()}</span>
                <div className='image ib-teaser' style={{ backgroundImage: `url(${img})` }} />
                
            </div>
        )
    }