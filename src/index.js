import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';

import {BrowserRouter} from 'react-router-dom';
import {Routes,Route} from 'react-router-dom';
import Nav from './components/Nav';



ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
  
  <div className="row g-0" >
  <div className="col-md-11 col-sm-8" >
  <Routes>  
  <Route path="/" element={<App />} />
  <Route path="*" element={<App />} />
  </Routes>
  </div>
      <div className="col-md-1 navbar d-none d-md-block d-xl " >
        <Nav  />  
      </div>

      </div>
  
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
