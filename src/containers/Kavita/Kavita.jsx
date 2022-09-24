import React from 'react';
import { Link } from 'react-router-dom';
import ai from '../../assets/ai.png'

import './kavita.css';

const Kavita = () => (
 <Link to='/kavita'>
 
 
 
 <div className="hackavision__header section__padding">
    
    <div className="hackavision__header-content">

   
      <h1 className="gradient__text">Kavita Ashokkumar Joshi</h1>
   
<p>Qualification:-M.E. Computer Science & Engineering</p>
<br />
<p>Specialization :- Web-development ,Angular ,Node js , PHP</p>
<br />
<p>BE:-  Completed from BMCET ( Gujarat Technological University)</p> <br />
<p>ME:- Completed  from JNU ,Rajasthan</p> <br />
<p>Experiance :- 9+ years in Engeneering </p>
<p>Designation :- Assistent Proffesor </p>

  </div>
    

    <div className="hackavision__header-image">
      <img src={ai} />
    </div>
  </div>
 
 </Link>
);

export default Kavita;