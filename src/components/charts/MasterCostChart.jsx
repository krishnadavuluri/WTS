import React, { PureComponent } from 'react'
import Chart from "react-apexcharts";
import '../../styles/styling.css';
import { MDBContainer } from 'mdbreact';
import Grid from '@material-ui/core/Grid';
import { costChartOptions } from './chartOptions';
import {IntlProvider, FormattedMessage} from 'react-intl';
import { LangMessage } from '../../locale/locale';
export function MasterCostChart({noOfItems,actualCost,estimatedCost,itemsId,language})
{
       const actualCostLabel=LangMessage[language].actCost;
       const estimatedCostLabel=LangMessage[language].estCost;
       var height=600;//default height
       const width=window.innerWidth; //getting width of screen

       if(width<=640)
       {
           height=55*noOfItems;   //setting height of chart with respect width of screen
       }
       else if(width>640){
           height=65*noOfItems;
       }

       const series=[{name:'₹ '+actualCostLabel,data: actualCost},{name:'₹ '+estimatedCostLabel,data: estimatedCost}]; 
       const xaxis={ xaxis: {categories: itemsId }}                                               // input to chart
       var options= {...costChartOptions,...xaxis};

       return (
         <div id="chart">
             <Grid container justify='center'>
                 <Grid item xs={12} sm={12} md={0} style={{border:'none'}} ></Grid>
                 <Grid item xs={12} sm={12} md={6}>
                    <MDBContainer>
                       <IntlProvider locale={language} messages={LangMessage[language]}>
                         <h3 className='mt-5 font'><FormattedMessage id='costStatus' value={language}/></h3>
                         <Chart options={options} series={series} type="bar" height={height} width={'100%'}/> {/* calling cosrt chart */}
                       </IntlProvider>
                    </MDBContainer>
                 </Grid>
             </Grid>
         </div>

      );
}