import React, { PureComponent ,useState} from 'react'
import Chart from "react-apexcharts";
import '../../styles/styling.css';
import { MDBContainer } from 'mdbreact';
import Grid from '@material-ui/core/Grid';
import { costChartOptions } from './chartOptions';
import {IntlProvider, FormattedMessage} from 'react-intl';
import { LangMessage } from '../../locale/locale';
import { FinalTry } from '../TestChart';
export function MasterCostChart({noOfItems,actualCost,estimatedCost,itemsId,language,type})
{
       console.log('To cost Chart:',type);
       const actualCostLabel=LangMessage[language].actCost;
       const estimatedCostLabel=LangMessage[language].estCost;
       var height=600;            //default height
       const width=window.innerWidth; //getting width of screen
       var chartHeading;
       if(type==='more')
       {
          chartHeading='Exceeded Cost Items'
       }
       else if(type==='least')
       {
         chartHeading='Least Spent Items' 
       }
       else if(type==='most')
       {
         chartHeading='Most Spent Items' 
       }
       else{
           chartHeading='';
       }
       if(width<=640)
       {
           height=55*noOfItems;   //setting height of chart with respect width of screen
       }
       else if(width>640){
           height=65*noOfItems;
       }
       var series=[{name:'₹ '+actualCostLabel,data: actualCost},{name:'₹ '+estimatedCostLabel,data: estimatedCost}]; 
       var xaxis={ xaxis: {categories: itemsId }}                                        // input to chart
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
       var options= {...costChartOptions,...xaxis,...title};
       //console.log(series,xaxis);
       return (
         <div>
             {console.log('Chart render!!',series,options)}
             <Grid container justify='center'>
                 <Grid item xs={12} sm={12} md={0} ></Grid>
                 <Grid item xs={12} sm={12} md={6}>
                    <MDBContainer>
                       <IntlProvider locale={language} messages={LangMessage[language]}>
                         <Chart options={options} series={series} type="bar" height={height} width={'100%'}/>
                       </IntlProvider>
                    </MDBContainer>
                 </Grid>
             </Grid>
         </div>

      );
}