import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
    @import url('https://fonts.googleapis.com/css?family=Julius+Sans+One|Raleway&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Anton&display=swap');
    font-family: 'Raleway', sans-serif;
	color: $claro;
	// background     : linear-gradient(139deg, #000000, #303030);
	background: black;
	min-height: 100%;
	// overflow-scrolling: touch;
	-webkit-overflow-scrolling: touch;
    margin  : 0 !important;
    height  : 100% !important;
    width   : 100% !important;
    overflow: hidden !important;
    box-sizing: border-box;
}

picture {
  min-width: 100vw;

  source {
    width: 100vw;
  }
}

a {
	color: $claro;
	text-decoration: 1px dotted $claro;
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
	min-height: 100vh;
	height: 100vmin;
	overflow-y: auto;
	overflow-x: hidden;
}

/*
==============================================
CSS3 ANIMATION CHEAT SHEET
==============================================

Made by Justin Aguilar

www.justinaguilar.com/animations/

Questions, comments, concerns, love letters:
justin@justinaguilar.com
==============================================
*/

/*
==============================================
slideDown
==============================================
*/


.slideDown{
	animation-name: slideDown;
	-webkit-animation-name: slideDown;	

	animation-duration: 1s;	
	-webkit-animation-duration: 1s;

	animation-timing-function: ease;	
	-webkit-animation-timing-function: ease;	

	visibility: visible !important;						
}

@keyframes slideDown {
	0% {
		transform: translateY(-100%);
	}
	50%{
		transform: translateY(8%);
	}
	65%{
		transform: translateY(-4%);
	}
	80%{
		transform: translateY(4%);
	}
	95%{
		transform: translateY(-2%);
	}			
	100% {
		transform: translateY(0%);
	}		
}

@-webkit-keyframes slideDown {
	0% {
		-webkit-transform: translateY(-100%);
	}
	50%{
		-webkit-transform: translateY(8%);
	}
	65%{
		-webkit-transform: translateY(-4%);
	}
	80%{
		-webkit-transform: translateY(4%);
	}
	95%{
		-webkit-transform: translateY(-2%);
	}			
	100% {
		-webkit-transform: translateY(0%);
	}	
}

/*
==============================================
slideUp
==============================================
*/


.slideUp{
	animation-name: slideUp;
	-webkit-animation-name: slideUp;	

	animation-duration: 1s;	
	-webkit-animation-duration: 1s;

	animation-timing-function: ease;	
	-webkit-animation-timing-function: ease;

	visibility: visible !important;			
}

@keyframes slideUp {
	0% {
		transform: translateY(100%);
	}
	50%{
		transform: translateY(-8%);
	}
	65%{
		transform: translateY(4%);
	}
	80%{
		transform: translateY(-4%);
	}
	95%{
		transform: translateY(2%);
	}			
	100% {
		transform: translateY(0%);
	}	
}

@-webkit-keyframes slideUp {
	0% {
		-webkit-transform: translateY(100%);
	}
	50%{
		-webkit-transform: translateY(-8%);
	}
	65%{
		-webkit-transform: translateY(4%);
	}
	80%{
		-webkit-transform: translateY(-4%);
	}
	95%{
		-webkit-transform: translateY(2%);
	}			
	100% {
		-webkit-transform: translateY(0%);
	}	
}

/*
==============================================
slideLeft
==============================================
*/


.slideLeft{
	animation-name: slideLeft;
	-webkit-animation-name: slideLeft;	

	animation-duration: 1s;	
	-webkit-animation-duration: 1s;

	animation-timing-function: ease-in-out;	
	-webkit-animation-timing-function: ease-in-out;		

	visibility: visible !important;	
}

@keyframes slideLeft {
	0% {
		transform: translateX(150%);
	}
	50%{
		transform: translateX(-8%);
	}
	65%{
		transform: translateX(4%);
	}
	80%{
		transform: translateX(-4%);
	}
	95%{
		transform: translateX(2%);
	}			
	100% {
		transform: translateX(0%);
	}
}

