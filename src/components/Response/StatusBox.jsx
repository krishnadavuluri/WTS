import React from 'react'
import './../../styles/styling.css';
import Grid from '@material-ui/core/Grid';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import axios from 'axios';
import {IntlProvider, FormattedMessage} from 'react-intl';
import Utils from '../../utils/utils';
import { LangMessage } from '../../locale/locale';
const StatusBox = ({issueStatus}) => {
    //console.log('IssueStatus',issueStatus);
    return (
        <div>
          <Grid container justify='center'>
            <Grid xs={4} className=''>
              <center><span><WbIncandescentIcon className='GreenColor'/> <strong>{issueStatus[0]}</strong></span></center>
            </Grid>
            <Grid xs={4} className='LeftRightBorder'>
              <center><span><WbIncandescentIcon className='OrangeColor'/> <strong>{issueStatus[2]}</strong></span></center>
            </Grid>
            <Grid xs={4} className=''>
              <center><span><WbIncandescentIcon className='RedColor'/> <strong>{issueStatus[1]}</strong></span></center>
            </Grid>
          </Grid>
        </div>
    )
}

export default StatusBox;
