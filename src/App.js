import './App.css';
import Nav from './components/Nav';
import center from './collection/center.png'
import left from './collection/left.jpg'
import right from './collection/right.jpg'
import {useState} from 'react';


function App() {

  const [l,setL]=useState('3');
  const [c,setC]=useState('6');
  const [r,setR]=useState('3');

  return (
    <div className="row g-0" >
      <div className="col-11 images " >
      
      <div className="h-100 w-100 row g-0"  >

      <img src={left} className={`img col-`+l}  
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
