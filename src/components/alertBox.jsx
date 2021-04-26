import React ,{useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import { useHistory } from "react-router-dom";
import Grid  from '@material-ui/core/Grid';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { LangMessage } from '../locale/locale';
export function AlertDismissibleExample({language,from,id}) {
    const [show, setShow] = useState(true);
    const history=useHistory();
    console.log('eeroe is called')
    if (show) {
        return (
            <Grid container justify='center' style={{marginTop:'330px'}}>
                <Grid item xs={12} sm={12} md={6}>
                   <Alert variant="danger" onClose={() => history.goBack()} dismissible>
                       <IntlProvider locale={language} messages={LangMessage[language]}>
                           <Alert.Heading><FormattedMessage id='error' value={language}/></Alert.Heading>
                       </IntlProvider>
                   </Alert>
                </Grid>
            </Grid>
        );
      }
  }
