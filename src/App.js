import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import center from './collection/center.png'
import left from './collection/left.jpg'
import right from './collection/right.jpg'
import {useEffect, useRef, useState } from 'react';

import {TweenMax,Power3} from 'gsap'
import { TimelineLite } from 'gsap/gsap-core';
import {useNavigate} from 'react-router-dom';



function App() {

  const navigate = useNavigate();
  const centerImageClick=()=>{
  navigate('/chart');
  }

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
    <div className="row g-0 h-100 w-100" ref={el=> app=el}>
      <div className="col-12 images " >
      
      <div className=" row g-0"  >

      <img src={left} className={`img col-md-`+l +` col-sm-8`} 
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
      <img src={center} className={`img col-md-`+c +` col-sm-8`}
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
      onClick={centerImageClick}
      />
      
      <img src={right} className={`img2 col-md-`+r +` col-sm-8`}
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

      
      
      
    </div>
  );
}

export default App;
