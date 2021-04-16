import React ,{ Component} from 'react';
import MasterCostChart from './charts/MasterCostChart';
import Service from '../utils/service';
export default class MasterCost extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            costData:{},
            flag:false
        }
    }
    componentDidMount()
    {
        const ItemsData=this.props.data;
        const colors=Service.colourGenerator(ItemsData.length);
        var ItemsCost=[];
        var ItemsName=[];
        ItemsData.map((eachItme)=>{
            ItemsCost=[...ItemsCost,eachItme.actualCost]
        ItemsName=[...ItemsName,`${eachItme.title}| estCost:${eachItme.estimatedCost}`]
        })
        this.setState({
            costData:{
                labels:ItemsName,
                datasets:[
                    {
                      label:'Acutual Cost',
                      data:ItemsCost,
                      fill:true,
                      backgroundColor:colors,
                      borderWidth: 1
                    }
                ]
            },flag:true })
    }
    render(){
        return(
            <div>
               { this.state.flag ? <MasterCostChart noOfItems={this.props.data.length} data={this.state.costData}/>: ""}
            </div>
        )
    }
}