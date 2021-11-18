import './App.css';
import Nav from './components/Nav';
import center from './collection/center.png'
import left from './collection/left.jpg'
import right from './collection/right.jpg'
import {useEffect, useRef, useState} from 'react';

import {TweenMax,Power3} from 'gsap'
import { TimelineLite } from 'gsap/gsap-core';


function App() {

  let app = useRef(null);
  let leftimg = useRef(null);
  let centerimg = useRef(null);
  let rightimg = useRef(null);

  let tl = new TimelineLite();

  useEffect(()=>{
    TweenMax.to(app,0,{css:{visibility:'visible'}})
    console.log('yes');

    tl.from(leftimg,1.2,{x:12000,ease: Power3.easeInOut})
      .from(leftimg,2,{scale:1.6, ease: Power3.easeOut},1)
      .from(centerimg,1.2,{x:2200,ease: Power3.easeInOut},3.0)
      .from(centerimg,2,{scale:1.6, ease: Power3.easeOut}, 1)
      .from(rightimg,1.2,{x:3200,ease: Power3.easeInOut},4.0)
      .from(rightimg,2,{scale:1.6, ease: Power3.easeOut}, 1)


  },[])

  const [l,setL]=useState('3');
  const [c,setC]=useState('6');
  const [r,setR]=useState('3');

  return (
    <div className="row g-0" ref={el=> app=el}>
      <div className="col-11 images " >
      
      <div className="h-100 w-100 row g-0"  >

      <img src={left} className={`img col-`+l} 
       ref={el=> leftimg=el} 
      onMouseEnter={()=>{
        setL('4');
        setC('6');
        setR('2');
      }}   
      onMouseLeave={()=>{
        setL('3');
        setC('6');
        setR('3');

      }}
      
      />
      <img src={center} className={`img col-`+c}
       ref={el=> centerimg=el}
      onMouseEnter={()=>{
        setL('2');
        setC('8');
        setR('2');
      }}   
      onMouseLeave={()=>{
        setL('3');
        setC('6');
        setR('3');

      }}
      />
      <img src={right} className={`img col-`+r}
       ref={el=> rightimg=el}
      onMouseEnter={()=>{
        setL('2');
        setC('6');
        setR('4');
      }}   
      onMouseLeave={()=>{
        setL('3');
        setC('6');
        setR('3');

      }}
      />



      </div>

      </div>

      <div className="col-1 navbar" >
        <Nav  />  
      </div>
      
      
    </div>
  );
}

export default App;
