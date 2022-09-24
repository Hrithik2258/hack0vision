
import './Animated.css';
import React,{useState} from 'react';

const Animated = () => {
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
    <div className='container'>
          <div className="box">
            <div className="form">
                <h2>Register form </h2>
                <div className="inputBox">
                    <input type="text" required="required" name="collegename"  placeholder='College Name'   value={user.collegename}  onChange={getUserData} />
                    <span>College Name</span>
                    <i></i>
                </div>
                
                <div className="inputBox">
                    <input type="email"  name="emailid"   value={user.emailid}  onChange={getUserData} required="required"/>
                    <span>Team Email</span>
                    <i></i>
                </div>

                <div className="inputBox">
                    <input type="number"  name="phoneno"    value={user.phoneno} onChange={getUserData} 
 required="required"/>
                    <span>Phone No</span>
                    <i></i>
                </div>
                <div className="inputBox">
                    <input type="number"  name="alternatephoneno"    value={user.alternatephoneno}  onChange={getUserData}
 required="required"/>
                    <span>Alternate Phone No</span>
                    <i></i>
                </div>
                <div className="inputBox">
                <input type="text"   name="teammember1"     value={user.teammember1} onChange={getUserData}/>  
                    <span>Team Member 1</span>
                    <i></i>
                </div>
                <div className="inputBox">
                <input type="text"   name="teammember2"     value={user.teammember2} onChange={getUserData}/>  

                    <span>Team Member 2</span>
                    <i></i>
                </div>
                <div className="inputBox">
                <input type="text"   name="teammember3"     value={user.teammember3} onChange={getUserData}/>  

                    <span>Team Member 3</span>
                    <i></i>
                </div>
                <div className="inputBox">
                <input type="text"   name="teammember4"     value={user.teammember4} onChange={getUserData}/>  
                    <span>Team Member 4</span>
                    <i></i>
                </div>
                <div className="inputBox">
                <input type="text"   name="teammember5"     value={user.teammember5} onChange={getUserData}/>  
                    <span>Team Member 5</span>
                    <i></i>
                </div>
              {/* <input type="button"  onClick={postData}/> */}
                <button type="button" onClick={postData}>Submit</button>
            </div>
    </div>
    </div>
  )
}

export default Animated