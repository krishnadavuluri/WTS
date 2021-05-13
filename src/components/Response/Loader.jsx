import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
export default function Loader() {
  return <CircularProgress style={{color: "#c8ff00", marginTop:'300px' }} disableShrink />;
}
