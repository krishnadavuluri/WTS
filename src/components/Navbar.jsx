import Navbar from 'react-bootstrap/Navbar'
import HomeIcon from '@material-ui/icons/Home';
import React from 'react'
import '../styles/styling.css';
import Service from '../utils/service';
export const TopNavbar = () => {
    return (
        <div style={{marginBottom:'42px'}}>
            <Navbar collapseOnSelect expand="lg" className='bg' fixed="top">
                <HomeIcon onClick={()=> window.location.href='#/'} />
            </Navbar>
        </div>
    )
}
