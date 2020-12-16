import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap} from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {Power4,Back} from "gsap/all"
import { stagger } from '@angular/animations';

gsap.registerPlugin(ScrollTrigger,Power4,Back);

 
 
// don't forget to register plugins
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "Americo's Website";
  @ViewChild("cont") content: ElementRef

  ngOnInit(){
    this.animate();
  }

  animate(){
   var tl = gsap.timeline()

   tl.from('.content', {
     y:'-30%',
     opacity: 0,
     duration: 2,
     ease: Power4.easeOut
   })

   tl.from('.stagger1',{
     opacity:0,
     y:-50,
     stagger:.3,
     duration: 2,
     ease: Power4.easeOut
   }, "-=1.5")

   tl.from('.hero-design',{
     opacity: 0,
     y:50,
     duration: 2,
     ease: Power4.easeOut
   },"-=2")

   gsap.from(".square-anim",{
     stagger: .2,
     scale: .01,
     duration: 1,
     ease: Back.easeOut.config(1.7)
   })

   gsap.from(".transition2",{
     scrollTrigger:{
       trigger:'.transition2',
       start: "top bottom"
     },
     y:50,
     opacity:0,
     duration: 1.2,
     stagger:.3
   })

   gsap.from(".transition3",{
    scrollTrigger:{
      trigger:'.transition3',
      start: "top bottom"
    },
    y:50,
    opacity:0,
    duration: 1.2,
    stagger:.3
  })

  }

  
  
}

