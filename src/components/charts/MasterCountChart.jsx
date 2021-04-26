import React  from 'react';
import { Polar} from "react-chartjs-2";
import { MDBContainer }from "mdbreact";
import Grid from '@material-ui/core/Grid';
import '../../styles/styling.css';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { LangMessage } from '../../locale/locale';
function MasterCountChart({data,noOfItems,language})
{
    var height=150;                 //default height
    const width=window.innerWidth;        //getting width of screen
    console.log(language);
    if(width<=640)
    {
        height=35*noOfItems;              //setting height of chart with respect width of screen
    }
    else if(width>640){
       height=20*noOfItems;
    }
    return (
    <Grid container justify='center'>
        <Grid item xs={12} sm={12} md={5} style={{border:'none'}} >
           <MDBContainer >
              <h3 className="mt-5 font">
                  <IntlProvider locale={language} messages={LangMessage[language]}>
                  <FormattedMessage id='completionPercentage' value={language}/>
                  </IntlProvider>
              </h3>
              <Polar data={data} height={height}  options={{ responsive: true }}/>    {/* calling count chart */}
           </MDBContainer>
        </Grid>
    </Grid>  
    );
}
export default MasterCountChart;