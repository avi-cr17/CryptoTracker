import './App.css';
import Nav from './components/Nav';
import center from './images'




function App() {
  return (
    <div className="row " >
      <div className="col-11 images" >
      
      <div className="h-100 w-100 d-flex justify-content-center align-items-center"  >

      <img src={center}/>
      <img src={center}/>
      <img src={center} />



      </div>

      </div>

      <div className="col-1 navbar" >
        <Nav  />  
      </div>
      
      
    </div>
  );
}

export default App;
