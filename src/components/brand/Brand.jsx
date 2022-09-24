import React from 'react';
import './brand.css';
import { dropbox, shopify, slack, google, atlassian,Rnd } from './import'


const Brand = () => {
  return (
    <div className="hackavision__brand section__padding" id='sponsers'>
        <div>
        <img src={google} alt='google'/>
       </div>
        <div>
        <img src={slack} alt='slack'/>
       </div>
        <div>
        <img src={shopify} alt='shopify'/>
       </div>
        <div>
        <img src={dropbox} alt='dropbox'/>
       </div>
        <div>
        <img src={atlassian} alt='atlassain'/>
       </div>

        <div>
        <img src={Rnd} alt='Rnd' href='https://www.rndtechnosoft.com/'/>
       </div>
    </div>
  )
}

export default Brand