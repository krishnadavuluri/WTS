import React  from 'react'
import  TopNavbar  from '../NavBar/Navbar';
import axios from 'axios';
import Loader from '../Response/Loader';
import { AlertDismissibleExample } from '../Response/AlertBox';
import NavTabs from '../TabBar/TabBar'
import { useHistory } from 'react-router-dom';
import { StaticNav } from '../NavBar/StaticNavbar';
class  Master extends React.Component {
    
       state={
         masterData:[],
         flag:false
       }

       getMasterData= async ()=>{
        const id=this.props.match.params.mwoId;
        const state=this.props.match.params.state;
        console.log(id,state);
        const {data}=await axios.get(`http://183.82.116.164:5432/7/master_view_data/${id}/${state}`); 
        console.log(data)//setting master order data for change in user option
        this.setState({masterData:data,flag:true});
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