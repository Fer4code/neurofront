import React from 'react'
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {CssBaseline, Grid } from '@material-ui/core/';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import * as actions from '../../store/actions/index';
import NamesInputArea from '../../components/NamesInputArea/NamesInputArea'
import PersonalDataArea from '../../components/PersonalDataArea/PersonalDataArea'
import DetailsArea from '../../components/DetailsArea/DetailsArea'
import ResultsArea from '../../components/ResultsArea/ResultsArea'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import BackButton from '../../components/UI/BackButton/BackButton';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      background: '#ffff',
      borderRadius: "0.5rem"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: '#D93250' ,
      color: '#FFFFFF'
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.h2,
    },  
  }));
const PacientForm = (props) => {
    React.useEffect(() => {
        if(props.countryData.length == 0) {
          props.onInitFormData(true);
        }
    })
    const [names, setNames] = React.useState({
      first_name: '',
      second_name: '',
      last_name: '',
      second_last_name: '',
    })
    const [personalData, setPersonalData] = React.useState({
      birth_date: new Date(),
      edad_paciente: 0,
      gender: '',
      blood_type: '',
      marital_status: '',
      documentType: 'V-',
      document: '',
      profession: '',
      telephone: '',
      telephone2: '',
      direction: '',
      country: '',
      state: '',
      municipality: '',
    })
    const [detailsData, setDetailsData] = React.useState({
      description: '',
      symptoms: [],
      personal_backgrounds: [],
      family_backgrounds: [],
      vaccines: [],
      symptoms: [],
      fisical_exam: '',
      diastolic: '',
      sistolic: '',
      pulse: '',
      frec_resp: '',
      temp: '',
      height: '',
      weight: ''
    })
    const [resultsData, setResultsData] = React.useState({
      observations: '',
      diagnosis: '',
      metadata: [],
      relevantMetadata: []
    })
    const handleNamesData = event => {
      setNames({
        ...names,
        [event.target.name]: event.target.value
      })
    }
    const handlePersonalData = event => {
      if(event.target) {
        if(event.target.name === "country" && event.target.value != personalData.country) {
          props.fetchStates(event.target.value)
          setPersonalData({
            ...personalData,
            "country": event.target.value,
            "state": '',
            "municipality": ''
          })
        } else if (event.target.name === "state" && event.target.value != personalData.state) {
          props.fetchMunicipalities(event.target.value)
          setPersonalData({
            ...personalData,
            "state": event.target.value,
            "municipality": ''
          })
        } else {
          setPersonalData({
            ...personalData,
            [event.target.name]: event.target.value
          })
        }
      } else {
        var diff_ms = Date.now() - event.getTime();
        var age_dt = new Date(diff_ms); 
  
        const age = Math.abs(age_dt.getUTCFullYear() - 1970)
        setPersonalData({
          ...personalData,
          "birth_date": event,
          edad_paciente: age
        })
      }
    }
    const handleDetailsData = event => {
      setDetailsData({
        ...detailsData,
        [event.target.name]: event.target.value
      })
    }
    const handleExaminationData = event => {
      if (event.target.name == "metadata") {
        const array = resultsData.relevantMetadata.filter((option) => event.target.value.includes(option))
        setResultsData({
          ...resultsData,
          [event.target.name]: event.target.value,
          relevantMetadata: array
        })  
      } else {
        setResultsData({
          ...resultsData,
          [event.target.name]: event.target.value
        }) 
      }
    }
    const handlePrefixedInput = name => event => {
      setPersonalData({
        ...personalData,
        [name]: event.target.value
      })
    }
    const handleSubmit = (event) => {
      event.preventDefault()
      
      const formData = {
        user_id: props.user_id,
        ...names,
        ...personalData,
        ...detailsData,
        ...resultsData
      }
      props.saveClinicalStory(formData, props.token)
    }
    const classes = useStyles()

    const familyMembers = ["Madre", "Padre", "Abuela materna", "Abuela paterna", "Abuelo materno", "Abuelo paterno"]
    let familyBackgroundList = []
    props.backgroundData.forEach((background) => {
      familyMembers.forEach((member) => {
        familyBackgroundList.push({...background, member})
      })
    })
    if (props.saved) {
      setNames({
        first_name: '',
        second_name: '',
        last_name: '',
        second_last_name: '',
      })
      setPersonalData({
        birth_date: new Date(),
        edad_paciente: 0,
        gender: '',
        blood_type: '',
        marital_status: '',
        documentType: 'V-',
        document: '',
        profession: '',
        telephone: '',
        telephone2: '',
        direction: '',
        country: '',
        state: '',
        municipality: '',
      })
      setDetailsData({
        description: '',
        symptoms: [],
        personal_backgrounds: [],
        family_backgrounds: [],
        vaccines: [],
        symptoms: [],
        fisical_exam: '',
        diastolic: '',
        sistolic: '',
        pulse: '',
        frec_resp: '',
        temp: '',
        height: '',
        weight: ''
      })
      setResultsData({
        observations: '',
        diagnosis: '',
        metadata: [],
        relevantMetadata: []
      })
    }
    
    const timer = true
    if(timer && props.completed) {
      setTimeout(() => timer = false, 2000)
    }
    const handleLogin = () => {
      this.props.history.push("/login");
    };
    const handleInicio = () => {
      this.props.history.push("/");
    };
    let dialogOpen = true
    if(props.saveClinicalStory) {
     dialogOpen = false
    }
    return (
      <Grid container>
        <BackButton/>
        { props.completed && timer ? alert("Historia registrada") : null}
        <Dialog
        open={dialogOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Te has registrado exitosamente
          <CheckCircleIcon fontSize='large' className={classes.icon}/>
          </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Qué prefieres hacer?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleInicio} color="primary">
            Volver al inicio
          </Button>
          <Button onClick={handleLogin} color="primary" autoFocus>
            Iniciar Sesión
          </Button>
        </DialogActions>
      </Dialog>
      <Grid item sm={12}>
            <Container component="main" className={classes.paper}>
              <CssBaseline />
                <Avatar variant='rounded' className={classes.avatar} >
                    <PersonAddIcon />
                </Avatar>
                <h2>Historia Médica</h2>
                <form onSubmit={handleSubmit}>
                    <NamesInputArea
                      first_name={names.first_name}
                      second_name={names.second_name}
                      last_name={names.last_name}
                      second_last_name={names.second_last_name}
                      onChangeFnc={handleNamesData}
                      errors={props.errors}
                    />
                    <PersonalDataArea 
                      birth_date={personalData.birth_date}
                      edad_paciente={personalData.edad_paciente}
                      gender={personalData.gender}
                      blood_type={personalData.blood_type}
                      marital_status={personalData.marital_status}
                      documentType={personalData.documentType}
                      document={personalData.document}
                      telephone={personalData.telephone}
                      telephone2={personalData.telephone2}
                      direction={personalData.direction}
                      country={personalData.country}
                      countriesList={props.countryData}
                      state={personalData.state}
                      statesList={props.stateData}
                      municipality={personalData.municipality}
                      municipalitiesList={props.municipalityData}
                      onChangeFnc={handlePersonalData}
                      onChangePrefixed={handlePrefixedInput}
                      errors={props.errors}
                    />
                    <Typography variant="h6" color="initial">Detalles</Typography>
                    <DetailsArea 
                      description={detailsData.description}
                      personal_background={detailsData.personal_backgrounds}
                      family_background={detailsData.family_backgrounds}
                      backgroundList={props.backgroundData}
                      familyBackgroundList={familyBackgroundList}
                      symptoms={detailsData.symptoms}
                      symptomsList={props.symptomData}
                      vaccine={detailsData.vaccine}
                      vaccineList={props.vaccineData}
                      fisical_exam={detailsData.fisical_exam}
                      sistolic={detailsData.sistolic}
                      diastolic={detailsData.diastolic}
                      pulse={detailsData.pulse}
                      frec_resp={detailsData.frec_resp}
                      temp={detailsData.temp}
                      height={detailsData.height}
                      weight={detailsData.weight}
                      onChangeFnc={handleDetailsData}
                      errors={props.errors}
                    />
                    <ResultsArea
                      diagnosis={resultsData.diagnosis}
                      metadata={resultsData.metadata}
                      relevantMetadata={resultsData.relevantMetadata}
                      metadataList={props.metadata}
                      observations={resultsData.observations}
                      onChangeFnc={handleExaminationData}
                      errors={props.errors}
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      onClick={handleSubmit}
                    >
                      Registrar Historia
                    </Button>
                </form>
                {dialogOpen}
            </Container>
            </Grid>
            </Grid>
        )

}
const mapStateToProps = state => {
  return {
    countryData: state.formData.countries || [],
    stateData: state.formData.states || [],
    municipalityData: state.formData.municipalities || [],
    backgroundData: state.formData.backgrounds || [],
    vaccineData: state.formData.vaccines || [],
    medicineData: state.formData.medicines || [],
    symptomData: state.formData.symptoms || [],
    metadata: state.formData.metadata || [], 
    token: state.auth.token,
    errors: state.clinicalStory.errors,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitFormData: (restrain) => dispatch(actions.initFormData(restrain)),
    fetchStates: (country_id) => dispatch(actions.fetchStates(country_id)),
    fetchMunicipalities: (state_id) => dispatch(actions.fetchMunicipalities(state_id)),
    saveClinicalStory: (clinicalStoryData, token) => dispatch(actions.saveClinicalStory(clinicalStoryData, token)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PacientForm)