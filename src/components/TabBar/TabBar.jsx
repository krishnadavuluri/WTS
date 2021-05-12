import React from 'react';
import {AppBar,Tabs} from '@material-ui/core';
import '../../styles/styling.css';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { LangMessage } from '../../locale/locale';
import MasterCount from '../MasterCount';
import MasterCost from '../MasterCost';
import { Table } from '../Table';
import { useHistory } from 'react-router-dom';
import { TabPanel,a11yProps , LinkTab ,useStyles} from './Tabs';
import Navbar from 'react-bootstrap/Navbar'
import Utils from '../../utils/utils';
export default function NavTabs({mwoId,data,language}) {
  
  const classes = useStyles();
  const [value, setValue] = React.useState(Utils.currentTab);
  const history=useHistory();

  const handleChange = (event, newValue) => {
        Utils.currentTab=newValue;
        setValue(Utils.currentTab);                      {/*Handle change in tab panel*/}
  };
  return (
    <div >
      <AppBar position="fixed" className='Tabbar'>
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
