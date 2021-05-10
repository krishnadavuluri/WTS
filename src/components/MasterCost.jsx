import React ,{ Component} from 'react';
import { MasterCostChart } from './charts/MasterCostChart';
import Service from '../utils/service';
import '../styles/styling.css';
import {IntlProvider, FormattedMessage} from 'react-intl';
import { LangMessage } from '../locale/locale';
export default class MasterCost extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            actualData:this.props.data,
            itemsActualCost:[],
            itemsEstimatedCost:[],
            itemsId:[],
            exceededCostItems:{},
            noOfItems:0,
            flag:false,
            type:'',
            least:false,
            most:false,
            more:false,
            reset:false
        }
        this.handleClick=this.handleClick.bind(this);
        this.setData=this.setData.bind(this);
    }
    handleClick(e)
    {
        if(e.target.name==='reset')
        {
           //console.log('Called:',e.target.name);
           this.setData();
        }
        else if(e.target.name==='more')
        {
            const exceededCostItems=Service.getExceededCost(this.state.itemsActualCost,
                                            this.state.itemsEstimatedCost,this.state.itemsId);
            //console.log('Exeeced Value:',exceededCostItems);
            this.setState({exceededCostItems:exceededCostItems,type:e.target.name})
        }
        else
        {
          // console.log('Called:',e.target.name)
           const {actCost,estCost,itemsIds}= Service.Sort(this.state.itemsActualCost,
                                             this.state.itemsEstimatedCost,this.state.itemsId,e.target.name);
           //console.log("from service:",actCost,estCost,itemsIds)
           this.setState({itemsActualCost:actCost,itemsEstimatedCost:estCost,
                          itemsId:itemsIds,type:e.target.name})
        }    
    }
    setData()
    {
        const ItemsData=this.state.actualData;
        var actCost=[];
        var estCost=[];
        var ItemsId=[];
        var NoOfItems=0;                                     //destructuring data
        ItemsData.map((eachItme)=>{
            actCost=[...actCost,eachItme.actualCost]
            estCost=[...estCost,eachItme.estimatedCost]
            ItemsId=[...ItemsId,""+eachItme.id]
            NoOfItems+=1
        })
        this.setState({noOfItems:NoOfItems,itemsActualCost:actCost,itemsEstimatedCost:estCost,
            itemsId:ItemsId,flag:true,type:'',more:false,least:false,most:false,reset:true}) // setting state

    }
    handleChange=(e)=>{
        if(e.target.name==='reset')
        {
           //console.log('Called:',e.target.name);
           this.setData();
        }
        else if(e.target.name==='more')
        {
            const exceededCostItems=Service.getExceededCost(this.state.itemsActualCost,
                                            this.state.itemsEstimatedCost,this.state.itemsId);
            //console.log('Exeeced Value:',exceededCostItems);
            this.setState({exceededCostItems:exceededCostItems,type:e.target.name,
                more:true,least:false,most:false,reset:false})
        }
        else if(e.target.name==='least')
        {
          // console.log('Called:',e.target.name)
           const {actCost,estCost,itemsIds}= Service.Sort(this.state.itemsActualCost,
                                             this.state.itemsEstimatedCost,this.state.itemsId,e.target.name);
           //console.log("from service:",actCost,estCost,itemsIds)
           this.setState({itemsActualCost:actCost,itemsEstimatedCost:estCost,
                          itemsId:itemsIds,type:e.target.name,more:false,least:true,most:false,reset:false})
        }
        else{
            const {actCost,estCost,itemsIds}= Service.Sort(this.state.itemsActualCost,
                this.state.itemsEstimatedCost,this.state.itemsId,e.target.name);
                this.setState({itemsActualCost:actCost,itemsEstimatedCost:estCost,
                    itemsId:itemsIds,type:e.target.name,more:false,least:false,most:true,reset:false})
        }    
    }
    componentDidMount()
    {
        this.setData();
    }
    render(){
        // console.log(this.state.itemsActualCost);
        return(
           
              
               
           
            <div>
               { this.state.flag ? <>
                <IntlProvider locale={this.props.language} messages={LangMessage[this.props.language]} >
                  <div style={{marginTop:'40px'}}>
                      <h3>
                         <FormattedMessage id='cost' value={this.props.language}/>
                      </h3>
                      <input onChange={this.handleChange} type='radio' id='least' name='least' checked={this.state.least}/>
                      <label id='least'>Least</label>
                      <input onChange={this.handleChange} type='radio' id='most' name='most' checked={this.state.most}/>
                      <label id='most'>Most</label>
                      <input onChange={this.handleChange} type='radio' id='more' name='more' checked={this.state.more}/>
                      <label id='more'>Exceeded</label>
                      <input onChange={this.handleChange} type='radio' id='reset' name='reset' checked={this.state.reset}/>
                      <label id='more'>reset</label>
                      {/* <button name='least' className='Button' onClick={this.handleClick}>
                         <FormattedMessage id='leastSpent' value={this.props.language}/>
                      </button>
                      <button name='most'  className='Button' onClick={this.handleClick}>
                         <FormattedMessage id='mostSpent' value={this.props.language}/>
                      </button>
                      <button name='more' className='Button' onClick={this.handleClick}>
                         <FormattedMessage id='exceededCost' value={this.props.language}/>
                      </button>
                      <button name='reset'  className='Button' onClick={this.handleClick}>
                         <FormattedMessage id='reset' value={this.props.language}/>
                      </button> */}
                  </div>
                </IntlProvider>
                {this.state.type==='more'?
                  <MasterCostChart language={this.props.language} actualCost={this.state.exceededCostItems.actCost}
                  estimatedCost={this.state.exceededCostItems.estCost} itemsId={this.state.exceededCostItems.itemIds}
                  type={this.state.type} noOfItems={this.state.noOfItems}/>
                          :
                  <MasterCostChart language={this.props.language} noOfItems={this.state.noOfItems}
                  actualCost={this.state.itemsActualCost} estimatedCost={this.state.itemsEstimatedCost}
                  itemsId={this.state.itemsId} type={this.state.type} />}</>: ""} 
            </div>
        )
    }
}