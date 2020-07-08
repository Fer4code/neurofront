import React, {Component} from "react";
import {useHistory} from 'react-router-dom'
import { makeStyles, Tooltip, Zoom } from "@material-ui/core/";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    width: '15rem',
  },
  cont: {
    position: 'center',
    marginTop: '10%',
    marginLeft: '8%',
    minHeight: '90vh'
  },
  card :{
    marginTop: theme.spacing(1)
  }
}))

export default function Profile (props) {
  const classes = useStyles()
    const history = useHistory()
   
    return (
      <div container className="cont">
        
        <Grid container spacing={10} justify="center">
          <Grid item xl={4} lg={4} md={4} sm={6} xs={11}>
          <Tooltip title='Registrar paciente nuevo'TransitionComponent={Zoom}>
            <Paper className={classes.paper} >            
                <Card>
                  <CardActionArea className={classes.card}>
                    <CardMedia
                      className="ccalendari"
                      component="img"
                      alt="Agrega un nuevo paciente"                    
                      image={require("../../img/patient.svg")}
                        
                      onClick={()=>history.push('/pacientform')}          
                    />
                    <CardActions>
                    <Button color="secondary"  onClick={()=>history.push('/pacientform')} variant="contained" fullWidth>
                      Paciente Nuevo
                    </Button>
                  </CardActions>
                  </CardActionArea>
                </Card>            
            </Paper>
            </Tooltip>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={11} >
          <Tooltip title='Ver mis historias registradas'TransitionComponent={Zoom}>
            <Paper className={classes.paper}>
            <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className="ccalendari"
                      component="img"
                      alt="report"                    
                      image={require("../../img/report.png")}
                      onClick={()=>history.push('/patientsview')}
                      title="Historias"
                                
                    />
                    <CardActions>
                    <Button color="secondary" onClick={()=>history.push('/patientsview')} variant="contained" fullWidth>
                      Mis Historias
                    </Button>
                  </CardActions>
                  </CardActionArea>
                </Card>
              </Paper>
              </Tooltip>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={11} >
          <Tooltip title='Abrir el panel de investigación'TransitionComponent={Zoom}>
            <Paper className={classes.paper}>
              <Card>
                  <CardActionArea className={classes.card}>
                    <CardMedia
                      className="ccalendari"
                      component="img"
                      alt="Citas"                    
                      image={require("../../img/dna.png")}
                      onClick={()=>history.push('/investigation')}
                      title="Investigacion"
                                
                    />
                    <CardActions>
                    <Button color="secondary" onClick={()=>history.push('/investigation')} variant="contained" fullWidth>
                      Investigación
                    </Button>
                  </CardActions>
                  </CardActionArea>
                </Card>
              </Paper>
              </Tooltip>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={11} >
          <Tooltip title='Ver información de los examenes registrados'TransitionComponent={Zoom}>
            <Paper className={classes.paper}>
            <Card>
                  <CardActionArea className={classes.card}>
                    <CardMedia
                      className="ccalendari"
                      component="img"
                      image={require("../../img/qualification.png")}
                      onClick={()=>history.push('/examsview')}
                      title="Examenes"
                                
                    />
                    <CardActions>
                    <Button color="secondary" onClick={()=>history.push('/examsview')} variant="contained" fullWidth>
                      Examenes
                    </Button>
                  </CardActions>
                  </CardActionArea>
                </Card>
              </Paper> 
            </Tooltip>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={11} >
          <Tooltip title='Ver información de los Medicamentos'TransitionComponent={Zoom}>
            <Paper className={classes.paper}><Card>
                  <CardActionArea className={classes.card}>
                    <CardMedia
                      className="ccalendari"
                      component="img"
                      alt="Citas"                    
                      image={require("../../img/pills.png")}
                      title="Citas"
                      onClick={()=>history.push('/Medsview')}          
                    />
                    <CardActions>
                    <Button color="secondary"  onClick={()=>history.push('/Medsview')} variant="contained" fullWidth>
                      Medicamentos
                    </Button>
                  </CardActions>
                  </CardActionArea>
                </Card>
                </Paper>
                </Tooltip>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={11} >
          <Tooltip title='Ver Noticias'TransitionComponent={Zoom}>
            <Paper className={classes.paper}>
              <Card>
                  <CardActionArea className={classes.card}>
                    <CardMedia
                      component="img"
                      alt="Citas"
                      style={{padding: 8}}
                      image={require("../../img/newspaper.png")}
                      title="Citas"
                      onClick={()=>history.push('/newsviews')}         
                    />
                    <CardActions>
                    <Button color="secondary"  onClick={()=>history.push('/newsviews')} variant="contained" fullWidth>
                      Noticias
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