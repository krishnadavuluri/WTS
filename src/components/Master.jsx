import React  from 'react'
import { TopNavbar } from './Navbar';
import axios from 'axios';
import Loader from './loader';
import { AlertDismissibleExample } from './alertBox';
import NavTabs from './TabBar/TabBar'
import { useHistory } from 'react-router-dom';
class  Master extends React.Component {
    
       state={
         masterData:[],
         flag:false
       }

       getMasterData= async ()=>{
        const id=this.props.match.params.mwoId;
        const {data}=await axios.get('http://183.82.116.164:5432/7/master_view_data/'+id); //setting master order data for change in user option
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
             <TopNavbar/>
             { 
                this.state.flag ? this.state.masterData.length===0 ? 
                <AlertDismissibleExample language={this.props.match.params.lang} from="home" 
               id={this.props.match.params.mwoId} />:
                <>
                 <NavTabs 
                  data={this.state.masterData} 
                  mwoId={this.props.match.params.mwoId}
                  language={this.props.match.params.lang}/>
             </>
             :<Loader/>
          }
          </div>
         )
    }
}
export default Master;