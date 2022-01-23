import React, {FC} from "react"
import Masonry from 'react-masonry-css'
import styled, { css } from 'styled-components';

const MasonryCss = css`
.my-masonry-grid {
  display: -webkit-box; /* Not needed if autoprefixing */
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex;
  margin-left: -30px; /* gutter size offset */
  width: auto;
}
.my-masonry-grid_column {
  padding-left: 30px; /* gutter size */
  background-clip: padding-box;
}

.my-masonry-grid_column > img > video {
  width: 100%;
  height: auto;
  padding: 20px;
}
`

const Content = styled.div`
  ${MasonryCss}
`

const MasonryComponent:FC = ({ children }) => {
    const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  
  return <Content><Masonry
    breakpointCols={breakpointColumnsObj}
    className="my-masonry-grid"
    columnClassName="my-masonry-grid_column"
  >
    {children}
  </Masonry></Content>
}

export default MasonryComponent