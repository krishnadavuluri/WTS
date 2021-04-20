import React from 'react';
import MasterCountChart from './charts/MasterCountChart';
import '../styles/styling.css';
import Service from '../utils/service';
export default class MasterCount  extends React.Component{
    constructor(props)
    {
       super(props);
       this.state={
           countData:{},
           flag:false,
       }
    }
    componentDidMount()
    {
        const itemsData=this.props.data;
        const colors=Service.colourGenerator(itemsData.length);
        var itemsCount=[];
        var itemsName=[];
        itemsData.map((eachItem)=>{
            itemsCount=[...itemsCount,Math.ceil((eachItem.completedCount/eachItem.count)*100)]
            itemsName=[...itemsName,'#'+`${eachItem.id} `]
        })
        this.setState({countData:
        {
           datasets:[
               {
                   data:itemsCount,
                   backgroundColor:colors,
                   label:'My data'
               }],
               labels:itemsName  
        },flag:true})
    }
    render()
    {
        return(
            <div className='defaultMargin'>
                {this.state.flag ?  <MasterCountChart noOfItems={this.props.data.length}  data={this.state.countData}/> :<h1>Hello</h1>}
            </div>
        );
    }
}