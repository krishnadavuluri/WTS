import React from 'react';
import { Polar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import Grid from '@material-ui/core/Grid';
function MasterCountChart({data})
{
    return (
    <Grid container justify='center'>
        <Grid item xs={12} sm={12} md={5} style={{border:'none'}} >
              <MDBContainer>
                <h3 className="mt-5"><u>MasterWorkOrder Count</u></h3>
                <Polar data={data} options={{ responsive: true }} />  
             </MDBContainer>
        </Grid>
    </Grid>  
    );
}
export default MasterCountChart;