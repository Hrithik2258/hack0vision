import React from 'react';
import qr from '../../assets/qr.png';
import '../header/header.css';

const Qr = () => {
  return (
    <div>
       <div className="hackavision__header section__padding" id="home">
    
    <div className="hackavision__header-content">

   
      <h1 className="gradient__text">Step to Follow when you fill this form </h1>
   
<p>1. Make a payment by by scanning this qr code</p>
<br />
<p>2. Send screen shot to given below email adress along with the  college name and team members</p>
<br />
<p> we will wait for Further details.... </p>

  </div>
    

    <div className="hackavision__header-image">
      <img src={qr} />
    </div>
  </div>
    </div>
  )
}

export default Qr