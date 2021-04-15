import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import Grid from '@material-ui/core/Grid';
function MasterCostChart ({data}) {

    return (
      <Grid container justify='center'>
        <Grid item xs={12} sm={12} md={0} style={{border:'none'}} ></Grid>
          <Grid item xs={12} sm={12} md={6}>
              <MDBContainer>
                <h3 className='mt-5'><u>MasterWorkOrder Cost</u></h3>
                <HorizontalBar data={data} options={{ responsive: true }}/>
              </MDBContainer>
          </Grid>
      </Grid>
    );
}

export default MasterCostChart;