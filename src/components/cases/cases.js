import React, { Component } from "react"
// import './case.scss'

export default class Case extends Component {
    constructor (props) {
        super(props)
    }

    render() {

        const { img, title, link, open } = this.props
        
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
}
    // // <div className="proj col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" style={{ backgroundImage: `url(${img})` }}>
    // // <a href={link} >
    //     {/* <img src={img} data-largesrc={img} alt={title}/> */}

    //     {/* <span/>
    //         <div>
    //             <i className="fas fa-search" />
    //             <br />
    //             {title.toUpperCase()}
    //         </div> */}

    //     {/* <div id="ib-content-preview" class="ib-content-preview">
    //         <div class="ib-teaser" style="display:none;">



    //         </div>
    //         <div class="ib-content-full" style="display:none;">{{ html content }}</div>
    //         <span class="ib-close" style="display:none;">Close Preview</span>
    //     </div>
    // </a> */}
    // // </div>
