import React from 'react';
import logo from '../sunny.svg';


const NavBar = () => {
    return ( 
        <header className ="navbar">
            <img alt="food" src={logo} />
            <h1>Weather Application</h1>
        </header>
     );
}
 
export default NavBar;