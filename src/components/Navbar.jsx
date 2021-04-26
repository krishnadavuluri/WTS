import Navbar from 'react-bootstrap/Navbar'
import HomeIcon from '@material-ui/icons/Home';
import React from 'react'
import '../styles/styling.css';
export const TopNavbar = () => {
    
    const handleHomeClick=()=>{
        window.location.href='#/';  // redirecting to home
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='bg' fixed="top"><HomeIcon onClick={()=> handleHomeClick()} /></Navbar>
        </div>
    )
}
