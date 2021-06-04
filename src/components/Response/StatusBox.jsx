import React from 'react'
import './../../styles/styling.css';
import Grid from '@material-ui/core/Grid';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import axios from 'axios';
import {IntlProvider, FormattedMessage} from 'react-intl';
import Utils from '../../utils/utils';
import { LangMessage } from '../../locale/locale';
const StatusBox = ({Data,lang}) => {
    const statusCount=Utils.getStatusCount(Data);
    console.log(statusCount)
    return (
        <div className='defaultMargin'>
            <IntlProvider  locale={lang} messages={LangMessage[lang]}>
              <Grid container justify='center'>
                  <Grid item xs={3} lg={1} className='bg Border'>
                      <FormattedMessage id='status' value={lang}/>
                  </Grid>
                  <Grid item xs={3} lg={1} className='bg Border'>
                      <FormattedMessage id='count' value={lang}/>
                  </Grid>
              </Grid>   
            </IntlProvider>
            <Grid container justify='center'>
                  <Grid item xs={3} lg={1} className='Border'  >
                    <WbIncandescentIcon style={{color:'Green'}}/>
                  </Grid>
                  <Grid item xs={3} lg={1} className='Border'  >
                    {statusCount['Green']}
                  </Grid>
            </Grid>
            <Grid container justify='center'>
                  <Grid item xs={3} lg={1} className='Border'>
                    <WbIncandescentIcon style={{color:'Orange'}}/>
                  </Grid>
                  <Grid item xs={3} lg={1} className='Border'>
                    {statusCount['Orange']}
                  </Grid>
            </Grid>
            <Grid container justify='center'>
                  <Grid item xs={3} lg={1} className='Border'>
                    <WbIncandescentIcon style={{color:'Red'}}/>
                  </Grid>
                  <Grid item xs={3} lg={1} className='Border'>
                    {statusCount['Red']}
                  </Grid>
            </Grid>
        </div>
    )
}

export default StatusBox;
