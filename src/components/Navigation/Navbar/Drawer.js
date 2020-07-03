import React from 'react';
import clsx from 'clsx';
import {useHistory} from 'react-router-dom'
import { Drawer,  Divider, IconButton, ListItem, List, ListItemText, ListItemIcon} from '@material-ui/core/';
import { Avatar,  makeStyles, useTheme, ClickAwayListener} from '@material-ui/core/';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
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


const drawerWidth = 240

const useStyles = makeStyles(theme => ({
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
    padding: theme.spacing(2),
  },
}))

export default function Cajon(props){
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const [user] = React.useState(true)


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const userDrawer =(
    <div>
      <ClickAwayListener onClickAway={handleDrawerClose}>
       <Drawer
              onClick={handleDrawerOpen}
              variant="permanent"
              className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
              })}
              classes={{
              paper: clsx({
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open,
              }),
              }}
      >
          <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
          </IconButton>
          </div>
          <Divider />
          <List>
          <ListItem>
          <ListItemIcon><Avatar alt="User Sharp" src="/static/images/avatar/1.jpg" className={classes.large} /></ListItemIcon>
          <ListItemText
          primary='Nombre Apellido'
          secondary='Usuario'
          />
          </ListItem>
          </List>
<Divider />
<Divider />
<List>
<ListItem button onClick={()=>history.push('/pacientform')}>
    <ListItemIcon>
        <PersonAddIcon/>
    </ListItemIcon>
    <ListItemText primary='Nuevo Paciente'/>
</ListItem>
<ListItem button >
    <ListItemIcon>
        <NoteAddIcon />
    </ListItemIcon>
    <ListItemText primary='Historias'/>
</ListItem>
<ListItem button onClick={()=>history.push('/investigation')}>
    <ListItemIcon>
        <FindInPageIcon/>
    </ListItemIcon>
    <ListItemText primary='Investigación'/>
</ListItem>
<ListItem button >
    <ListItemIcon>
        <DonutLargeIcon/>
    </ListItemIcon>
    <ListItemText primary='Medicamentos'/>
</ListItem>
<ListItem button onClick={()=>history.push('/examsview')}>
    <ListItemIcon>
    <DescriptionIcon/>
    </ListItemIcon>
    <ListItemText primary='Exámenes'/>
</ListItem>
<ListItem button >
    <ListItemIcon>
        <FiberNewIcon/>
    </ListItemIcon>
    <ListItemText primary='Noticias'/>
</ListItem>
<ListItem button onClick={()=>history.push('/profile')}>
    <ListItemIcon>
        <AppsIcon/>
    </ListItemIcon>
    <ListItemText primary='Menú'/>
</ListItem>
</List>
<Divider/>
<List>
<ListItem button >
    <ListItemIcon>
        <SettingsIcon/>
    </ListItemIcon>
    <ListItemText primary='Configuración'/>
</ListItem>
      <ListItem button >
          <ListItemIcon>
              <PowerSettingsNewIcon/>
          </ListItemIcon>
          <ListItemText primary='Cerrar Sesión'/>
      </ListItem>
  </List>
  </Drawer>
  </ClickAwayListener>
 
  </div>
);
  const adminDrawer =(
  <div>
    <ClickAwayListener onClickAway={handleDrawerClose}>
      <Drawer
              variant="permanent"
              onClick={handleDrawerOpen}
              className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
              })}
              classes={{
              paper: clsx({
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open,
              }),
              }}
      >
          <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
          </div>
          <Divider/>
      <div>
          <List>
          <ListItem>
          <ListItemIcon><Avatar alt="Admin Sharp" src="/static/images/avatar/1.jpg" className={classes.large} /></ListItemIcon>
          <ListItemText
          primary='Nombre Apellido'
          secondary='Administrador'
          />
          </ListItem>
          </List>
          <Divider/>
          <List>
          <ListItem button >
          <ListItemIcon>
              <SupervisorAccountIcon/>
          </ListItemIcon>
          <ListItemText primary='Usuarios'/>
          </ListItem>
          <ListItem button >
          <ListItemIcon>
              <DonutLargeIcon/>
          </ListItemIcon>
          <ListItemText primary='Medicamentos'/>
          </ListItem>
          <ListItem button >
          <ListItemIcon>
              <DescriptionIcon/>
          </ListItemIcon>
          <ListItemText primary='Examenes'/>
          </ListItem>
          <ListItem button >
          <ListItemIcon>
              <FiberNewIcon/>
          </ListItemIcon>
          <ListItemText primary='Noticias'/>
          </ListItem>
          <ListItem button >
          <ListItemIcon>
              <AppsIcon/>
          </ListItemIcon>
          <ListItemText primary='Menú'/>
          </ListItem>
          </List>
          <Divider/>
          <List>
          <ListItem button >
          <ListItemIcon>
              <SettingsIcon/>
          </ListItemIcon>
          <ListItemText primary='Configuración'/>
          </ListItem>
              <ListItem button >
                  <ListItemIcon>
                      <PowerSettingsNewIcon/>
                  </ListItemIcon>
                  <ListItemText primary='Cerrar Sesión'/>
              </ListItem>
          </List>
      </div>
</Drawer>
</ClickAwayListener>
</div>
);
  return (
    <div>
      {user ? userDrawer : adminDrawer}
    </div>
  )
}