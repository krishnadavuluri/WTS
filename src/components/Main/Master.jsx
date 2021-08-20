import React  from 'react'
import  TopNavbar  from '../NavBar/Navbar';
import axios from 'axios';
import Loader from '../Response/Loader';
import { AlertDismissibleExample } from '../Response/AlertBox';
import NavTabs from '../TabBar/TabBar'
import { StaticNav } from '../NavBar/StaticNavbar';
import {API} from '../../API/RequestAPI'
import ItemData from './../../Data/items.json'
class  Master extends React.Component {
    
       state={
         masterData:[],
         flag:false
       }

       getMasterData= async ()=>{
        const id=this.props.match.params.mwoId;
        const state=this.props.match.params.state;
        //const {data}=await axios.get(API.getMasterViewURL(id,state)); 
        this.setState({masterData:ItemData,flag:true});
       }  

       componentDidMount()
       {
         
          this.getMasterData();
       }

    render()
    {
       return (
          <div>
             { 
               this.state.flag ? this.state.masterData.length===0 ? 
                <AlertDismissibleExample language={this.props.match.params.lang} from="home" 
               id={this.props.match.params.mwoId} />:
                <>
                 <TopNavbar/>
                 <NavTabs 
                  state={this.props.match.params.state}
                  data={this.state.masterData} 
                  mwoId={this.props.match.params.mwoId}
                  language={this.props.match.params.lang}/>
             </>
             :<> 
             <StaticNav/>
             <Loader/></>
          }
          </div>
         )
    }
}
export default Master;