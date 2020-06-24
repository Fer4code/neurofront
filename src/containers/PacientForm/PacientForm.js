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
import ExaminationArea from '../../components/ExaminationArea/ExaminationArea'



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
          props.onInitFormData();
        }
    })
    const [names, setNames] = React.useState({
      first_name: '',
      second_name: '',
      last_name: '',
      second_last_name: '',
    })
    const [personalData, setPersonalData] = React.useState({
      birth_date: Date.now(),
      gender: '',
      blood_type: '',
      marital_status: '',
      documentType: 'V-',
      document: '',
      telephone: '',
      telephone2: '',
      direction: '',
      country: '',
      state: '',
      municipality: '',
    })
    const [detailsData, setDetailsData] = React.useState({
      description: '',
      personal_background: '',
      family_background: '',
      allergy: '',
      vaccine: '',
    })
    const [examinationData, setExaminationData] = React.useState({
      observations: '',
      medicine: '',
      fisical_exam: '',
      cognitions: '',
      surgeries: ''
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
        setPersonalData({
          ...personalData,
          "birth_date": event
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
      setExaminationData({
        ...examinationData,
        [event.target.name]: event.target.value
      })
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
        ...names,
        ...personalData,
        ...detailsData,
        ...examinationData
      }
      props.saveClinicalStory(formData, props.token)
    }
    const classes = useStyles()
    return (
      <Grid container>
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
                    />
                    <PersonalDataArea 
                      birth_date={personalData.birth_date}
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
                    />
                    <Typography variant="h6" color="initial">Detalles</Typography>
                    <DetailsArea 
                      description={detailsData.description}
                      personal_background={detailsData.personal_background}
                      personalBackgroundList={props.personalBackgroundData}
                      family_background={detailsData.family_background}
                      familyBackgroundList={props.familyBackgroundData}
                      allergy={detailsData.allergy}
                      allergyList={props.allergyData}
                      vaccine={detailsData.vaccine}
                      vaccineList={props.vaccineData}
                      onChangeFnc={handleDetailsData}
                    />
                    <ExaminationArea
                      observations={examinationData.observations}
                      medicine={examinationData.medicine}
                      medicineList={props.medicineData}
                      fisical_exam={examinationData.fisical_exam}
                      cognitions={examinationData.cognitions}
                      surgeries={examinationData.surgeries}
                      onChangeFnc={handleExaminationData}
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Registrar Historia
                    </Button>
                </form>
            </Container>
            </Grid>
            </Grid>
        )

}
const mapStateToProps = state => {
  return {
    countryData: state.formData.countries,
    stateData: state.formData.states,
    municipalityData: state.formData.municipalities,
    personalBackgroundData: state.formData.personalBackgrounds,
    familyBackgroundData: state.formData.familyBackgrounds,
    allergyData: state.formData.allergies,
    vaccineData: state.formData.vaccines,
    medicineData: state.formData.medicines,
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitFormData: () => dispatch(actions.initFormData()),
    fetchStates: (country_id) => dispatch(actions.fetchStates(country_id)),
    fetchMunicipalities: (state_id) => dispatch(actions.fetchMunicipalities(state_id)),
    saveClinicalStory: (clinicalStoryData, token) => dispatch(actions.saveClinicalStory(clinicalStoryData, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PacientForm)