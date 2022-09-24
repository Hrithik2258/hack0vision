import React from 'react';
import Feature from '../../components/feature/Feature';
import './hackovision.css';

const whackavision = () => (
  <div className="hackavision__whackavision section__margin" id="whackavision">
    <div className="hackavision__whackavision-feature">
      <Feature title="What is Hack'0'Vision" text="hackavision is the hacakthon which is being organised by the laxmi institute of technology where , students can show other information are required for adding the further details" />
    </div>
    <div className="hackavision__whackavision-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
   
    </div>
    <div className="hackavision__whackavision-container">
      <Feature title="EXPERIANCE" text="You will get the end less opportionities and can also gain the experiance and will help you towards forward Journey" />
      <Feature title="Guidance" text="You will get the guidance with the experianced faculty of the the college with that you can in hance the performace of yours" />
      <Feature title="Certificate" text="Not only that you can also get the certificate which will be accepetd in GTU and which will help you to gain some important points to achieve the degree" />
    </div>
  </div>
);

export default whackavision;