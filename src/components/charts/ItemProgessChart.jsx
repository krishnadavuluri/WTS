import * as React from "react";
import { Chart } from "react-google-charts";
import { Typography } from '@material-ui/core';
import "../../styles/styling.css";
export default function ItemTimeProgressChart({data,noOfProcess})
{
    console.log(JSON.stringify(process));
    const height=noOfProcess*50;
    return(
      <div>
        <center className='defaultMargin'><Typography  className="font" variant='h5'>Order Continuance</Typography></center>
          <Chart 
           width={'100%'}
           height={`${height}px`}
           chartType="Gantt"
           loader={<div>Loading Chart</div>}
           data={data}
           rootProps={{ 'data-testid': '2' }}/>
      </div>
    );
}
