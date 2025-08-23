import { useState } from 'react'
import { useRef } from 'react';
import { gsap } from "gsap"
import {useGSAP } from '@gsap/react';

//gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 




export default function Lesson() {
// This is a Tween
// gsap.to(".box", { rotation: 27, x: 100, duration: 1 });

// // And this is a Timeline, containing three sequenced tweens
// let tl = gsap.timeline();
// tl.to("#green", {duration: 1, x: 786})
//   .to("#blue", {duration: 2, x: 786})
//   .to("#orange", {duration: 1, x: 786})


  // target the element with a class of "green" - rotate and move TO 100px to the left over the course of 1 second. 
useGSAP(() => {    
gsap.to(".green", {rotation: 360, x: 100, duration: 1, repeat:1});

// target the element with a class of "blue" - rotate and move FROM 100px to the left, TO 100px to the right over the course of 1 second. 
gsap.fromTo(".blue", {rotation: -360, x: -500},{rotation: 360, x: 100, duration: 1});

// target the element with a class of "purple" - rotate and move FROM 100px to the left over the course of 1 second. 
gsap.from(".purple", {rotation: -360, x: -300, duration: 1, repeat:1});

gsap.to(".mybox", {x:() => window.innerWidth / 5, backgroundColor:"red", y:50, scale:1.5, opacity:0.5, rotation:180, duration: 0.5, repeat:1, yoyo:true, ease:2, xPercent: -100, delay:0.2});
})


return <>

<div class="box gradient-green green"></div>
<div class="box gradient-purple purple"></div>
<div class="box gradient-blue blue"></div>

<div class="mybox"></div>

    </>
}