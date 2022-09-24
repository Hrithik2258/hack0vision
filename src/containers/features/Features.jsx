import React from 'react';
import ReactPlayer from 'react-player';
import './fetures.css'

const Videoplayer = () => {
  return (
<div className='hash'>


<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
  <ReactPlayer height="600px" width='1000px' justifycontent="center"
// controls url='https://www.youtube.com/watch?v=pEWZQF-iTU8&t=129s' 
controls url='https://www.youtube.com/watch?v=uILXl6BCYJ4' 
// controls url='https://www.youtube.com/watch?v=5Eqb_-j3FDA' 
onReady={() => console.log('onReady call back')}
onStart={() => console.log('onStart call back')}
onPause={() => console.log('onPause call back')}
onEnded={() => console.log('onEnded call back')}
onError={() => console.log('onError call back')}
/>
  </div>
</section>






  </div>
 )
}

export default Videoplayer