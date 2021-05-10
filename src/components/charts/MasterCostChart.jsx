import React, { PureComponent ,useState} from 'react'
import Chart from "react-apexcharts";
import '../../styles/styling.css';
import { MDBContainer } from 'mdbreact';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import Utils from '../../utils/service'
import { costChartOptions } from './chartOptions';
import { LangMessage } from '../../locale/locale';
export function MasterCostChart({mwoId,noOfItems,actualCost,estimatedCost,itemsId,language,type})
{
       const actualCostLabel=LangMessage[language].actCost;
       const estimatedCostLabel=LangMessage[language].estCost;
       var chartHeight=Utils.getCostChartHeight(noOfItems,window.innerWidth);
       var chartHeading=Utils.getCostChartHeading(type);
       const history=useHistory()
       const chart={
        chart: {
          type: 'bar',
          toolbar:{
              show:false
          },
          events: {
            dataPointSelection: function(event, chartContext, config)
             {
               const id=Number(config.w.globals.labels[config.dataPointIndex]);
               history.push(`/mwo/${mwoId}/item/`+id+'/lang/'+language);
             }
          }
        },
       }
       var series=[{name:'₹ '+actualCostLabel,data: actualCost},{name:'₹ '+estimatedCostLabel,data: estimatedCost}]; 
       var xaxis={ xaxis: {categories: itemsId }}                                        
       var title={
           title:{
              text:chartHeading,
              align:'center',
              style: {
                  fontSize:  '20',
                  fontWeight:  'bold',
                  fontFamily:  undefined,
                  color:  'black'
             }
           }}
       var chartOptions= {...costChartOptions,...xaxis,...title,...chart};
       return (
         <div>
             <Grid container justify='center'>
                 <Grid item xs={12} sm={12} md={0} ></Grid>
                 <Grid item xs={12} sm={12} md={6}>
                    <MDBContainer>
                         <Chart options={chartOptions} series={series} type="bar" height={chartHeight} width={'100%'}/>
                    </MDBContainer>
                 </Grid>
             </Grid>
         </div>

      );
}