import * as React from "react";
import { Chart } from "react-google-charts";
import { Typography } from '@material-ui/core';
import "../../styles/styling.css";
import {IntlProvider,FormattedMessage} from 'react-intl';
import { LangMessage } from '../../locale/locale';
import Grid from '@material-ui/core/Grid';
export default function ItemTimeProgressChart({data,noOfProcess,language})
{
    const height=noOfProcess*50; // specifying height of table

    return(
      <div>
        <Grid container justify='center'>
          <Grid item xs={12} md={8}>
             <IntlProvider locale={language} messages={LangMessage[language]}>
                 <center className='defaultMargin'>
                   <h3  className="font" >
                      <FormattedMessage id='processProgress' value={language}/>
                   </h3>
                 </center>
             </IntlProvider>
             <Chart 
              width={'100%'}
              height={`${height}px`}
              chartType="Gantt"                          //chart configuration
              loader={<div>Loading Chart</div>}
              data={data}
              rootProps={{ 'data-testid': '2' }}/>
          </Grid>
        </Grid>
      </div>
    );
}
