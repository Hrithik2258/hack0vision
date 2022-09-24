import React from 'react';
import './App';
import './App.css';
import '../src/containers/Payment/Qr';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import App from './App';
import Terms from './containers/Terms/Terms'
import Anikta from './containers/Ankita/Ankita';
import Foram from './containers/foram/Foram';
import Ritesh from './containers/Ritesh/Ritesh';
import Kavita from './containers/Kavita/Kavita';
import Sibaram from './containers/Sibaram/Sibaram';

const Main = () => {
  return (
    <div>
        <Router>
           <Routes>
        <div className="App">
      
      <div className="gradient__bg">
           <Route path="/" element={<App/>}/>
            <Route path="/terms" element={<Terms/>}/>
            <Route path="/ankita" element={<Anikta/>}/>
            <Route path="/foram" element={<Foram/>}/>
            <Route path="/ritesh" element={<Ritesh/>}/>
            <Route path="/kavita" element={<Kavita/>}/>
            <Route path="/sibaram" element={<Sibaram/>}/>
          
           </div> </div>
           </Routes>
        </Router>
    </div>
  )
}

export default Main