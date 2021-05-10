import React  from 'react';
import { Polar} from "react-chartjs-2";
import { MDBContainer }from "mdbreact";
import Grid from '@material-ui/core/Grid';
import '../../styles/styling.css';
import Utils from '../../utils/service';
import { useHistory } from 'react-router-dom';
function MasterCountChart({data,labels,number, mwoId,language})
{
    const history=useHistory();
    var chartHeight=Utils.getCountChartHeight(window.innerWidth);                 
    const colors=Utils.colourGenerator(data.length);
    const Data={
        datasets:[
            {                                  
                data:data,
                backgroundColor:colors,
                label:'Chart Labels'
            }],
            labels:labels
     }
    const options={
         responsive: true,
         title: {
            display: true,
            text: `${number}st part`
        }
    }
    return (
    <Grid container justify='center'>
        <Grid item xs={12} md={6}>
           <MDBContainer>
               <Polar id="Polar" data={Data} height={chartHeight}  options={ options }
               onElementsClick={elem => {
                   if(elem.length!==0)
                   { 
                       history.push(`/mwo/${mwoId}/item/${Number(elem[0]._model.label)}/lang/`+language)
                   }
               }}/>
            </MDBContainer>  
        </Grid>
        
    </Grid>
                     
    );
}
export default MasterCountChart;