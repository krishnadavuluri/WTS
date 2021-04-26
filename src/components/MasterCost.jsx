import React ,{ Component} from 'react';
import { MasterCostChart } from './charts/MasterCostChart';
export default class MasterCost extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            itemsActualCost:[],
            itemsEstimatedCost:[],
            itemsId:[],
            noOfItems:0,
            flag:false
        }
    }
    componentDidMount()
    {
        const ItemsData=this.props.data;
        var actCost=[];
        var estCost=[];
        var ItemsId=[];
        var NoOfItems=0;                                     //destructuring data
        ItemsData.map((eachItme)=>{
            actCost=[...actCost,eachItme.actualCost]
            estCost=[...estCost,eachItme.estimatedCost]
            ItemsId=[...ItemsId,"#"+eachItme.id]
            NoOfItems+=1
        })
        console.log(actCost,estCost);
        this.setState({noOfItems:NoOfItems,itemsActualCost:actCost,itemsEstimatedCost:estCost,itemsId:ItemsId,flag:true}) // setting state
    }
    render(){
        // console.log(this.state.itemsActualCost);
        return(
            <div>
               { this.state.flag ? <MasterCostChart language={this.props.language} noOfItems={this.state.noOfItems} actualCost={this.state.itemsActualCost} estimatedCost={this.state.itemsEstimatedCost}
                itemsId={this.state.itemsId} />: ""}  {/* conditiondal rendering */}
            </div>
        )
    }
}