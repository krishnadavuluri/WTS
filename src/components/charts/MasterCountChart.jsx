import React  from 'react';
import { Polar} from "react-chartjs-2";
import { MDBContainer }from "mdbreact";
import Grid from '@material-ui/core/Grid';
import '../../styles/styling.css';
import Utils from '../../utils/utils';
import { useHistory } from 'react-router-dom';
function MasterCountChart({data,labels,number, mwoId,language,state})
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
        },
        onHover: (event, chartElement) => {
            event.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
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
                       history.push(`/Item/mwo/${mwoId}/item/${Number(elem[0]._model.label)}/lang/`+language+'/state/'+state)
                   } }}/>
            </MDBContainer>  
        </Grid>
        
    </Grid>
                     
    );
}
export default MasterCountChart;