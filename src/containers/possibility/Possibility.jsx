// import React from 'react'
// import './possibility.css';
// import possibilityImage  from'../../assets/possibility.png'
// const Possibility = () => {
//   return (
// <div className="hackavision__possibility section__padding">
//   <div className='hackavision__possibility-image'>
//     <img src={possibilityImage} alt="possibility" />
//   </div>
//   <div className="hackavision__possobility-content">
//     <h1 className='gradient__text'>This November Experience Something New</h1>
//     <p className='gradient__para'>hackavision will provide you a end less opportinity that will enhance your coding skills as well as the thinking process</p>
//     <h1 className='gradient__text'>So be Ready!!!</h1>
//      </div>

// </div>
//   )
// }

// export default Possibility

import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
   
      <h1 className="gradient__text">This November Experience Something New</h1>
    
      <p>Artificial Intelligence</p>
      <p>Machine Learning </p>
      <p>Deep Learning</p>
      <p>App Development</p>
      <p>Web-App Development</p>
      <h3 className='gradient__text'>Comming soon!!!</h3>
    </div>
  </div>
);

export default Possibility;