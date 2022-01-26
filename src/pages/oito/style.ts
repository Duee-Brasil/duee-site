import { css } from 'styled-components';

import Banner11 from "@images/oito/banner-1-1.png";
import InnerBanner11 from "@images/oito/inner-banner-bg-1-1.jpg";

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
 .banner-one a {
	 width: fit-content;
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
 .banner-one__tag-line a {
	 display: inline-block;
	 background-color: #e49d1a;
	 color: #252758;
	 line-height: 32px;
	 padding: 0 20px;
	 margin-left: 10px;
	 transition: all 0.4s ease;
}
 .banner-one__tag-line a:hover {
	 background-color: #252758;
	 color: #fff;
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
 a:active, a:hover, a:focus, a:visited {
	 text-decoration: none;
}
 .thm-black-bg {
	 background-color: #252758;
}
 .thm-base-bg {
	 background-color: #a461e5;
}
 .thm-gray-bg {
	 background-color: #f2f3f9;
}
 .light-text-color {
	 color: #fff;
}
 .black-text-color {
	 color: #252758;
}
 .icon-revresed {
	 transform: rotate(180deg);
	 display: inline-block;
}
 .block-title {
	 margin-bottom: 60px;
}
 .block-title__title {
	 margin-top: -10px;
	 margin-right: 0;
	 margin-bottom: 0;
	 margin-left: 5px;
	 font-size: 60px;
	 letter-spacing: -0.04em;
}
 @media (max-width: 1200px) {
	 .block-title__title {
		 font-size: 55px;
	}
}
 @media (max-width: 768px) {
	 .block-title__title {
		 font-size: 50px;
	}
}
 @media (max-width: 576px) {
	 .block-title__title {
		 font-size: 45px;
	}
}

 .cta-two__moc {
	 position: absolute;
	 top: 590px;
	 right: -50px;
	 
}

 .cta-two__single + .cta-two__single {
	 margin-top: 50px;
}
 .cta-two__icon, .cta-two__content {
	 display: table-cell;
	 vertical-align: top;
}
 .cta-two__icon i {
	 color: #a461e5;
	 font-size: 64px;
}
 .cta-two__content {
	 padding-left: 35px;
}
 .cta-two__title {
	 margin: 0;
	 color: #252758;
	 font-size: 18px;
	 letter-spacing: -0.02em;
	 margin-bottom: 30px;
}
 .cta-two__title a {
	 color: inherit;
	 transition: all 0.4s ease;
}
 .cta-two__title a:hover {
	 color: #a461e5;
}
 .cta-two__text {
	 font-size: 16px;
	 line-height: 34px;
	 margin: 0;
}
 .cta-two__btn {
	 margin-top: 60px;
	 margin-left: 100px;
}
 .cta-three {
	 margin-bottom: -330px;
	 padding-bottom: 185px;
	 margin-top: -180px;
	 background-image: linear-gradient(90deg, #f2f3f9 0%, #fcfdfe 100%);
	 padding-top: 300px;
	 clip-path: polygon(0% 0%, 100% 30%, 100% 100%, 0% 100%);
}
 @media (max-width: 1200px) {
	 .cta-three {
		 margin-bottom: -50px;
		 padding-bottom: 100px;
		 margin-top: -50px;
		 padding-top: 50px;
		 padding-left: 5%;
		 padding-right: 10%;
	}
	 .cta-three__content {
		 padding-top: 35px;
		 max-width: 100vw;
	}
	 .cta-three__text {
		 max-width: 100vw;
		 padding-right: 7%;
	}
}
 @media (max-width: 768px) {
	 .cta-three {
		 margin-bottom: -50px;
		 padding-bottom: 100px;
		 margin-top: -50px;
		 padding-top: 50px;
		 padding-left: 5%;
		 padding-right: 10%;
		 clip-path: none;
	}
	 .cta-three__content {
		 padding-top: 35px;
		 max-width: 100vw;
	}
	 .cta-three__text {
		 max-width: 100vw;
		 padding-right: 5%;
	}
}
 @media (max-width: 576px) {
	 .cta-three {
		 margin-bottom: -50px;
		 padding-bottom: 100px;
		 margin-top: -50px;
		 padding-top: 50px;
		 padding-left: 7%;
		 padding-right: 5%;
		 clip-path: none;
	}
	 .cta-three__content {
		 padding-top: 35px;
	}
}
 .cta-three__image {
	 position: relative;
	 max-width: 100%;
	 overflow: hidden;
	 left: -30px;
	 animation-fill-mode: both;
	 animation-name: shapeRotate;
	 animation-timing-function: linear;
	 animation-duration: 5s;
	 animation-iteration-count: infinite;
	 transform-origin: center center;
}
 @media (max-width: 1200px) {
	 .cta-three__image {
		 left: 0;
	}
}
 @media (max-width: 768px) {
	 .cta-three__image {
		 left: 0;
	}
}
 @media (max-width: 576px) {
	 .cta-three__image {
		 left: 0;
	}
}
 .cta-three .block-title {
	 margin-bottom: 20px;
}
 .cta-three__title {
	 z-index: 1000;
}
 .cta-three__text {
	 margin: 0;
	 font-size: 16px;
	 line-height: 36px;
	 letter-spacing: -0.02em;
	 z-index: 1000;
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
 .inner-banner {
	 background: #a461e5 url(${InnerBanner11}) center center no-repeat;
	 background-size: cover;
	 padding-top: 220px;
	 padding-bottom: 120px;
}
 .inner-banner .container {
	 display: flex;
	 justify-content: space-between;
	 align-items: center;
}
 .inner-banner__title {
	 margin: 0;
	 color: #fff;
	 font-size: 50px;
	 letter-spacing: -0.04em;
}
 .thm-breadcrumb {
	 margin: 0;
	 padding: 0;
	 list-style: none;
	 border-radius: 19px;
	 padding-left: 19px;
	 padding-right: 19px;
	 line-height: 21px;
	 display: inline-block;
	 vertical-align: middle;
	 background-color: rgba(255, 255, 255, .1);
}
 .thm-breadcrumb__item {
	 line-height: 17px;
	 display: inline-block;
	 vertical-align: middle;
}
 .thm-breadcrumb__item + .thm-breadcrumb__item:before {
	 content: '.';
	 font-size: 10px;
	 color: #fff;
	 margin-left: 10px;
	 margin-right: 10px;
	 font-weight: 600;
	 line-height: 30px;
	 display: inline-block;
	 vertical-align: middle;
}
 .thm-breadcrumb__link {
	 display: inline-block;
	 vertical-align: middle;
	 color: #fff;
	 font-size: 10px;
	 line-height: 30px;
	 letter-spacing: 0.2em;
	 text-transform: uppercase;
	 font-weight: 600;
	 transition: all 0.4s ease;
}
 .thm-breadcrumb__item:hover .thm-breadcrumb__link, .current .thm-breadcrumb__link {
	 color: #e49d1a;
}

`

export default StyleCss