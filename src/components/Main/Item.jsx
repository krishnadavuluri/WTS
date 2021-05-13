import React, { Component } from 'react';
import '../../styles/styling.css';
import ItemTimeProgressChart from '../charts/ItemProgessChart';
import Loader from '../Response/Loader';
import axios from 'axios';
import { AlertDismissibleExample } from '../Response/AlertBox';
import  TopNavbar  from '../NavBar/Navbar';
import { Destructure } from '../../utils/Destructure';
import { StaticNav } from '../NavBar/StaticNavbar';
import ItemDetails from './ItemDetails';
class Item extends Component {
     constructor(props)
     {
        super(props);
        this.state={
           modal: true,
           flag:false,
           processData:[],
           itemDetails:[],
           noOfProcess:0
         }
         this.getItemViewData=this.getItemViewData.bind(this);
         this.setItemViewData=this.setItemViewData.bind(this);
     }
     async getItemViewData(mwoId,itemId,state)
     {
       const itemDetails=await (await axios.get(`http://183.82.116.164:5432/7/master_view_data/${mwoId}/${itemId}/${state}`)).data
       const {data}=await axios.get(`http://183.82.116.164:5432/7/item_view_data/${mwoId}/${itemId}/${state}`);  //Getting all processes of item
       this.setItemViewData(data,itemDetails);
     }
     setItemViewData(processData,itemDetails)
     {
            const {allProcess,noOfProcess}=Destructure.itemProgressData(processData);
            this.setState({processData:allProcess,itemDetails:itemDetails,flag:true,noOfProcess:noOfProcess});
     }
     componentDidMount()
     {
          this.getItemViewData(this.props.match.params.mwoId,
                 this.props.match.params.itemId,this.props.match.params.state);
          
     }
render() {
  return (
    <div>
       
       { this.state.flag ? this.state.noOfProcess===0 ? 
         <AlertDismissibleExample language={this.props.match.params.lang} from="item" id={this.props.match.params.mwoId}/>:
         <>
         <TopNavbar/>
         <ItemDetails data={this.state.itemDetails} language={this.props.match.params.lang}/>
         <ItemTimeProgressChart language={this.props.match.params.lang} data={this.state.processData} noOfProcess={this.state.noOfProcess} /> 
         </>   
         :<><StaticNav/><Loader/></>
       }
    </div>
    );
  }
}

export default Item;