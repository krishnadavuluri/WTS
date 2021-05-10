import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../styles/styling.css';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { LangMessage } from '../locale/locale';
import MasterCount from './MasterCount';
import MasterCost from './MasterCost';
import { Table } from './Table';
import { useHistory } from 'react-router-dom';
import Service from '../utils/service';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab style={{color:"black"}}
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs({mwoId,data,language,pageUrls}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history=useHistory();
  console.log('History object',history.location.pathname);
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        {/*  */}
        <TabPanel value={value} index={0}>
          <MasterCount  data={data} language={language} mwoId={mwoId}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
           <MasterCost  data={data} language={language}/>
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
