import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from "react-router-dom";
import { Tooltip, Zoom, Fab  } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    top: '15vh',
    left: '12vw'
  },
}));

export default function FloatingActionButtonZoom() {
  const classes = useStyles();
  let history = useHistory();
return (
  <Tooltip title='Atrás'TransitionComponent={Zoom}>
    <Fab onClick={()=>history.goBack()} color="primary" aria-label="add" className={classes.fab}>
    <ArrowBackIcon />
  </Fab>
  </Tooltip>
);
}
