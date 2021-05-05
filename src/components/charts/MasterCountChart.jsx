import React  from 'react';
import { Polar} from "react-chartjs-2";
import { MDBContainer }from "mdbreact";
import Grid from '@material-ui/core/Grid';
import '../../styles/styling.css';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { LangMessage } from '../../locale/locale';
import Service from '../../utils/service';
function MasterCountChart({data,labels,number})
{
    var height=150;                 //default height
    const width=window.innerWidth;        //getting width of screen
    const colors=Service.colourGenerator(data.length);
    console.log('Data:',data);
    if(width<=640)
    {
        height=40*10;              //setting height of chart with respect width of screen
    }
    else if(width>640){
       height=35*10;
    }
    const Data={
        datasets:[
            {                                  //setting state
                data:data,
                backgroundColor:colors,
                label:'Hello'
            }],
            labels:labels
     }
    const options={
         responsive: true,
         title: {
            display: true,
            text: `Showing ${number}st part`
        }
    }
    return (
    <Grid container justify='center'>
        <Grid item xs={12} md={7}>
           <MDBContainer>
               <Polar id="Polar" data={Data} height={height}  options={ options }/>
            </MDBContainer>  
        </Grid>
        
    </Grid>
             
         
      
    );
}
export default MasterCountChart;