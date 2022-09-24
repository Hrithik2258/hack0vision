import React ,{useState} from 'react';
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import './navbar.css';
// import logo from '../../assets/logo.'
import logo from '../../assets/hackathon.png';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="hackavision__navbar">
      <div className="hackavision__navbar-links">
        <div className="hackavision__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="hackavision__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#sponsers">Sponsers</a></p>
          <p><a href="#whackavision">Possibilites</a></p>
        
         
        </div>
      </div>
    
      <div className="hackavision__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="hackavision__navbar-menu_container scale-up-center">
          <div className="hackavision__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#whackavision">What is hackavision?</a></p>
             <p><a href="#sponsers">Sponsers</a></p>
          
          </div>
         
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;