@-webkit-keyframes slideLeft {
	0% {
		-webkit-transform: translateX(150%);
	}
	50%{
		-webkit-transform: translateX(-8%);
	}
	65%{
		-webkit-transform: translateX(4%);
	}
	80%{
		-webkit-transform: translateX(-4%);
	}
	95%{
		-webkit-transform: translateX(2%);
	}			
	100% {
		-webkit-transform: translateX(0%);
	}
}

/*
==============================================
slideRight
==============================================
*/


.slideRight{
	animation-name: slideRight;
	-webkit-animation-name: slideRight;	

	animation-duration: 1s;	
	-webkit-animation-duration: 1s;

	animation-timing-function: ease-in-out;	
	-webkit-animation-timing-function: ease-in-out;		

	visibility: visible !important;	
}

@keyframes slideRight {
	0% {
		transform: translateX(-150%);
	}
	50%{
		transform: translateX(8%);
	}
	65%{
		transform: translateX(-4%);
	}
	80%{
		transform: translateX(4%);
	}
	95%{
		transform: translateX(-2%);
	}			
	100% {
		transform: translateX(0%);
	}	
}

@-webkit-keyframes slideRight {
	0% {
		-webkit-transform: translateX(-150%);
	}
	50%{
		-webkit-transform: translateX(8%);
	}
	65%{
		-webkit-transform: translateX(-4%);
	}
	80%{
		-webkit-transform: translateX(4%);
	}
	95%{
		-webkit-transform: translateX(-2%);
	}			
	100% {
		-webkit-transform: translateX(0%);
	}
}

/*
==============================================
slideExpandUp
==============================================
*/


.slideExpandUp{
	animation-name: slideExpandUp;
	-webkit-animation-name: slideExpandUp;	

	animation-duration: 1.6s;	
	-webkit-animation-duration: 1.6s;

	animation-timing-function: ease-out;	
	-webkit-animation-timing-function: ease -out;

	visibility: visible !important;	
}

@keyframes slideExpandUp {
	0% {
		transform: translateY(100%) scaleX(0.5);
	}
	30%{
		transform: translateY(-8%) scaleX(0.5);
	}	
	40%{
		transform: translateY(2%) scaleX(0.5);
	}
	50%{
		transform: translateY(0%) scaleX(1.1);
	}
	60%{
		transform: translateY(0%) scaleX(0.9);		
	}
	70% {
		transform: translateY(0%) scaleX(1.05);
	}			
	80%{
		transform: translateY(0%) scaleX(0.95);		
	}
	90% {
		transform: translateY(0%) scaleX(1.02);
	}	
	100%{
		transform: translateY(0%) scaleX(1);		
	}
}

@-webkit-keyframes slideExpandUp {
	0% {
		-webkit-transform: translateY(100%) scaleX(0.5);
	}
	30%{
		-webkit-transform: translateY(-8%) scaleX(0.5);
	}	
	40%{
		-webkit-transform: translateY(2%) scaleX(0.5);
	}
	50%{
		-webkit-transform: translateY(0%) scaleX(1.1);
	}
	60%{
		-webkit-transform: translateY(0%) scaleX(0.9);		
	}
	70% {
		-webkit-transform: translateY(0%) scaleX(1.05);
	}			
	80%{
		-webkit-transform: translateY(0%) scaleX(0.95);		
	}
	90% {
		-webkit-transform: translateY(0%) scaleX(1.02);
	}	
	100%{
		-webkit-transform: translateY(0%) scaleX(1);		
	}
}

/*
==============================================
expandUp
==============================================
*/


.expandUp{
	animation-name: expandUp;
	-webkit-animation-name: expandUp;	

	animation-duration: 0.7s;	
	-webkit-animation-duration: 0.7s;

	animation-timing-function: ease;	
	-webkit-animation-timing-function: ease;		

	visibility: visible !important;	
}

@keyframes expandUp {
	0% {
		transform: translateY(100%) scale(0.6) scaleY(0.5);
	}
	60%{
		transform: translateY(-7%) scaleY(1.12);
	}
	75%{
		transform: translateY(3%);
	}	
	100% {
		transform: translateY(0%) scale(1) scaleY(1);
	}	
}

@-webkit-keyframes expandUp {
	0% {
		-webkit-transform: translateY(100%) scale(0.6) scaleY(0.5);
	}
	60%{
		-webkit-transform: translateY(-7%) scaleY(1.12);
	}
	75%{
		-webkit-transform: translateY(3%);
	}	
	100% {
		-webkit-transform: translateY(0%) scale(1) scaleY(1);
	}	
}

