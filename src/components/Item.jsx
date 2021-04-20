import React, { Component } from 'react';
import { MDBContainer,MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import '../styles/styling.css';
import moment from 'moment';
import ProcessData from '../sampleJson/ProcessData.json';
import {itemChartOptions} from './charts/chartOptions'
import ItemTimeProgressChart from './charts/ItemProgessChart';
import Loader from './loader';
class Item extends Component {
     state={
             modal: true,
             flag:false,
             processData:[],
             noOfProcess:0
           }
     componentDidMount()
     {
           var allProcess=[itemChartOptions]; //getting itemChart options
           var noOfProcess=0;
           
           ProcessData.map((process)=>{
               noOfProcess+=1;
               const startDate=moment(process.startDate).format('l').split('/');
               const endDate=moment(process.endDate).format('l').split('/');                                          // extracting required fields
               const singleProcess=[process.id,"#"+process.id,null,new Date(startDate[2],startDate[0]-1,startDate[1]),
                               new Date(endDate[2],endDate[0]-1,endDate[1]),null,process.progress,null];
               allProcess=[...allProcess,singleProcess];                     
               });
            
            this.setState({processData:allProcess,flag:true,noOfProcess:noOfProcess});
     }
render() {
  return (
    <div>
    { this.state.flag ?
      <MDBContainer>
        <MDBModal isOpen={this.state.modal} size="fluid">        {/* Modal popup */}
           <MDBModalHeader className="bg">Wallets</MDBModalHeader>
           <MDBModalBody>
               <ItemTimeProgressChart data={this.state.processData} noOfProcess={this.state.noOfProcess} /> {/* Calling ItemChart */}
           </MDBModalBody>
           <MDBModalFooter>
               <button className="Button" onClick={this.props.history.goBack}>Close</button>
           </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
       :<Loader/> }
    </div>
    );
  }
}

export default Item;