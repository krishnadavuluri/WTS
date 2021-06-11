import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor:'white'
    },
    tab:{
      color:'black',
      background:'white','&:hover': {
        background: "#c8ff00",
      },
      borderLeft:'1px solid #bdbdbb',
      borderRight:'1px solid #bdbdbb'
    },
    activeTab:{
      color:'red',
      background:'#5D7700',
    },
  }));  
export function TabPanel(props) {
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

  export function a11yProps(index) {
    return {
      id: `nav-tab-${index}`,
      'aria-controls': `nav-tabpanel-${index}`,
    };
  }

  export function LinkTab(props) {
    console.log(props);
    return (
      <Tab 
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }
