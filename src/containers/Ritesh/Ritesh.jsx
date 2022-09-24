import React from 'react';

import blog01 from '../../assets/blog01.png';
import './ritesh.css';

const Ritesh = () => (
  <div className="hackavision__header section__padding" id="home">
    
    <div className="hackavision__header-content">

   
      <h1 className="gradient__text">Ritesh K. Chauhan</h1>
   
<p>Qualification:-M.E. Computer Science & Engineering</p>
<br />
<p>Specialization :- Networking (Linux) , Web-Development</p>
<br />
<p>BE:-  Completed in 2011 from Parul University</p> <br />
<p>ME:- Completed in 2013 from Parul University</p> <br />
<p>Experiance :- 8.8 years in Engeneering </p>
<p>Designation :- Assistent Proffesor </p>

  </div>
    

    <div className="hackavision__header-image">
      <img src={blog01} />
    </div>
  </div>
);

export default Ritesh;