import * as React from "react";
import { Chart } from "react-google-charts";
import { Typography } from '@material-ui/core';
import "../../styles/styling.css";
export default function ItemTimeProgressChart({data,noOfProcess})
{
    const height=noOfProcess*50; // specifying height of table
    return(
      <div>
        <center className='defaultMargin'><Typography  className="font" variant='h5'>Order Continuance</Typography></center>
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
