import React, { Component } from 'react';
import { MDBContainer,MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import '../styles/styling.css';
import moment from 'moment';
import {itemChartOptions} from './charts/chartOptions'
import ItemTimeProgressChart from './charts/ItemProgessChart';
import Loader from './loader';
import axios from 'axios';
import { AlertDismissibleExample } from './alertBox';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { LangMessage } from '../locale/locale';
import { TopNavbar } from './Navbar';
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
           var allProcess=[itemChartOptions]; //getting itemChart options
           var noOfProcess=0;
           
           ProcessData.map((process)=>{
               noOfProcess+=1;
               const startDate=moment(process.startDate).format('l').split('/');
               const endDate=moment(process.endDate).format('l').split('/'); // extracting required fields
               if(endDate!==null)
               {
                 const singleProcess=[process.id,"#"+process.id,null,new Date(startDate[2],startDate[0]-1,startDate[1]),
                 new Date(endDate[2],endDate[0]-1,endDate[1]),null,process.progress,null];
                 allProcess=[...allProcess,singleProcess]; 
               }                    
              })
            
            this.setState({processData:allProcess,flag:true,noOfProcess:noOfProcess});

     }
     componentDidMount()
     {
          this.getItemViewData(this.props.match.params.itemId);
          
     }
render() {
  return (
    <div>
    { this.state.flag ? this.state.noOfProcess===0 ? 

       <AlertDismissibleExample language={this.props.match.params.lang} from="item" id={this.props.match.params.mwoId}/>:
       <>
         <TopNavbar/>
         <ItemTimeProgressChart language={this.props.match.params.lang} data={this.state.processData} noOfProcess={this.state.noOfProcess} /> 
       </>   
       :<Loader/> 
    }
    </div>
    );
  }
}

export default Item;