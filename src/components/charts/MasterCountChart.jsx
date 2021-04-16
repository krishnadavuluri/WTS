import React  from 'react';
import { Polar} from "react-chartjs-2";
import { MDBContainer }from "mdbreact";
import Grid from '@material-ui/core/Grid';
import '../../styles/styling.css';
function MasterCountChart({data,noOfItems})
{
    var height=150;
    const width=window.innerWidth;
    if(width<=640)
    {
        height=35*noOfItems;
    }
    else if(width>640){
       height=20*noOfItems;
    }
    return (
    <Grid container justify='center'>
        <Grid item xs={12} sm={12} md={5} style={{border:'none'}} >
           <MDBContainer >
              <h3 className="mt-5 font">Completion Percentage</h3>
              <Polar data={data} height={height}  options={{ responsive: true }}/>
           </MDBContainer>
        </Grid>
    </Grid>  
    );
}
export default MasterCountChart;