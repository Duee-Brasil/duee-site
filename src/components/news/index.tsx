import React, { FC } from "react"
import styled from "styled-components"
import { colors } from "../../style/_colors.js"

const NewsLink = styled.a`
    text-decoration:  none;
    padding: 2%;
    text-align: center;
    color: ${colors.escuroDrk};
    display:  block;

        img {
            width: 100%;
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
    padding: 2%;
    text-align: center;
    color: ${colors.escuroDrk};
    display:  block;

        img {
            width: 100%;
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

const News: FC<{
    img: string,
    title?: string,
    link?: string
}> = ({ img, title, link }) => (
    link ? <NewsLink href={link} className="col-sm-3 col-xs-4 col-md-2" target="_blank" rel="noopener noreferrer">
        <img src={img} alt={title} />
        {title ? <h5>{title}</h5> : null}
    </NewsLink>
        :
        <NewsContent className="col-sm-3 col-xs-4 col-md-2">
            <img src={img} alt={title} />
            {title ? <h5>{title}</h5> : null}
        </NewsContent>
)

export default News