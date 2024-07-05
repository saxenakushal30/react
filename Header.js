import React from 'react';
import {Link} from "react-router-dom"
 
const Header = () => {
  return <>
  <nav>Get ready to complete your daily Goals </nav>


  <div className="header">
    <Link to ="/">Home</Link>
    <Link to ="/about">About</Link>
    <Link to ="/contact">Contact</Link>
    <Link to ="/User/tempId">User</Link>
    </div>

  </>;
  
};
export default Header;


