import Navbar from 'react-bootstrap/Navbar'
import HomeIcon from '@material-ui/icons/Home';
import React from 'react'
import '../styles/styling.css';
import Utils from '../utils/utils';
import {withRouter,useHistory} from 'react-router-dom';
import { Breadcrumbs, Typography,Link} from '@material-ui/core';

const isNotPrevious=(url)=>{
    return Utils.pageUrls[Utils.pageUrls.length-1]!==url;
}

const TopNavbar = (props) => {
    const history=useHistory();
    
    if(isNotPrevious(props.location.pathname))
    {
        Utils.pageUrls=[...Utils.pageUrls,props.location.pathname];
    }

    const routeTo=(index,url)=>{
       Utils.pageUrls=Utils.pageUrls.slice(0,index);
       history.push(url);
    }
    return (
        <div style={{marginBottom:'42px'}}>
            <Navbar collapseOnSelect expand="lg" className='bg' fixed="top">
                <HomeIcon className='HomeIcon' onClick={()=> window.location.href='#'+Utils.pageUrls[0]} />
                <Breadcrumbs aria-label="breadcrumb">
                   {
                       Utils.pageUrls.map((url,index)=>{
                        const pageName=url.split('/')[1];
                        if(index===Utils.pageUrls.length-1 && index!==0)
                        {
                            return   <Typography color="textPrimary">{pageName}</Typography>
                        }
                        else if(index!==0)
                        {
                            return  <Link color="inherit" onClick={()=> routeTo(index,url)}>{pageName}</Link>
                        }
                        })
                   }
                </Breadcrumbs>
            </Navbar>
        </div>
    )
}
export default withRouter(TopNavbar);