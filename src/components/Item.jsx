import React, { Component } from 'react';
import '../styles/styling.css';
import ItemTimeProgressChart from './charts/ItemProgessChart';
import Loader from './loader';
import axios from 'axios';
import { AlertDismissibleExample } from './alertBox';
import { TopNavbar } from './Navbar';
import { Destructure } from '../utils/Destructure';
class Item extends Component {
     constructor(props)
     {
        super(props);
        this.state={
           modal: true,
           flag:false,
           processData:[],
           noOfProcess:0
         }
         this.getItemViewData=this.getItemViewData.bind(this);
         this.setItemViewData=this.setItemViewData.bind(this);
     }
     async getItemViewData(id)
     {
       const {data}=await axios.get('http://183.82.116.164:5432/7/item_view_data/'+id);  //Getting all processes of item
       this.setItemViewData(data);
     }
     setItemViewData(ProcessData)
     {
            const {allProcess,noOfProcess}=Destructure.itemProgressData(ProcessData);
            this.setState({processData:allProcess,flag:true,noOfProcess:noOfProcess});
     }
     componentDidMount()
     {
          this.getItemViewData(this.props.match.params.itemId);
          
     }
render() {
  return (
    <div>
      <TopNavbar/>
       { this.state.flag ? this.state.noOfProcess===0 ? 
         <AlertDismissibleExample language={this.props.match.params.lang} from="item" id={this.props.match.params.mwoId}/>:
         <>
         <ItemTimeProgressChart language={this.props.match.params.lang} data={this.state.processData} noOfProcess={this.state.noOfProcess} /> 
         </>   
         :<Loader/>
       }
    </div>
    );
  }
}

export default Item;