import * as React from "react";
import { Chart } from "react-google-charts";
import { Typography } from '@material-ui/core';
import "../../styles/styling.css";
import {IntlProvider,FormattedMessage} from 'react-intl';
import { LangMessage } from '../../locale/locale';
export default function ItemTimeProgressChart({data,noOfProcess,language})
{
    const height=noOfProcess*50; // specifying height of table

    return(
      <div>
        <IntlProvider locale={language} messages={LangMessage[language]}>
           <center className='defaultMargin'>
                <Typography  className="font" variant='h5'>
                  <FormattedMessage id='processProgress' value={language}/>
                </Typography>
           </center>
        </IntlProvider>
          <Chart 
           width={'100%'}
           height={`${height}px`}
           chartType="Gantt"                          //chart configuration
           loader={<div>Loading Chart</div>}
           data={data}
           rootProps={{ 'data-testid': '2' }}/>
      </div>
    );
}
