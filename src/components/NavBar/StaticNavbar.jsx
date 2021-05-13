import Navbar from 'react-bootstrap/Navbar'
import HomeIcon from '@material-ui/icons/Home';
import React from 'react'
import '../../styles/styling.css';
import Utils from '../../utils/utils';
export const StaticNav = () => {
    return (
        <div style={{marginBottom:'42px'}}>
            <Navbar collapseOnSelect expand="lg" className='bg' fixed="top">
                <HomeIcon className='onHover' onClick={()=> window.location.href='#'+Utils.pageUrls[0]} />   
            </Navbar>
        </div>
    )
}
