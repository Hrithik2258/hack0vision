import React from 'react';
import { Link } from 'react-router-dom';
import './PaymentLayout.css';
import '../../containers/Payment/Qr'


const PaymentLayout = () => (
  <div to='/paymentlayout' className="gpt3__cta">

    <div className="gpt3__cta-content">
     
      <h3>Please Go through the Terms and Condition</h3>
    </div>
    <div className="gpt3__cta-btn">
      <button 
  onClick={() => window.location = "https://condition-terms.netlify.app//"}
       >Visit Here</button>
    </div>

  </div>
);

export default PaymentLayout ;