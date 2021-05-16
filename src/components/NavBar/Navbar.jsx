import Navbar from 'react-bootstrap/Navbar'
import HomeIcon from '@material-ui/icons/Home';
import React from 'react'
import '../../styles/styling.css';
import {withRouter,useHistory} from 'react-router-dom';
import { Breadcrumbs, Typography,Link} from '@material-ui/core';

const isNotPrevious=(url,pageUrls)=>{
    return pageUrls[pageUrls.length-1]!==url;
}

const TopNavbar = (props) => {
    var {urls}=JSON.parse(localStorage.getItem('pageUrls'));
    const history=useHistory();
    if(isNotPrevious(props.location.pathname,urls))
    {
        urls=[...urls,props.location.pathname];
        localStorage.setItem('pageUrls',JSON.stringify({urls:urls}))
    }
    const routeTo=(index,url)=>{
       urls=urls.slice(0,index);
       localStorage.setItem('pageUrls',JSON.stringify({urls:urls}))
       history.push(url);
    }
    return (
        <div style={{marginBottom:'42px'}}>
            <Navbar collapseOnSelect expand="lg" className='bg' fixed="top">
                <HomeIcon className='HomeIcon onHover' onClick={()=> window.location.href='#'+urls[0]} />
                <Breadcrumbs aria-label="breadcrumb">
                   {
                        urls.map((url,index)=>{
                        const pageName=url.split('/')[1];
                        if(index===urls.length-1 && index!==0)
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