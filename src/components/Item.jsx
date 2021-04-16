import React, { Component } from 'react';
import { MDBContainer,MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import '../styles/styling.css';
import moment from 'moment';
import ProcessData from '../sampleJson/ProcessData.json';
import {ganttChartFormat} from '../dataFormat/inputFormat';
import ItemTimeProgressChart from './charts/ItemProgessChart';
import Loader from './loader';
class Item extends Component {
state={
  modal5: true,
  flag:false,
  processData:[],
  noOfProcess:0
}
componentDidMount()
{
  var allProcess=[ganttChartFormat];
  var noOfProcess=0;
  ProcessData.map((process)=>{
           noOfProcess+=1;
           const startDate=moment(process.startDate).format('l').split('/');
           const endDate=moment(process.endDate).format('l').split('/');
           const singleProcess=[process.id,process.title,process.countString,new Date(startDate[2],startDate[0]-1,startDate[1]),
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
        <MDBModal isOpen={this.state.modal5} size="fluid">
           <MDBModalHeader className="bg">Wallets</MDBModalHeader>
           <MDBModalBody>
               <ItemTimeProgressChart data={this.state.processData} noOfProcess={this.state.noOfProcess} />
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