import React, { Component ,useState} from 'react'
import axios from 'axios';
import { authAxios } from './requestAPI/allAPI';
import ItemTimeLineChart from './components/ganttChart';
import {ganttChartFormat} from './dataFormat/inputFormat';
import moment from 'moment';
import Getdata from './getData';
import './styles/styling.css';
import CircularUnderLoad from './components/loader';
import { Grid } from '@material-ui/core';
export default class GetProcess extends Component
{
    constructor(props)
    {
      console.log('consgjhasd')
      super(props);
      this.state={
         allProcess:[],
         bool:false,
         length:0
      }
    }
    async getData()
    {
      console.log('getData is called');
      const {data}=await authAxios.get(`${this.props.itemId}/links`);
      var getAllProcess=data.filter((issue)=>(
                   issue.labels.includes('process')
      ));
      var requireData=[ganttChartFormat];
      getAllProcess.map((process)=>{
        const startDate=moment(process.created_at).format('l').split("/");
       console.log(startDate);
        const endDate=moment(process.due_date).format('l').split("/");
        console.log(endDate)
        console.log(typeof(`${process.iid}`))
        const arr=[`process${process.iid}`,process.title,null,
        new Date(startDate[2],startDate[0]-1, startDate[1]),
        new Date(endDate[2],endDate[0]-1, endDate[1]),null,5,null] 
        requireData=[...requireData,arr];  
        //console.log(requireData);
      })
      //console.log(this.state.allProcess);
      console.log('require cvalue',requireData);
      this.setState({allProcess:requireData,bool:true,length:requireData.length-1});
    }
    componentDidMount()
    {
      //console.log('mout')
      this.getData();
      // fetch() .then(async (data) => 
      //               { let obj = await authAxios.get(`${this.props.itemId}/links`);

      //          this.setState({bool : true,allProcess:obj})}
      //   ).catch( err => console.error(err)) 
    }
    render()
    {   
        
        return(
            <div className='time-line-styling'>
              <Grid item xs={12} >
                {this.state.bool ? <ItemTimeLineChart process={this.state.allProcess} noOfProcess={this.state.length} />:<center><CircularUnderLoad/></center>}
              </Grid>
            </div>
        );
    }
}