import React from 'react'
import { useNavigate } from "react-router-dom";


const Navbar = () => {
const navigate = useNavigate();
 
  return (
    <div className='nav'>
      
      <div className='content'>
        <p onClick={() => { navigate("/") }}>Hem </p>
        
      </div>
         
    </div>
  )
}

export default Navbar;