/*
==============================================
fadeIn
==============================================
*/

.fadeIn{
	animation-name: fadeIn;
	-webkit-animation-name: fadeIn;	

	animation-duration: 1.5s;	
	-webkit-animation-duration: 1.5s;

	animation-timing-function: ease-in-out;	
	-webkit-animation-timing-function: ease-in-out;		

	visibility: visible !important;	
}

@keyframes fadeIn {
	0% {
		transform: scale(0);
		opacity: 0.0;		
	}
	60% {
		transform: scale(1.1);	
	}
	80% {
		transform: scale(0.9);
		opacity: 1;	
	}	
	100% {
		transform: scale(1);
		opacity: 1;	
	}		
}

@-webkit-keyframes fadeIn {
	0% {
		-webkit-transform: scale(0);
		opacity: 0.0;		
	}
	60% {
		-webkit-transform: scale(1.1);
	}
	80% {
		-webkit-transform: scale(0.9);
		opacity: 1;	
	}	
	100% {
		-webkit-transform: scale(1);
		opacity: 1;	
	}		
}

/*
==============================================
expandOpen
==============================================
*/


.expandOpen{
	animation-name: expandOpen;
	-webkit-animation-name: expandOpen;	

	animation-duration: 1.2s;	
	-webkit-animation-duration: 1.2s;

	animation-timing-function: ease-out;	
	-webkit-animation-timing-function: ease-out;	

	visibility: visible !important;	
}

@keyframes expandOpen {
	0% {
		transform: scale(1.8);		
	}
	50% {
		transform: scale(0.95);
	}	
	80% {
		transform: scale(1.05);
	}
	90% {
		transform: scale(0.98);
	}	
	100% {
		transform: scale(1);
	}			
}

@-webkit-keyframes expandOpen {
	0% {
		-webkit-transform: scale(1.8);		
	}
	50% {
		-webkit-transform: scale(0.95);
	}	
	80% {
		-webkit-transform: scale(1.05);
	}
	90% {
		-webkit-transform: scale(0.98);
	}	
	100% {
		-webkit-transform: scale(1);
	}					
}

/*
==============================================
bigEntrance
==============================================
*/


.bigEntrance{
	animation-name: bigEntrance;
	-webkit-animation-name: bigEntrance;	

	animation-duration: 1.6s;	
	-webkit-animation-duration: 1.6s;

	animation-timing-function: ease-out;	
	-webkit-animation-timing-function: ease-out;	

	visibility: visible !important;			
}

@keyframes bigEntrance {
	0% {
		transform: scale(0.3) rotate(6deg) translateX(-30%) translateY(30%);
		opacity: 0.2;
	}
	30% {
		transform: scale(1.03) rotate(-2deg) translateX(2%) translateY(-2%);		
		opacity: 1;
	}
	45% {
		transform: scale(0.98) rotate(1deg) translateX(0%) translateY(0%);
		opacity: 1;
	}
	60% {
		transform: scale(1.01) rotate(-1deg) translateX(0%) translateY(0%);		
		opacity: 1;
	}	
	75% {
		transform: scale(0.99) rotate(1deg) translateX(0%) translateY(0%);
		opacity: 1;
	}
	90% {
		transform: scale(1.01) rotate(0deg) translateX(0%) translateY(0%);		
		opacity: 1;
	}	
	100% {
		transform: scale(1) rotate(0deg) translateX(0%) translateY(0%);
		opacity: 1;
	}		
}

@-webkit-keyframes bigEntrance {
	0% {
		-webkit-transform: scale(0.3) rotate(6deg) translateX(-30%) translateY(30%);
		opacity: 0.2;
	}
	30% {
		-webkit-transform: scale(1.03) rotate(-2deg) translateX(2%) translateY(-2%);		
		opacity: 1;
	}
	45% {
		-webkit-transform: scale(0.98) rotate(1deg) translateX(0%) translateY(0%);
		opacity: 1;
	}
	60% {
		-webkit-transform: scale(1.01) rotate(-1deg) translateX(0%) translateY(0%);		
		opacity: 1;
	}	
	75% {
		-webkit-transform: scale(0.99) rotate(1deg) translateX(0%) translateY(0%);
		opacity: 1;
	}
	90% {
		-webkit-transform: scale(1.01) rotate(0deg) translateX(0%) translateY(0%);		
		opacity: 1;
	}	
	100% {
		-webkit-transform: scale(1) rotate(0deg) translateX(0%) translateY(0%);
		opacity: 1;
	}				
}

/*
==============================================
hatch
==============================================
*/

.hatch{
	animation-name: hatch;
	-webkit-animation-name: hatch;	

	animation-duration: 2s;	
	-webkit-animation-duration: 2s;

	animation-timing-function: ease-in-out;	
	-webkit-animation-timing-function: ease-in-out;

	transform-origin: 50% 100%;
	-ms-transform-origin: 50% 100%;
	-webkit-transform-origin: 50% 100%; 

	visibility: visible !important;		
}

@keyframes hatch {
	0% {
		transform: rotate(0deg) scaleY(0.6);
	}
	20% {
		transform: rotate(-2deg) scaleY(1.05);
	}
	35% {
		transform: rotate(2deg) scaleY(1);
	}
	50% {
		transform: rotate(-2deg);
	}	
	65% {
		transform: rotate(1deg);
	}	
	80% {
		transform: rotate(-1deg);
	}		
	100% {
		transform: rotate(0deg);
	}									
}

@-webkit-keyframes hatch {
	0% {
		-webkit-transform: rotate(0deg) scaleY(0.6);
	}
	20% {
		-webkit-transform: rotate(-2deg) scaleY(1.05);
	}
	35% {
		-webkit-transform: rotate(2deg) scaleY(1);
	}
	50% {
		-webkit-transform: rotate(-2deg);
	}	
	65% {
		-webkit-transform: rotate(1deg);
	}	
	80% {
		-webkit-transform: rotate(-1deg);
	}		
	100% {
		-webkit-transform: rotate(0deg);
	}		
}


/*
==============================================
bounce
==============================================
*/


.bounce{
	animation-name: bounce;
	-webkit-animation-name: bounce;	

	animation-duration: 1.6s;	
	-webkit-animation-duration: 1.6s;

	animation-timing-function: ease;	
	-webkit-animation-timing-function: ease;	
	
	transform-origin: 50% 100%;
	-ms-transform-origin: 50% 100%;
	-webkit-transform-origin: 50% 100%; 	
}

@keyframes bounce {
	0% {
		transform: translateY(0%) scaleY(0.6);
	}
	60%{
		transform: translateY(-100%) scaleY(1.1);
	}
	70%{
		transform: translateY(0%) scaleY(0.95) scaleX(1.05);
	}
	80%{
		transform: translateY(0%) scaleY(1.05) scaleX(1);
	}	
	90%{
		transform: translateY(0%) scaleY(0.95) scaleX(1);
	}				
	100%{
		transform: translateY(0%) scaleY(1) scaleX(1);
	}	
}

@-webkit-keyframes bounce {
	0% {
		-webkit-transform: translateY(0%) scaleY(0.6);
	}
	60%{
		-webkit-transform: translateY(-100%) scaleY(1.1);
	}
	70%{
		-webkit-transform: translateY(0%) scaleY(0.95) scaleX(1.05);
	}
	80%{
		-webkit-transform: translateY(0%) scaleY(1.05) scaleX(1);
	}	
	90%{
		-webkit-transform: translateY(0%) scaleY(0.95) scaleX(1);
	}				
	100%{
		-webkit-transform: translateY(0%) scaleY(1) scaleX(1);
	}		
}


/*
==============================================
pulse
==============================================
*/

.pulse{
	animation-name: pulse;
	-webkit-animation-name: pulse;	

	animation-duration: 1.5s;	
	-webkit-animation-duration: 1.5s;

	animation-iteration-count: infinite;
	-webkit-animation-iteration-count: infinite;
}

@keyframes pulse {
	0% {
		transform: scale(0.9);
		opacity: 0.7;		
	}
	50% {
		transform: scale(1);
		opacity: 1;	
	}	
	100% {
		transform: scale(0.9);
		opacity: 0.7;	
	}			
}

@-webkit-keyframes pulse {
	0% {
		-webkit-transform: scale(0.95);
		opacity: 0.7;		
	}
	50% {
		-webkit-transform: scale(1);
		opacity: 1;	
	}	
	100% {
		-webkit-transform: scale(0.95);
		opacity: 0.7;	
	}			
}

/*
==============================================
floating
==============================================
*/

.floating{
	animation-name: floating;
	-webkit-animation-name: floating;

	animation-duration: 2s;	
	-webkit-animation-duration: 2s;

	animation-iteration-count: infinite;
	-webkit-animation-iteration-count: infinite;
}

@keyframes floating {
	0% {
		transform: translateY(0%);	
	}
	50% {
		transform: translateY(5%);	
	}	
	100% {
		transform: translateY(0%);
	}			
}

@-webkit-keyframes floating {
	0% {
		-webkit-transform: translateY(0%);	
	}
	50% {
		-webkit-transform: translateY(5%);	
	}	
	100% {
		-webkit-transform: translateY(0%);
	}			
}

/*
==============================================
tossing
==============================================
*/

.tossing{
	animation-name: tossing;
	-webkit-animation-name: tossing;	

	animation-duration: 2.5s;	
	-webkit-animation-duration: 2.5s;

	animation-iteration-count: infinite;
	-webkit-animation-iteration-count: infinite;
}

@keyframes tossing {
	0% {
		transform: rotate(-4deg);	
	}
	50% {
		transform: rotate(4deg);
	}
	100% {
		transform: rotate(-4deg);	
	}						
}

@-webkit-keyframes tossing {
	0% {
		-webkit-transform: rotate(-4deg);	
	}
	50% {
		-webkit-transform: rotate(4deg);
	}
	100% {
		-webkit-transform: rotate(-4deg);	
	}				
}

/*
==============================================
pullUp
==============================================
*/

.pullUp{
	animation-name: pullUp;
	-webkit-animation-name: pullUp;	

	animation-duration: 1.1s;	
	-webkit-animation-duration: 1.1s;

	animation-timing-function: ease-out;	
	-webkit-animation-timing-function: ease-out;	

	transform-origin: 50% 100%;
	-ms-transform-origin: 50% 100%;
	-webkit-transform-origin: 50% 100%; 		
}

@keyframes pullUp {
	0% {
		transform: scaleY(0.1);
	}
	40% {
		transform: scaleY(1.02);
	}
	60% {
		transform: scaleY(0.98);
	}
	80% {
		transform: scaleY(1.01);
	}
	100% {
		transform: scaleY(0.98);
	}				
	80% {
		transform: scaleY(1.01);
	}
	100% {
		transform: scaleY(1);
	}							
}

@-webkit-keyframes pullUp {
	0% {
		-webkit-transform: scaleY(0.1);
	}
	40% {
		-webkit-transform: scaleY(1.02);
	}
	60% {
		-webkit-transform: scaleY(0.98);
	}
	80% {
		-webkit-transform: scaleY(1.01);
	}
	100% {
		-webkit-transform: scaleY(0.98);
	}				
	80% {
		-webkit-transform: scaleY(1.01);
	}
	100% {
		-webkit-transform: scaleY(1);
	}		
}

/*
==============================================
pullDown
==============================================
*/

.pullDown{
	animation-name: pullDown;
	-webkit-animation-name: pullDown;	

	animation-duration: 1.1s;	
	-webkit-animation-duration: 1.1s;

	animation-timing-function: ease-out;	
	-webkit-animation-timing-function: ease-out;	

	transform-origin: 50% 0%;
	-ms-transform-origin: 50% 0%;
	-webkit-transform-origin: 50% 0%; 		
}

@keyframes pullDown {
	0% {
		transform: scaleY(0.1);
	}
	40% {
		transform: scaleY(1.02);
	}
	60% {
		transform: scaleY(0.98);
	}
	80% {
		transform: scaleY(1.01);
	}
	100% {
		transform: scaleY(0.98);
	}				
	80% {
		transform: scaleY(1.01);
	}
	100% {
		transform: scaleY(1);
	}							
}

@-webkit-keyframes pullDown {
	0% {
		-webkit-transform: scaleY(0.1);
	}
	40% {
		-webkit-transform: scaleY(1.02);
	}
	60% {
		-webkit-transform: scaleY(0.98);
	}
	80% {
		-webkit-transform: scaleY(1.01);
	}
	100% {
		-webkit-transform: scaleY(0.98);
	}				
	80% {
		-webkit-transform: scaleY(1.01);
	}
	100% {
		-webkit-transform: scaleY(1);
	}		
}

/*
==============================================
stretchLeft
==============================================
*/

.stretchLeft{
	animation-name: stretchLeft;
	-webkit-animation-name: stretchLeft;	

	animation-duration: 1.5s;	
	-webkit-animation-duration: 1.5s;

	animation-timing-function: ease-out;	
	-webkit-animation-timing-function: ease-out;	

	transform-origin: 100% 0%;
	-ms-transform-origin: 100% 0%;
	-webkit-transform-origin: 100% 0%; 
}

@keyframes stretchLeft {
	0% {
		transform: scaleX(0.3);
	}
	40% {
		transform: scaleX(1.02);
	}
	60% {
		transform: scaleX(0.98);
	}
	80% {
		transform: scaleX(1.01);
	}
	100% {
		transform: scaleX(0.98);
	}				
	80% {
		transform: scaleX(1.01);
	}
	100% {
		transform: scaleX(1);
	}							
}

@-webkit-keyframes stretchLeft {
	0% {
		-webkit-transform: scaleX(0.3);
	}
	40% {
		-webkit-transform: scaleX(1.02);
	}
	60% {
		-webkit-transform: scaleX(0.98);
	}
	80% {
		-webkit-transform: scaleX(1.01);
	}
	100% {
		-webkit-transform: scaleX(0.98);
	}				
	80% {
		-webkit-transform: scaleX(1.01);
	}
	100% {
		-webkit-transform: scaleX(1);
	}		
}

/*
==============================================
stretchRight
==============================================
*/

.stretchRight{
	animation-name: stretchRight;
	-webkit-animation-name: stretchRight;	

	animation-duration: 1.5s;	
	-webkit-animation-duration: 1.5s;

	animation-timing-function: ease-out;	
	-webkit-animation-timing-function: ease-out;	

	transform-origin: 0% 0%;
	-ms-transform-origin: 0% 0%;
	-webkit-transform-origin: 0% 0%; 		
}

@keyframes stretchRight {
	0% {
		transform: scaleX(0.3);
	}
	40% {
		transform: scaleX(1.02);
	}
	60% {
		transform: scaleX(0.98);
	}
	80% {
		transform: scaleX(1.01);
	}
	100% {
		transform: scaleX(0.98);
	}				
	80% {
		transform: scaleX(1.01);
	}
	100% {
		transform: scaleX(1);
	}							
}

@-webkit-keyframes stretchRight {
	0% {
		-webkit-transform: scaleX(0.3);
	}
	40% {
		-webkit-transform: scaleX(1.02);
	}
	60% {
		-webkit-transform: scaleX(0.98);
	}
	80% {
		-webkit-transform: scaleX(1.01);
	}
	100% {
		-webkit-transform: scaleX(0.98);
	}				
	80% {
		-webkit-transform: scaleX(1.01);
	}
	100% {
		-webkit-transform: scaleX(1);
	}		
}

/*
======================
glitch
======================
*/

.glitch {
color: white;
font-size: 100px;
position: relative;
width: 400px;
margin: 0 auto;
}

@keyframes noise-anim {
$steps: 20;
@for $i from 0 through $steps {
    #{percentage($i * calc(1 / $steps))} {
    $top: random(100);
    $bottom: random(101 - $top);
    clip-path: inset($top% 0 $bottom%  0);
    }
}
}

.glitch::after {
content: attr(data-text);
position: absolute;
left: 2px;
text-shadow: -1px 0 red;
top: 0;
color: white;
background: black;
overflow: hidden;
animation: noise-anim 2s infinite linear alternate-reverse;
}

@keyframes noise-anim-2 {
$steps: 20;
@for $i from 0 through $steps {
    #{percentage($i * calc(1 / $steps))} {
    $top: random(100);
    $bottom: random(101 - $top);
    clip-path: inset($top% 0 $bottom%  0);
    }
}
}
.glitch::before {
content: attr(data-text);
position: absolute;
left: -2px;
text-shadow: 1px 0 blue;
top: 0;
color: white;
background: black;
overflow: hidden;
animation: noise-anim-2 15s infinite linear alternate-reverse;
}

/*
==================================
glitchhover
==================================
*/

.glitchhover {
font-size: 130px;
line-height: 1;
font-family: 'Poppins', sans-serif;
font-weight: 700;
position:absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
margin: 0;
text-decoration: none;
color: #fff;
&:before,
&:after{
    display: block;
    content: attr(value);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: .8;
}
&:after {
    color: #f0f;
    z-index: -2;
}
&:before {
    color: #0ff;
    z-index: -1;
}
&:hover {
    &:before {
    animation: glitch-left .3s cubic-bezier(.25, .46, .45, .94) both infinite
    }
    &:after {
    animation: glitch-left-2 .3s cubic-bezier(.25, .46, .45, .94) reverse both infinite
    }
}
.small & {
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 2px;
    &:before,
    &:after{
    content: 'Start';
    }
    &:after {
    color: #F40080;
    }
    &:before {
    color: #7FA500;
    }
    &:hover {
    &:before {
        animation: glitch-small .5s cubic-bezier(.25, .46, .45, .94) both infinite
    }
    &:after {
        animation: glitch-small .5s cubic-bezier(.25, .46, .45, .94) reverse both infinite
    }
    }
}
.medium & {
    font-size: 40px;
    letter-spacing: 2px;
    text-align: center;
    color: #4222F1;
    &:before,
    &:after{
    content: 'CSS Glitch';
    }
    &:after {
    color: #C487C2;
    }
    &:before {
    color: #00FF02;
    }
    &:hover {
    &:before {
        animation: glitch-medium .5s cubic-bezier(.25, .46, .45, .94) both infinite
    }
    &:after {
        animation: glitch-medium .5s cubic-bezier(.25, .46, .45, .94) reverse both infinite
    }
    }
}
}
@keyframes glitch-small {
    0% {
        transform: translate(0)
    }
    33% {
        transform: translate(2px, 1px)
    }
    66% {
        transform: translate(-1px, -1px)
    }
    to {
        transform: translate(0)
    }
}
@keyframes glitch-medium {
    0% {
        transform: translate(0)
    }
    20% {
        transform: translate(-2px, 2px)
    }
    40% {
        transform: translate(-2px, -2px)
    }
    60% {
        transform: translate(2px, 2px)
    }
    80% {
        transform: translate(2px, -2px)
    }
    to {
        transform: translate(0)
    }
}
@keyframes glitch-left {
    0% {
        transform: translate(0)
    }
    33% {
        transform: translate(-5px, 3px)
    }
    66% {
        transform: translate(5px, -3px)
    }
    to {
        transform: translate(0)
    }
}
@keyframes glitch-left-2 {
    0% {
        transform: translate(0)
    }
    33% {
        transform: translate(-5px, -3px)
    }
    66% {
        transform: translate(5px, 2px)
    }
    to {
        transform: translate(0)
    }
}

/*
==============================================
navegating
==============================================
*/

.navegating{
	animation-name: navegating;
	-webkit-animation-name: navegating;

	animation-duration: 2.5s;	
	-webkit-animation-duration: 2.5s;

	animation-iteration-count: infinite;
	-webkit-animation-iteration-count: infinite;
}

@keyframes navegating {
	0% {
		transform: translateY(0%) rotate(0deg);	
		// transform: rotate(0deg);
	}
	50% {
		transform: translateY(3%) rotate(-3deg);
		// transform: rotate(2deg);	
	}	
	100% {
		transform: translateY(0%) rotate(0deg);
		// transform: rotate(0deg);
	}			
}

@-webkit-keyframes navegating {
	0% {
		-webkit-transform: translateY(0%) rotate(0deg);	
		// -webkit-transform: rotate(0deg);
	}
	50% {
		-webkit-transform: translateY(5%) rotate(5deg);	
		// -webkit-transform: rotate(2deg);
	}	
	100% {
		-webkit-transform: translateY(0%) rotate(0deg);
		// -webkit-transform: rotate(0deg);
	}			
}
`

export default GlobalStyle
