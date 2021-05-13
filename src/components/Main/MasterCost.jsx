import React ,{ Component} from 'react';
import { MasterCostChart } from '../charts/MasterCostChart';
import Utils from '../../utils/utils';
import '../../styles/styling.css';
import {IntlProvider, FormattedMessage} from 'react-intl';
import { LangMessage } from '../../locale/locale';
import Grid from '@material-ui/core/Grid';
import { Destructure } from '../../utils/Destructure';
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
            sort:false
        }
       
    }
    setData=()=>{
        const {actualCost,estimatedCost,itemsId,noOfItems}=Destructure.masterCostData(this.state.actualData);
        
        this.setState({noOfItems:noOfItems,itemsActualCost:actualCost,itemsEstimatedCost:estimatedCost,
            itemsId:itemsId,flag:true,type:'',more:false,least:false,most:false,sort:false}) 

    }
    handleChange=(e)=>{
        if(e.target.name==='more')
        {
            const exceededCostItems=Utils.Filter(this.state.itemsActualCost,
                                            this.state.itemsEstimatedCost,this.state.itemsId,e.target.name);
    
            this.setState({exceededCostItems:exceededCostItems,type:e.target.name,
                more:true,least:false,most:false,sort:false})
        }
        else
        {
            const {actCost,estCost,itemsIds}= Utils.Filter(this.state.itemsActualCost,this.state.itemsEstimatedCost,
                                              this.state.itemsId,e.target.name);
            if(e.target.name==='sort')
            {
                this.setState({itemsActualCost:actCost,itemsEstimatedCost:estCost,itemsId:itemsIds,type:e.target.name,
                              more:false,least:false,most:false,sort:true})
            } 
            else if(e.target.name==='most')
            {
                this.setState({itemsActualCost:actCost,itemsEstimatedCost:estCost,itemsId:itemsIds,type:e.target.name,
                              more:false,least:false,most:true,sort:false})
            }
            else
            {
                this.setState({itemsActualCost:actCost,itemsEstimatedCost:estCost, itemsId:itemsIds,type:e.target.name,
                              more:false,least:true,most:false,sort:false})
            }                                 

        }
    }
    componentDidMount()
    {
        this.setData();
    }
    render(){
       
        return(
            <div>
               { this.state.flag ? <>
                <IntlProvider locale={this.props.language} messages={LangMessage[this.props.language]} >
                  <div style={{marginTop:'40px'}}>
                      <h3 className='font'>
                         <FormattedMessage id='cost' value={this.props.language}/>
                      </h3>
                      <Grid container justify='center' >
                        <Grid container xs={12} md={7} >
                            <Grid item xs={12}  md={3}>
                               <input onChange={this.handleChange} type='radio' id='least' name='least'
                                checked={this.state.least} className='onHover'/>
                               <label id='least'> 
                                 <FormattedMessage id='leastSpent' value={this.props.language}/>
                               </label>
                            </Grid>
                            <Grid item xs={12}   md={3}>
                               <input onChange={this.handleChange} type='radio' id='most' name='most' 
                               checked={this.state.most} className='onHover'/>
                               <label id='most'>
                                    <FormattedMessage id='mostSpent' value={this.props.language}/>
                                </label>
                            </Grid>
                            <Grid item xs={12}   md={3}>
                               <input onChange={this.handleChange} type='radio' id='more' name='more' 
                               checked={this.state.more} className='onHover'/>
                               <label id='more'> 
                                    <FormattedMessage id='exceededCost' value={this.props.language}/>
                                </label>
                            </Grid>
                            <Grid item xs={12}   md={3}>
                               <input onChange={this.handleChange} type='radio' id='sort' name='sort'
                                checked={this.state.sort} className='onHover'/>
                               <label id='more'>
                                   <FormattedMessage id='sort' value={this.props.language}/>
                                </label>
                            </Grid>
                        </Grid>
                      </Grid>
                  </div>
                </IntlProvider>
                {this.state.type==='more'?
                  <MasterCostChart state={this.props.state} language={this.props.language}
                  actualCost={this.state.exceededCostItems.actCost}
                  estimatedCost={this.state.exceededCostItems.estCost} itemsId={this.state.exceededCostItems.itemIds}
                  type={this.state.type} noOfItems={this.state.noOfItems} mwoId={this.props.mwoId}/>
                          :
                  <MasterCostChart state={this.props.state} language={this.props.language}
                  noOfItems={this.state.noOfItems}
                  actualCost={this.state.itemsActualCost} estimatedCost={this.state.itemsEstimatedCost}
                  itemsId={this.state.itemsId} type={this.state.type} mwoId={this.props.mwoId} />}</>: ""} 
            </div>
        )
    }
}