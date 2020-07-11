import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from '../../axios-instance';
import { makeStyles } from '@material-ui/core/styles';
import {Card, Grid, Divider, CssBaseline} from '@material-ui/core/';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import BackButton from '../../components/UI/BackButton/BackButton';



const useStyles = makeStyles  ((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    background: '#DFE9F2',
    borderRadius: "0.5rem",
    padding: theme.spacing(2),
  },
  icon: {
    marginLeft: '80%',
    marginTop: '15%',
    color: 'green',
    '&:hover': {
    color: 'yellow',
    cursor: 'pointer'
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  exp: {
    backgroundColor: 'white',
    borderRadius: '0.5rem'
  }
}));

const getData = (array) => {
  array = array.map(a => a.name)
  return array.join()
}

const ImgMediaCard =  function(props) {
  const classes = useStyles();
  const { id } = useParams()
  const [clinical_story, setClinicalStory] = useState(null)


  useEffect(() => {
    if(!clinical_story) {
      const config = {
        headers: { Authorization: "Bearer " + props.token }
      }
      axios.get('clinical_stories/' + id, config)
        .then((response) => {
          setClinicalStory(response.data.data)
        })
        .catch((err) => {

        })
    }
  })

  return (
    <Grid container>
      <BackButton/>
      <Grid item sm={12}>
      <Container component="main" className={classes.container}>
        <CssBaseline/>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"
          
        >
              <Grid item xs={12} sm={12}>
              <Typography variant="h4" align='center' color="initial">Caso de estudio</Typography>
              </Grid>
      </Grid>
      
    <Grid
      container
      spacing={2}
      direction="row"
      alignItems="flex-start" 
      justify="flex-start"
      className={classes.pacient}
    >
      <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="223"
              image={require("../../img/braidn.svg")}
              title="Contemplative Reptile"
            />
            </CardActionArea>
            </Card>
      </Grid>
      <Grid item xs={9}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
            <Grid item xl={2} lg={2} md={1} sm={6} xs={12}>
                <TextField
                        variant="outlined"
                        InputProps={{
                            readOnly: true,
                          }}
                        fullWidth
                        label="Edad"
                        size='small'
                        value={clinical_story?.edad_paciente || 0}
                    />
                </Grid>
                <Grid item xl={2} lg={2} md={2} sm={6} xs={12}>
                <TextField
                        variant="outlined"
                        InputProps={{
                            readOnly: true,
                          }}
                        fullWidth
                        label="Genero"
                        size='small'
                        value={clinical_story?.pacient.gender || ''}
                    />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                <TextField
                        variant="outlined"
                        InputProps={{
                            readOnly: true,
                          }}
                        fullWidth
                        id="direction"
                        label="Profesion"
                        size='small'
                        value={clinical_story?.pacient.profession || ''}
                    />
                </Grid>
                <Grid item xl={2} lg={2} md={3} sm={6} xs={12}>
                <TextField
                        variant="outlined"
                        InputProps={{
                            readOnly: true,
                          }}
                        fullWidth
                        id="direction"
                        label="Tipo de sangre"
                        size='small'
                        value={clinical_story?.pacient.blood_type || ''}
                    />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                <TextField
                        variant="outlined"
                        InputProps={{
                            readOnly: true,
                          }}
                        fullWidth
                        id="direction"
                        label="Estado civil"
                        size='small'
                        value={clinical_story?.pacient.marital_status || ''}
                    />
                </Grid>
      <Grid item sm={6}>
            <Typography align= "left" className={classes.info}>Antecedentes personales</Typography>
            <TextField
                                id="first"
                                type="text"
                                htmlFor="name"
                                name="first_name"
                                variant="outlined"
                                fullWidth
                                InputProps={{
                                  readOnly: true,
                                }}
                                placeholder="Antecedentes personales"
                                value={clinical_story?.pacient?.personal_backgrounds ? getData(clinical_story.pacient.personal_backgrounds) : ' '}

                                />
      </Grid>
      <Grid item sm={6}>
            <Typography align= "left" className={classes.info}>Antecedentes familiares</Typography>
                        <TextField
                                id="first"
                                type="text"
                                htmlFor="name"
                                name="first_name"
                                variant="outlined"
                                fullWidth
                                InputProps={{
                                  readOnly: true,
                                }}
                                value={clinical_story?.pacient?.family_backgrounds ? getData(clinical_story.pacient.family_backgrounds) : ' '}
                                placeholder="Antecedentes familiares"
                                />
      </Grid>
      <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                <TextField
                        variant="outlined"
                        InputProps={{
                            readOnly: true,
                          }}
                        fullWidth
                        id="direction"
                        label="Estado"
                        size='small'
                        value={clinical_story?.pacient?.direction?.state?.name || ''}
                    />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                <TextField
                        variant="outlined"
                        InputProps={{
                            readOnly: true,
                          }}
                        fullWidth
                        id="direction"
                        label="Pais"
                        size='small'
                        value={clinical_story?.pacient?.direction?.country?.country_name || ''}
                    />
                </Grid>
                <Grid item xl={6} lg={6} md={3} sm={6} xs={12}>
                <TextField
                        variant="outlined"
                        InputProps={{
                            readOnly: true,
                          }}
                        fullWidth
                        id="direction"
                        label="Diagnostico"
                        size='small'
                        value={clinical_story?.diagnosis || ''}
                    />
                </Grid>
    </Grid>
      
      </Paper>
      </Grid>
     <Grid
       container
       spacing={1}
       direction="row"
       justify="center"
       alignItems="center"
       alignContent="center"
       wrap="nowrap"
       
     >
      <Grid item sm={12}>
        <Paper className={classes.paper}>
        <Typography variant="h4" color="initial" > Detalles del caso</Typography>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Motivo de consulta</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid item lg={12}>
                    <TextField
                          variant="outlined"
                          InputProps={{
                            readOnly: true,
                          }}
                          multiline
                          rows={8}
                          fullWidth
                          rowsMax="10"
                          id="fisical_exam"
                          label="Motivo de consulta"
                          value={clinical_story?.description|| ''}
                        />
                  </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Sintomatologia</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          {clinical_story?.symptoms ? getData(clinical_story.symptoms) : ' '}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Examen fisico</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid container spacing={1}>
                  <Grid item lg={10}>
                    <TextField
                          autoComplete=""
                          name="fisical_exam"
                          variant="outlined"
                          InputProps={{
                            readOnly: true,
                          }}
                          multiline
                          rows={8}
                          fullWidth
                          rowsMax="10"
                          id="fisical_exam"
                          label="Examen Fisico"
                          value={clinical_story?.fisical_exam || ''}
                        />
                  </Grid>
                  <Grid item lg={2}>
                    <Grid container direction="column" spacing={1}>
                    <Grid item lg={12}>
                              <TextField
                              name="observations"
                              variant="outlined"
                              fullWidth
                              InputProps={{
                                readOnly: true,
                              }}
                              size='small'
                              id="diastolica"
                              label="Presion Diastolica"
                              value={clinical_story?.diastolic || ''}
                            />
                          </Grid>
                          <Grid item lg={12}>
                              <TextField
                              name="observations"
                              variant="outlined"
                              fullWidth
                              InputProps={{
                                readOnly: true,
                              }}
                              size='small'
                              id="diastolica"
                              label="Presion Sistolica"
                              value={clinical_story?.sistolic || ''}
                            />
                          </Grid>
                          <Grid item lg={12}>
                              <TextField
                              name="observations"
                              variant="outlined"
                              fullWidth
                              InputProps={{
                                readOnly: true,
                              }}
                              size='small'
                              id="diastolica"
                              label="Estatura (cm)"
                              value={clinical_story?.height || ''}
                            />
                          </Grid>
                          <Grid item lg={12}>
                              <TextField
                              name="observations"
                              variant="outlined"
                              fullWidth
                              InputProps={{
                                readOnly: true,
                              }}
                              size='small'
                              id="diastolica"
                              label="Peso (Kg)"
                              value={clinical_story?.weight || ''}
                            />
                          </Grid>
                    </Grid>
                  </Grid>
                </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Observaciones</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid item lg={10}>
                    <TextField
                          autoComplete=""
                          name="fisical_exam"
                          variant="outlined"
                          InputProps={{
                            readOnly: true,
                          }}
                          multiline
                          rows={8}
                          fullWidth
                          rowsMax="10"
                          id="fisical_exam"
                          label="Observaciones"
                          value={clinical_story?.observations || ''}
                        />
                  </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </Paper>
      </Grid>
      </Grid>
      </Grid>
    </Container>
            </Grid>
            </Grid>
  );
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImgMediaCard)