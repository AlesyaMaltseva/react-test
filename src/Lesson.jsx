import { useState } from 'react'
import { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { CustomEase } from "gsap/CustomEase";
// CustomBounce requires CustomEase
import { CustomBounce } from "gsap/CustomBounce";
// CustomWiggle requires CustomEase
import { CustomWiggle } from "gsap/CustomWiggle";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
    
import { Draggable } from "gsap/Draggable";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { Flip } from "gsap/Flip";
import { GSDevTools } from "gsap/GSDevTools";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { Observer } from "gsap/Observer";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
import { PhysicsPropsPlugin } from "gsap/PhysicsPropsPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(useGSAP,Draggable,DrawSVGPlugin,EaselPlugin,Flip,GSDevTools,InertiaPlugin,MotionPathHelper,MotionPathPlugin,MorphSVGPlugin,Observer,Physics2DPlugin,PhysicsPropsPlugin,PixiPlugin,ScrambleTextPlugin,ScrollTrigger,ScrollSmoother,ScrollToPlugin,SplitText,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase,CustomBounce,CustomWiggle);




export default function Lesson() {
 
useGSAP(() => {    
// gsap.to(".green", {rotation: 360, x: 100, duration: 1, repeat:1});

// // target the element with a class of "blue" - rotate and move FROM 100px to the left, TO 100px to the right over the course of 1 second. 
// gsap.fromTo(".blue", {rotation: -360, x: -500},{rotation: 360, x: 100, duration: 1});

// // target the element with a class of "purple" - rotate and move FROM 100px to the left over the course of 1 second. 
// gsap.from(".purple", {rotation: -360, x: -300, duration: 1, repeat:1});

// gsap.to(".mybox", {x:() => window.innerWidth / 5, backgroundColor:"red", scale:1.5, opacity:0.5, rotation:180, duration: 0.5, repeat:1, yoyo:true,  xPercent: -100, delay:0.2, ease: CustomEase.create("custom", "M0,0 C0.104,0.204 0.492,0.575 1,0.575")});
gsap.to(".mybox", {
y: 100,
duration:.5, 
delay:0.3, 
opacity:1,
ease: "power1.inOut",
  stagger: {
    grid: [7,15],
    from: "left",
    amount: 1.5
  }
});

gsap.from("#top-menu a", {
duration:2, 
delay:0.3, 
stagger: 0.1,
ease: CustomBounce.create("myBounce", {
strength:0.7,
endAtStart:false,
squash:1,
squashID: "myBounce-squash"}),
y: -100
})

gsap.to("#top-menu a", 
  {opacity:1, duration:2}  
)

})



return <>

{/* <div class="box gradient-green green"></div>
<div class="box gradient-purple purple"></div>
<div class="box gradient-blue blue"></div> */}

<div id="page">

  <div id="top-menu">
    <a>Информация</a>
    <a>Проекты</a>
    <a>Контакты</a>
  </div>
  
  <div class="boxes">
    <div class="mybox"></div>
    <div class="mybox"></div>
    <div class="mybox"></div>
    <div class="mybox"></div>
    <div class="mybox"></div>
  </div>

</div>

    </>
}