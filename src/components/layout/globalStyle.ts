import { colors } from "@style/_colors"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
	box-sizing: border-box;
//	@import url('https://fonts.googleapis.com/css?family=Julius+Sans+One|Raleway&display=swap');
//    @import url('https://fonts.googleapis.com/css?family=Anton&display=swap');
}

html {

	margin: 0;
	padding: 0;
}

body {

	color: ${colors.claro};
	background: black;
	-webkit-overflow-scrolling: touch;
	padding: 0;
    margin  : 0 !important;
    height  : 100vh !important;
    width   : 100vw !important;    
	font-family: 'Raleway', sans-serif;
	overflow-x: hidden;
}

a {
	color: ${colors.claro};
	text-decoration: 1px dotted ${colors.claro};
}

[data-scroll] {
	transition: opacity 1s;
}

[data-scroll="in"] {
	opacity: 1;
}

[data-scroll="out"] {
	opacity: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: 'Julius Sans One', sans-serif;
	letter-spacing: 3px;
}

main {
	overflow-y: auto;
	overflow-x: hidden;
}
`

export default GlobalStyle
