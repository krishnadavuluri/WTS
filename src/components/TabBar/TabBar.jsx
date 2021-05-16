import React from 'react';
import {AppBar,Tabs} from '@material-ui/core';
import '../../styles/styling.css';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { LangMessage } from '../../locale/locale';
import MasterCount from '../Main/MasterCount';
import MasterCost from '../Main/MasterCost';
import { Table } from '../Table/Table';
import { useHistory } from 'react-router-dom';
import { TabPanel,a11yProps , LinkTab ,useStyles} from './Tabs';

import Utils from '../../utils/utils';
export default function NavTabs({mwoId,data,language,state}) {
  
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
          className={classes.root} 
          TabIndicatorProps={{style: {backgroundColor: "#5D7700"}}}
          >
          <LinkTab className={value===0?classes.activeTab:classes.tab} 
            style={value===0?{ color:'white'}:{color:'black'}} 
            label={<FormattedMessage id='completion' value={language}/>} {...a11yProps(0)} />
          <LinkTab className={value===1?classes.activeTab:classes.tab}
            style={value===1?{ color:'white'}:{color:'black'}} 
            label={<FormattedMessage id='cost' value={language}/>}  {...a11yProps(1)} />
          <LinkTab className={value===2?classes.activeTab:classes.tab} 
            style={value===2?{ color:'white'}:{color:'black'}} 
            label={<FormattedMessage id='orderDetails' value={language}/>} {...a11yProps(2)} />
        </Tabs>
       </IntlProvider> 
      </AppBar>

        <TabPanel  value={value} index={0}>
          <MasterCount state={state}  data={data} language={language} mwoId={mwoId}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
           <MasterCost state={state} mwoId={mwoId} data={data} language={language}/> {/* Tab buttons*/}
        </TabPanel>
        <TabPanel value={value} index={2}>
           <Table 
              state={state}
              data={data}
              mwoId={mwoId}
              language={language} 
              tableType='item' />
      </TabPanel>

    </div>
  );
}
