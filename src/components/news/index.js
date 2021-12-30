import React from "react"
import {colors} from "../../style/_colors.js"
import styled from 'styled-components'

const NewsLink = styled.a`
    text-decoration:  none;
    // margin: 2%;
    padding: 2%;
    // border: 1px solid red;
    text-align: center;
    color: ${colors.escuroDrk};
    display:  block;

        img {
            width: 100%;
            // border: 1px solid red;
            filter: grayscale(100%);
            -webkit-filter: grayscale(100%);
        }

&:hover {
    img {
        -webkit-animation: coloring 1s;
            /* Chrome, Safari, Opera */
            animation     : coloring 1s;
            filter        : grayscale(0%);
            -webkit-filter: grayscale(0%);
    }
}

@-webkit-keyframes coloring {
    from {
        filter        : grayscale(100%);
        -webkit-filter: grayscale(100%);
    }

    to {
        filter        : grayscale(0%);
        -webkit-filter: grayscale(0%);
    }
}

/* Standard syntax */
@keyframes coloring {
    from {
        filter        : grayscale(100%);
        -webkit-filter: grayscale(100%);
    }

    to {
        filter        : grayscale(0%);
        -webkit-filter: grayscale(0%);
    }
}
`;

const NewsContent = styled.div`
    text-decoration:  none;
    // margin: 2%;
    padding: 2%;
    // border: 1px solid red;
    text-align: center;
    color: ${colors.escuroDrk};
    display:  block;

        img {
            width: 100%;
            // border: 1px solid red;
            filter: grayscale(100%);
            -webkit-filter: grayscale(100%);
        }

&:hover {
    img {
        -webkit-animation: coloring 1s;
            /* Chrome, Safari, Opera */
            animation     : coloring 1s;
            filter        : grayscale(0%);
            -webkit-filter: grayscale(0%);
    }
}

@-webkit-keyframes coloring {
    from {
        filter        : grayscale(100%);
        -webkit-filter: grayscale(100%);
    }

    to {
        filter        : grayscale(0%);
        -webkit-filter: grayscale(0%);
    }
}

/* Standard syntax */
@keyframes coloring {
    from {
        filter        : grayscale(100%);
        -webkit-filter: grayscale(100%);
    }

    to {
        filter        : grayscale(0%);
        -webkit-filter: grayscale(0%);
    }
}
`;

const News = ({ img, title, link }) => (
  link ? <NewsLink href={link} className="news col-sm-3 col-xs-4 col-md-2" target="_blank" rel="noopener noreferrer">
    <img src={img} alt={title}/>
    <h5>{title}</h5>
  </NewsLink>
  :
  <NewsContent className="news col-sm-3 col-xs-4 col-md-2">
    <img src={img} alt={title}/>
    <h5>{title}</h5>
  </NewsContent>
)

export default News