import React from 'react';

import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="hackavision__header section__padding" id="home">
    
    <div className="hackavision__header-content">

   
      <h1 className="gradient__text">WHAT IS  HACK '0' VISION</h1>
   
<p>"hackavision is the hacakthon which is being organised by the laxmi institute of technology where , students can show
other information are required for adding the further details"
  </p>

  </div>
    

    <div className="hackavision__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;