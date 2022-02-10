


import center from './collection/img4.png'
import right from './collection/img.png'
import left from './collection/ing5.png'
import {useEffect, useRef, useState } from 'react';

import {TweenMax,Power4,Power3,gsap,Expo,Circ,Bounce} from 'gsap'
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

  var tll = gsap.timeline();

  useEffect(()=>{
    TweenMax.to(app,0,{css:{visibility:'visible'}})
    console.log('yes');

    

  tll.from('body',{scale:1,duration:1,opacity:0,ease:Circ.easeIn,delay:0.2})
  .from(leftimg,{x:1500,duration:2,ease:Power4.easeOut,delay:0.2})
  .from(centerimg,{x:2000,duration:2,ease:Power4.easeOut,delay:0.2})
  .from(rightimg,{x:1400,duration:3,ease:Circ.easeOut,delay:0.2})
  .to('svg',{clipPath:'polygon(0 0, 100% 0, 100% 100%, 0 100%)', ease:Power4.easeOut,duration:2,delay:1})
  .to('svg',{clipPath:'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',ease:Circ.easeOut,duration:2,delay:0.3})
  .to('.heading',{opacity: 1,ease:Circ.easeOut,duration:2,delay:0.5})
  


  },[])

  const [l,setL]=useState('3');
  const [c,setC]=useState('6');
  const [r,setR]=useState('3');

  return (
    <div className="row g-0 no-gutters h-100 w-100" ref={el=> app=el}>
      <div className="col-12 images " >
      
      <div className=" row g-0 no-gutters"  >

      <div  className={`img col-md-`+l +` col-sm-8`} 
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
      
      >

      </div>
      <div  className={`img3 col-md-`+c +` col-sm-8`}
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
      >
        <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="128" height="437" viewBox="0 0 128 437" fill="none">

        <path d="M63 436.967L127.859 327.758L0.851345 326.193L63 436.967ZM75.2187 338.11L79.3701 1.13551L57.3718 0.864496L53.2204 337.839L75.2187 338.11Z" fill="#FF2222"/>
        </svg>

        <p className='heading'>Crypto Charts</p>
        
      </div>
      
      <div className={`img2 col-md-`+r +` col-sm-8`}
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
      >

      </div>



      </div>

      </div>

      
      
      
    </div>
  );
}

export default App;
