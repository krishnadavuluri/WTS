import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import Grid from '@material-ui/core/Grid';
import '../../styles/styling.css';
function MasterCostChart ({data,noOfItems}) {
     var height=150;
     const width=window.innerWidth;
     if(width<=640)
     {
        height=30*noOfItems;
     }
     else if(width>640){
        height=20*noOfItems;
     }
    return (
      <Grid container justify='center'>
        <Grid item xs={12} sm={12} md={0} style={{border:'none'}} ></Grid>
          <Grid item xs={12} sm={12} md={6}>
              <MDBContainer>
                <h3 className='mt-5 font'>Cost Status</h3>
                <HorizontalBar  data={data}  labelFontSize={1} height={height} options={{ responsive: true }}/>
              </MDBContainer>
          </Grid>
      </Grid>
    );
}

export default MasterCostChart;