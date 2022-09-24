import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './PaymentLayout';
import PaymentLayout from './PaymentLayout';
import Qr from './Qr';

const Payment = () => {
  return (
 
        <div>
        
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/qr' element={<Qr/>} />
                    <Route path='/paymentlayout' element={<PaymentLayout/>} />
             
                </Routes>
            </Router>
        </div>
      )
    }


export default Payment