import * as React from "react";
import { Chart } from "react-google-charts";
import { Typography } from '@material-ui/core';
import "../styles/styling.css";
export default function ItemTimeLineChart({process,noOfProcess})
{
    console.log(JSON.stringify(process));
    const h=noOfProcess*50;
    console.log(h);
    return(
      <div>
        <center className='defaultMargin'><Typography  variant='h5'>Time and Progress</Typography></center>
      <Chart 
      width={'100%'}
      height={`${h}px`}
      chartType="Gantt"
      loader={<div>Loading Chart</div>}
      data={process}
      rootProps={{ 'data-testid': '2' }}
    /></div>
    );
}
