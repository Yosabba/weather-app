import React from 'react';
import { motion } from 'framer-motion';
import logo from '../sunny.svg';


const NavBar = () => {

    const navAnimation = {
        visible: { opacity: 1, y: 0, transition : { duration: 1.5} },
        hidden: { opacity: 0, y: -200 },
    }



    return ( 
        <motion.header 
        className ="navbar"
        initial="hidden"
        animate="visible"
        variants={navAnimation}

        
        >
            <motion.img alt="food" src={logo} />
            <motion.h1>Weather Application</motion.h1>
        </motion.header>
     );
}
 
export default NavBar;