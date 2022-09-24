import React,{useState} from 'react';
import './register.css';


const Register = () => {
  const [user,setUser] = useState(
    {
      collegename : " ",
      emailid:"",
      phoneno:"",
      alternatephoneno:"",
      teammember1:"",
      teammember2:"",
      teammember3:"",
      teammember4:"",
      teammember5:"",
    }
      );
      let name, value;
      const getUserData = (event) => {
          name = event.target.name;
          value = event.target.value;
  
          setUser({ ...user, [name]: value });
      };
      const postData = async (e) => {
          e.preventDefault();
  
  
          const { collegename,
            phoneno,
            alternatephoneno,
            emailid,
            teammember1,
            teammember2,
            teammember3,
            teammember4,
            teammember5,  } = user;
          const res = await fetch('https://hackathon-79bc0-default-rtdb.firebaseio.com//hackavision.json',
              {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                  collegename,
                  phoneno,
                  alternatephoneno,
                  emailid,
                  teammember1,
                  teammember2,
                  teammember3,
                  teammember4,
                  teammember5,
                  }),
              }
          );
          if (res) {
              setUser
                  ({
                      name: "",
                      email: "",
                      car: "",
                      phone: "",
                      carno: "",
                      service: "",
                  });
              alert("Form has been Registered ")
          }
  
      }
  
     
  return (
    
    <>
  <div className="hackavision__whackavision section__margin" >
    <div className="hackavision__whackavision-feature">
    <div className="gpt3__header-content__input">

    <div className='gpt3__features-heading'  >
      <h1 className='gradient__text'>To Register Fill This Form</h1></div>
    <br />
    <br />
      <form action="" method='POST'>

   
      <input type="text"   name="collegename"   placeholder="Enter Your College Name" value={user.collegename}  onChange={getUserData} />  <br />  <br />
        <input type="email"   name="emailid"   placeholder="Your Team leader Email" value={user.emailid}  onChange={getUserData} />  <br />  <br />
        <input type="number"   name="phoneno"   placeholder="Your Team leader Phone No"  value={user.phoneno} onChange={getUserData}/>  <br />  <br />
        <input type="number"   name="alternatephoneno"   placeholder="Alternate Phone No" value={user.alternatephoneno}  onChange={getUserData} />  <br />  <br />
        <input type="text"   name="teammember1"   placeholder="Team Member 1"  value={user.teammember1} onChange={getUserData}/>  <br />  <br />
        <input type="text"  name="teammember2"    placeholder="Team Member 2"  value={user.teammember2} onChange={getUserData}/>  <br />  <br />
        <input type="text"   name="teammember3"   placeholder="Team Member 3"  value={user.teammember3} onChange={getUserData}/>  <br />  <br />
        <input type="text"   name="teammember4"   placeholder="Team Member 4" value={user.teammember4}  onChange={getUserData} />  <br />  <br />
        <input type="text"   name="teammember5"   placeholder="Team Member 5" value={user.teammember5}  onChange={getUserData} />
        <br />  <br />
        <button type="button" onClick={postData}>Submit</button>
      </form>
      </div>
    </div>
    </div>
    </>
 


 
  )
}

export default Register