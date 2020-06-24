import React from 'react';
import clsx from 'clsx';
import { Drawer, AppBar, Toolbar, List, CssBaseline, Divider, IconButton, ListItem, ListItemAvatar, ListItemText, ListItemIcon} from '@material-ui/core/';
import { Avatar, MenuItem, Grid, Menu, useScrollTrigger, makeStyles, useTheme, ClickAwayListener} from '@material-ui/core/';


import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import DescriptionIcon from '@material-ui/icons/Description';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AppsIcon from '@material-ui/icons/Apps';

import logo from '../../../img/MD1.svg';

import NavigationItems from '../NavigationItems/NavigationItems';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import {styleNav} from './Style'

import Cajon from './Drawer';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  appBar: {      
    background : '#444444',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: '#fff176'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    backgroundColor: '#F2F2F2'
  },
  
  toolbar: {
      marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  imagen: {
    maxHeight: '80px',
    margin: theme.spacing(1),
    paddingLeft: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      
      minHeight: '92px',
      margin: 'auto',
      padding: theme.spacing(1)
    },
  },
  items :{
    [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
  },
  mbutton:{
    color:'black',
    display: 'flex',
   },
   sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  subtitlem :{
    fontSize: 'subtitle', 
    color: 'black',
    align: 'center',
    justifyContent: 'center',
  },
  subtitle :{
    fontSize: 'subtitle', 
    color: 'white',
  }
}));
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Navbar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [log] = React.useState(true)
  const [user] = React.useState(false)
  const token = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openu = Boolean(anchorEl);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const mobileMenuId = 'primary-search-account-menu-mobile';
  
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <List>
      <NavigationItems style='subtitlem'/>
      </List>  
        
    </Menu>
  );
  return (
    <React.Fragment>
    <div className={classes.root}>
      <CssBaseline />
      <ElevationScroll {...props}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <img src={logo} className={classes.imagen} onClick={event => window.location.href='/'} alt='logo'/>
          <Grid container alignItems="flex-start" justify="flex-end" direction="row" className={classes.items} >
            <NavigationItems style='subtitle'/>
          </Grid>
          <div className={classes.sectionMobile}>

                        <IconButton edge='end'
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreVertIcon/>
                        </IconButton>
                    </div>
        </Toolbar>
      </AppBar>
      </ElevationScroll>
      {renderMobileMenu}
      <Cajon/>
      <div className={classes.toolbar} />
    </div>
    </React.Fragment>
  );
}
