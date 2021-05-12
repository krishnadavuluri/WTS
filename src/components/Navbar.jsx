import Navbar from 'react-bootstrap/Navbar'
import HomeIcon from '@material-ui/icons/Home';
import React from 'react'
import '../styles/styling.css';
import Utils from '../utils/utils';
import {withRouter,useHistory} from 'react-router-dom';
const TopNavbar = (props) => {
    const history=useHistory();
    if(Utils.pageUrls[Utils.pageUrls.length-1]!==props.location.pathname)
    {
        Utils.pageUrls=[...Utils.pageUrls,props.location.pathname];
    }
    const routeTo=(index,url)=>{
       Utils.pageUrls=Utils.pageUrls.slice(0,index);
       history.push(url);
    }
    return (
        
        <div style={{marginBottom:'42px'}}>
            {console.log('Render is called')}
            <Navbar collapseOnSelect expand="lg" className='bg' fixed="top">
                <HomeIcon onClick={()=> window.location.href='#'+Utils.pageUrls[0]} />
                {
                    Utils.pageUrls.map((url,index)=>{
                        if(index===Utils.pageUrls.length-1)
                        {
                           return  <button disabled={true} onClick={()=> routeTo(index,url)}>{index}</button>
                        }
                        if(index!==0)
                        {
                            return <button onClick={()=> routeTo(index,url)}>{index}</button>
                        }
                    })
                }   
            </Navbar>
        </div>
    )
}
export default withRouter(TopNavbar);