import { Grid } from "@material-ui/core";
import './../../styles/styling.css'
const Time=({lastUpdate})=>{
  
return(
   <Grid container className='defaultMargin'>
       <Grid xs={12} lg={5}>
          <p className='font'>
             <strong>Updated At:</strong> {lastUpdate.time}<br/>
             {lastUpdate.date}
         </p>
       </Grid>
   </Grid>
);
}

export default Time;