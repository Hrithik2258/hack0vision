import React from 'react'
import { Link } from 'react-router-dom';
import { blog01, blog02, blog03, blog04, blog05 } from '../../containers/mentor/import';
import Kavita from '../Kavita/Kavita';
import './card.css'
const Card = () => {
  return (
    <div className="gpt3__blog section__padding">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text"> A true Advice From Your Mentor <br />
      will Lead You To the Success</h1>
        <div className="wrapper">


	<div className="cards_wrap">
		<div className="card_item">
			<div className="card_inner">
				<img src={blog01}/>
				<div className="role_name">Pinal Hansora</div>
			  <button  
			  onClick={() => window.location = 'https://Pinal-Hansora.netlify.app'} >Visit Here</button>	
				</div>
		</div>
		<div className="card_item">
			<div className="card_inner">
				<img src={blog01}/>
				<div className="role_name">Kavita Joshi</div>
			  <button  
			  onClick={() => window.location = './kavita'}
			   >Visit Here</button>	
				</div>
		</div>
		<div className="card_item">
			<div className="card_inner">
				<img src={blog01}/>
				<div className="role_name">Foram Patel</div>
                <button   onClick={() => window.location = 'https://foram-pateljsx.netlify.app'} >Visit Here</button>
				
				
			</div>
		</div>
		<div className="card_item">
			<div className="card_inner">
				<img src={blog01}/>
				<div className="role_name">Vrunda J Patel</div>
                <button  onClick={() => window.location = 'https://vrunda-patel.netlify.app/'} >Visit Here</button>
			
			</div>
		</div>
		<div className="card_item">
			<div className="card_inner">
				<img src={blog01}/>
				<div className="role_name">Viral Prajapati</div>
		<button  onClick={() => window.location = 'https://viral-prajapati.netlify.app'} >Visit Here</button>
				
			</div>
		</div>
		<div className="card_item">
			<div className="card_inner">
				<img src={blog01}/>
				<div className="role_name">Ankita Rachh</div>
					<button onClick={() => window.location = 'https://ankita-rachh.netlify.app'} >Visit Here</button>
				
			</div>
		</div>
		<div className="card_item">
			<div className="card_inner">
				<img src={blog01}/>
				<div className="role_name">Sibaram Raut</div>
				<button onClick={() => window.location = 'https://sibaram.netlify.app'}  >Visit Here</button>
			
			</div>
		</div>
		<div className="card_item">
			<div className="card_inner">
				<img src={blog01}/>
				<div className="role_name">Pooja Bharti</div>
				<button  onClick={() => window.location = 'https://pooja-bharti.netlify.app'} >Visit Here</button>
				
			</div>
		</div>
		<div className="card_item">
			<div className="card_inner">
				<img src={blog01}/>
				<div className="role_name">Rohan Desai</div>
                <button  onClick={() => window.location = 'https://rohan-desai.netlify.app'} >Visit Here</button>
			
			</div>
		</div>
		
		<div className="card_item">
			<div className="card_inner">
				<img src={blog01}/>
				<div className="role_name">Ritesh Chauhan</div>
                <button  onClick={() => window.location = 'https://ritesh-chauhan.netlify.app'} >Visit Here</button>
			
			</div>
		</div>
	</div>
</div>  

    </div>
    </div>

  )
}

export default Card