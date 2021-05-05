import React from 'react';
import MasterCountChart from './charts/MasterCountChart';
import '../styles/styling.css';
import Service from '../utils/service';
import { Grid } from '@material-ui/core';
import { MDBContainer }from "mdbreact";
export default class MasterCount  extends React.Component{
    constructor(props)
    {
       super(props);
       this.state={
           itemsProgress:[],
           itemsLabel:[],
           end:0,
           current:0,
           flag:false,
       }
       this.handlePreviousButton=this.handlePreviousButton.bind(this);
       this.handleBackButton=this.handleBackButton.bind(this);
    }
    handlePreviousButton()
    {

         this.setState({current:this.state.current-1})
        
    }
    handleBackButton()
    {
            this.setState({current:this.state.current+1})   
    }
    componentDidMount()
    {
       // console.log(this.props.language)
        const itemsData=this.props.data;
        var itemsCount=[];
        var itemsName=[];
        itemsData.map((eachItem)=>{                                                            //destructuring data
            itemsCount=[...itemsCount,Math.ceil((eachItem.completedCount/eachItem.count)*100)]
            itemsName=[...itemsName,'#'+`${eachItem.id} `]
        })
        const divide=Math.ceil((itemsCount.length)/8)
        const partition=Math.floor((itemsCount.length)/divide)
        console.log(partition)
        var i=0,start=0,end=partition;
        var count=[];
        var labels=[];
        while(i<divide)
        {
            if(i===divide-1)
            {
               count=[...count,itemsCount.slice(start,)]
               labels=[...labels,itemsName.slice(start,)]
               break;
            }
            count=[...count,itemsCount.slice(start,end)]
            labels=[...labels,itemsName.slice(start,end)]
            start=end;
            end+=partition;
            i+=1;
        }
        console.log('count and labels',count,labels);
        this.setState({flag:true,itemsProgress:count,itemsLabel:labels,end:count.length})
    }
    render()
    {
        return(
            <div className='defaultMargin'>
                <h3 style={{marginTop:'60px'}}>Completion Percentage</h3>
                {
                    this.state.flag? 
                    <Grid container justify='center' >
                        <Grid item justify='center' xs={12} sm={12}  className='CountChartBox' md={6} >
                           <Grid container justify='center'>
                                {
                                  this.state.itemsProgress.map((value,index)=>(
                                  
                                   <MasterCountChart language={this.props.language} number={index+1}
                                   data={this.state.itemsProgress[index]} labels={this.state.itemsLabel[index]} />
                                  ))
                               }   
                           </Grid>
                        </Grid>
                    </Grid> :''   
               }
            </div>
        );
    }
}