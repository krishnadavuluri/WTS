import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import '../../styles/styling.css';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { LangMessage } from '../../locale/locale';
import MasterCount from '../MasterCount';
import MasterCost from '../MasterCost';
import { Table } from '../Table';
import { useHistory } from 'react-router-dom';
import { TabPanel,a11yProps , LinkTab ,useStyles} from './Tabs';
export default function NavTabs({mwoId,data,language}) {
  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history=useHistory();

  const handleChange = (event, newValue) => {
        setValue(newValue);                      {/*Handle change in tab panel*/}
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{marginTop:'42px'}}>
      <IntlProvider locale={language} messages={LangMessage[language]}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          style={{backgroundColor:'#d9d8d7'}}
          >
          <LinkTab label={<FormattedMessage id='completion' value={language}/>} {...a11yProps(0)} />
          <LinkTab label={<FormattedMessage id='cost' value={language}/>}  {...a11yProps(1)} />
          <LinkTab label={<FormattedMessage id='orderDetails' value={language}/>} {...a11yProps(2)} />
        </Tabs>
       </IntlProvider> 
      </AppBar>

        <TabPanel value={value} index={0}>
          <MasterCount  data={data} language={language} mwoId={mwoId}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
           <MasterCost mwoId={mwoId} data={data} language={language}/> {/* Tab buttons*/}
        </TabPanel>
        <TabPanel value={value} index={2}>
           <Table 
              data={data}
              mwoId={mwoId}
              language={language} 
              tableType='item' />
      </TabPanel>

    </div>
  );
}
