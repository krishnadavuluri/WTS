import React, { Component } from 'react';
import '../styles/styling.css';
import { MDBContainer, MDBBtn, MDBModal,MDBCardText, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCardHeader } from 'mdbreact';
import axios from 'axios';
import Loader from './loader';
class ItemDetails extends Component {
state = {
     flag:false,
     itemDetails:{}
}
getItemDetails=async (mwoId,itemId)=>{
    const {data}=await axios.get('http://183.82.116.164:5432/7/master_view_data/'+mwoId)
    var Item;
    console.log(typeof(itemId))
    for(let i=0;i<data.length;i++)
    {
        const s1=data[i].id;
        if(Number(itemId)===Number(s1))
        {
            Item=data[i];
            break;
        }
    }
    this.setState({flag:true,itemDetails:Item});
}
componentDidMount()
{
   this.getItemDetails(this.props.match.params.mwoId,this.props.match.params.itemId);
}
render() {
  return (
      <div>
          {
              this.state.flag? 
              <MDBContainer>
                <MDBModal isOpen={true}>
                     <MDBCardHeader className='bg' >Order Details</MDBCardHeader>
                     <MDBModalHeader >
                         Id: {this.state.itemDetails.id}<br/>
                         Title: {this.state.itemDetails.title}<br/>
                         Start Date: {this.state.itemDetails.startDate}<br/>
                         End Date: {this.state.itemDetails.endDate}<br/>
                         Assignee: {this.state.itemDetails.assignee ? this.state.itemDetails.assignee: 'NA'}<br/>
                         Cost: {this.state.itemDetails.costString}<br/>
                         Count: {this.state.itemDetails.countString}<br/>
                     </MDBModalHeader>      
                     <MDBModalFooter>
                       <button className='Button' onClick={this.props.history.goBack}>Close</button>
                       <button className='Button' >View</button>
                     </MDBModalFooter>
                </MDBModal>
            </MDBContainer>:<Loader/>
          }
      </div>
    
    );
  }
}

export default ItemDetails;
