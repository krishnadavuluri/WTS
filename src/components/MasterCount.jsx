import React from 'react';
import MasterCountChart from './charts/MasterCountChart';
import '../styles/styling.css';
import { Grid } from '@material-ui/core';
import {IntlProvider, FormattedMessage} from 'react-intl';
import { LangMessage } from '../locale/locale';
import { Destructure } from '../utils/Destructure';
export default class MasterCount  extends React.Component{
    constructor(props)
    {
       super(props);
       this.state={
           itemsProgress:[],
           itemsLabel:[],
           flag:false,
       }
    }
    componentDidMount()
    {
        const {completion,labels}=Destructure.masterCompletionData(this.props.data);
        this.setState({flag:true,itemsProgress:completion,itemsLabel:labels})
    }
    render()
    {

        return(
            <div className='defaultMargin'>
                <IntlProvider locale={this.props.language} messages={LangMessage[this.props.language]}>
                   <h3 style={{marginTop:'60px'}}>
                       <FormattedMessage id='completion' value={this.props.language}/>
                   </h3>
                </IntlProvider>
                {
                    this.state.flag? 
                        this.state.itemsProgress.map((value,index)=>(
                            <Grid container justify='center'>
                                <Grid xs={12} md={7}>
                                       <MasterCountChart 
                                        pageUrls={this.props.pageUrls}
                                        mwoId={this.props.mwoId}
                                        language={this.props.language} 
                                        number={index+1}
                                        data={this.state.itemsProgress[index]} 
                                        labels={this.state.itemsLabel[index]}
                                        />
                                </Grid>
                            </Grid>
                                  
                        )):''   
                }
            </div>
        );
    }
}