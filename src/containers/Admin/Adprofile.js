import React, {Component} from "react";
import { withStyles, makeStyles, Tooltip, Zoom } from "@material-ui/core/";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(8),
    display: 'flex-end',
    flexDirection: 'column',
    width: '15rem',
  },
  cont: {
    maxHeight: '60vh'
  },
  button:{
    display: 'flex', 
    color: '',
  },
  centro: {
    minHeight:"90vh"
  }
}))

export default function AdProfile (props) {
  const classes = useStyles();
  const history = useHistory();
      
    return (
      <div container className={classes.cont}>
        <Grid container spacing={10} direction="row"
          alignItems="center"
          justify="center" className={classes.centro}>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={11}  >
          <Tooltip title='Agregar o deshabilitar'TransitionComponent={Zoom}>
            <Paper className={classes.paper} >            
                <Card>
                  <CardActionArea className={classes.card}>
                    <CardMedia
                      className="ccalendari"
                      component="img"
                      alt="Citas"                    
                      image={require("../../img/monitor.svg")}
                      title="Administrar usuarios"
                      onClick={()=>history.push('/Adusers')}
                    />
                    <CardActions>
                    <Button color="secondary" variant="contained" fullWidth>
                    Administrar usuarios
                    </Button>
                  </CardActions>
                  </CardActionArea>
                </Card>            
            </Paper>
            </Tooltip>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={11} >
          <Tooltip title='Administrar examenes'TransitionComponent={Zoom}>
            <Paper className={classes.paper}>
            <Card>
                  <CardActionArea className={classes.card}>
                    <CardMedia
                      className="ccalendari"
                      component="img"
                      alt="report"                    
                      image={require("../../img/report.png")}
                      
                      title="Historias"
                      onClick={()=>history.push('/Adexams')}  
                    />
                    <CardActions>
                    <Button color="secondary" variant="contained" fullWidth>
                      Administrar Examenes
                    </Button>
                  </CardActions>
                  </CardActionArea>
                </Card>
              </Paper>
              </Tooltip>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={12} >
          <Tooltip title='Agregar o deshabilitar Medicamentos'TransitionComponent={Zoom}>
            <Paper className={classes.paper}>
              <Card>
                  <CardActionArea className={classes.card}>
                    <CardMedia
                      className="ccalendari"
                      component="img"
                      alt="Citas"                    
                      image={require("../../img/adminpil.svg")}
                      
                      title="Investigacion"
                      onClick={()=>history.push('/Admedicamentos')}  
                    />
                    <CardActions>
                    <Button color="secondary" variant="contained" fullWidth>
                      Admin Medicamentos
                    </Button>
                  </CardActions>
                  </CardActionArea>
                </Card>
              </Paper>
              </Tooltip>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={12} >
          <Tooltip title='Agregar o deshabilitar antecedentes'TransitionComponent={Zoom}>
            <Paper className={classes.paper}>
              <Card>
                  <CardActionArea className={classes.card}>
                    <CardMedia
                      className="Adant"
                      component="img"
                      alt="Administrar Antecedentes"                    
                      image={require("../../img/qualification.png")}
                      
                      title="Administrar Antecedentes"
                      onClick={()=>history.push('/Adant')}  
                    />
                    <CardActions>
                    <Button color="secondary" variant="contained" fullWidth>
                      Admi Antecedentes
                    </Button>
                  </CardActions>
                  </CardActionArea>
                </Card>
              </Paper>
              </Tooltip>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={12} >
          <Tooltip title='Administrar API de noticias'TransitionComponent={Zoom}>
            <Paper className={classes.paper}>
              <Card>
                  <CardActionArea className={classes.card}>
                    <CardMedia
                      className="adnews"
                      component="img"
                      alt="Administrar Noticias"                    
                      image={require("../../img/newspaper.png")}
                      
                      title="Adnews"
                      onClick={()=>history.push('/Adnews')}  
                    />
                    <CardActions>
                    <Button color="secondary" variant="contained" fullWidth>
                      Administrar Noticias
                    </Button>
                  </CardActions>
                  </CardActionArea>
                </Card>
              </Paper>
              </Tooltip>
          </Grid>
        </Grid>
      </div>
    );
   }


const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}