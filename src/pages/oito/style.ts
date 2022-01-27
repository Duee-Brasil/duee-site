import { css } from 'styled-components';

import Banner11 from "@images/oito/banner-1-1.png";

const StyleCss = css`
.banner-one {
	 background: transparent url(${Banner11}) top right no-repeat;
	 background-size: cover;
	 position: relative;
	 padding-top: 274px;
	 padding-bottom: 515px;
	 z-index: 11;
}
 .banner-one > img {
	 width: auto !important;
}
 .banner-one__globe {
	 position: absolute;
	 top: 15%;
	 left: 15%;
	 animation-fill-mode: both;
	 animation-name: globeRotate;
	 animation-timing-function: linear;
	 animation-duration: 10s;
	 animation-iteration-count: infinite;
}
 .banner-one__content {
	 padding: 20px;
}
 .banner-one__rocket {
	 position: absolute;
	 bottom: 40%;
	 left: 40%;
	 animation-fill-mode: both;
	 animation-name: rocketMove;
	 animation-timing-function: linear;
	 animation-duration: 6s;
	 animation-iteration-count: infinite;
}
 .banner-one__moc {
	 position: absolute;
	 top: 140px;
	 right: 0;
	 max-width: 60vw;
	 animation-fill-mode: both;
	 animation-name: shapeRotate;
	 animation-timing-function: linear;
	 animation-duration: 3s;
	 animation-iteration-count: infinite;
	 transform-origin: center center;
}
 .banner-one__tag-line {
	 margin: 0;
	 display: inline-block;
	 border-radius: 16px;
	 background-color: rgba(255, 255, 255, .1);
	 font-size: 10px;
	 text-transform: uppercase;
	 letter-spacing: 0.2em;
	 overflow: hidden;
	 color: #fff;
	 line-height: 32px;
	 padding-left: 20px;
	 padding-right: 20px;
}
 .banner-one__title {
	 margin: 0;
	 margin-top: 20px;
	 margin-bottom: 50px;
	 color: #fff;
	 font-size: 70px;
	 line-height: 80px;
	 letter-spacing: -0.04em;
}
 @keyframes globeRotate {
	 8% {
		 transform: perspective(200px) rotateX(0deg);
	}
	 100% {
		 transform: perspective(200px) rotateX(360deg);
	}
}
 @keyframes rocketMove {
	 8% {
		 transform: perspective(600px) translateY(0) translateX(0) rotate(0);
		 opacity: 1;
	}
	 100% {
		 transform: perspective(600px) translateY(-400px) translateX(-300px) rotate(0);
		 opacity: 0;
	}
}
 @keyframes shapeRotate {
	 0%, 100% {
		 transform: translateY(0px);
	}
	 20%, 80% {
		 transform: translateY(10px);
	}
	 60% {
		 transform: translateY(20px);
	}
}


`

export default StyleCss