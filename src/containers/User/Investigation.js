import React, {useState} from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-instance';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import {Card, Grid, ClickAwayListener, Box, Container, CssBaseline} from '@material-ui/core/';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from '@date-io/date-fns';
import Icon from '@material-ui/core/Icon';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Slider from '@material-ui/core/Slider';
import Paper from '@material-ui/core/Paper'
import * as actions from '../../store/actions/index';
import BackButton from '../../components/UI/BackButton/BackButton';
import { shadows } from '@material-ui/system';

import {
  Search as SearchIcon,
  CloseOutlined as CloseOutlinedIcon
} from "@material-ui/icons";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const estados = [
  "Amazonas",
  "Anzoátegui",
  "Apure",
  "Aragua",
  "Barinas",
  "Bolívar",
  "Carabobo",
  "Cojedes",
  "Delta Amacuro",
  "Falcón",
  "Guárico",
  "Lara",
  "Mérida",
  "Miranda",
  "Monagas",
  "Nueva Esparta",
  "Portuguesa",
  "Sucre",
  "Táchira",
  "Trujillo",
  "Vargas",
  "Yaracuy",
  "Zulia",
  "Distrito Capital"
]


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    borderRadius:'0.5rem',
    marginTop:24,
    minHeight: '80vh' 
  },
  container: {
    backgroundColor: "#DFE9F2",
    borderRadius: '0.5rem',
    padding: 8
  },
  container1: {
    marginTop: 18,
    backgroundColor: "white",
    borderRadius: "0.5rem"
  },
  paper: {
    marginTop: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      background: 'grey',
      borderRadius: "0.5rem"
    
  },
  inv:{
    marginTop: 16,
    marginBottom: 10,

  },
  button: {
        margin: theme.spacing(1)
  },
  search: {
    marginLeft: theme.spacing(5)
  },
  slider:{
  width: '100%',
  padding: theme.spacing(2),
  
  },
  search: {
    display: "flex",
    justifyContent: "center",
    
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: theme.spacing(1)
  },
}));

const ImgMediaCard = function (props) {
  React.useEffect(() => {
    if(props.countryData.length == 0) {
      props.onInitFormData();
      
    }
    if ( clinicalStories === null) {
      const config = {
        headers: { Authorization: "Bearer " + props.token }
      }
      axios.get('clinical_stories', config)
        .then((response) => {
          setClinicalStories(response.data.data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  })
  const classes = useStyles();
  const theme = useTheme();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-01-01T21:11:54'));
  const [value, setValue] = React.useState([18,40])
  const [isFocussed, setFocussed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isShowingToast, showToast] = useState(false);
  const top100Films = [{title: ""}]
  const [selectedDateu, setSelectedDateu] = React.useState(Date());
  const [location, setLocation] = React.useState([])
  const [parameters, setParameters] = React.useState([])
  const [diagnosis, setDiagnosis] = React.useState('')
  const [clinicalStories, setClinicalStories] = React.useState(null)

  

  const [searchParams, setSearchParams] = React.useState({
    location: [],
    minimumData: null,
    maximumDate: null,
    ageRange: null,
    parameters: [],
    diagnosis: null
  })

  const handleFrom = (date) => {
    setSelectedDate(date);
  };
  const handleUpto = (date1) => {
    setSelectedDateu(date1);
  };
  const PrettoSlider = withStyles({
    root: {
      color: '#52af77',
      height: 2,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus,&:hover,&$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
      markActive: {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
    valueLabel: {
        left: -7,
        top: -22,
        '& *': {
          background: 'transparent',
          color: '#000',
        },
      },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 8,
    },
  })(Slider);
    
  // const onSearchCancel = () => {
  //   setSearchTerm("");
  //   setFocussed(false);
  //   onSearchClose();
  // };
  // const onSearch = (event) => {
  //   setFocussed(true);
  //   if (event.key === "Enter") {
  //     showToast(true);
  //     setFocussed(false);
  //     onSearchClose();
  //   }
  // }
  const onFocusLoss = (event) => {
    setFocussed(false);
    if (event.key === "Enter", "Tab") {
     setFocussed(false);
    }
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const changeParams = () => {
    setSearchParams({
      location: location,
      minimumData: selectedDate,
      maximumDate: selectedDateu,
      ageRange: value,
      parameters: parameters,
      diagnosis: diagnosis
    })
  }

  const handleSetDiagnosis = (e) => {
    setDiagnosis(e.target.value)

  }

  let clinicalStoriesList = <Typography variant="h4" color="initial">Parece que no hay nada nuevo por aqui!!</Typography>
  if(clinicalStories != null) {
    clinicalStoriesList = clinicalStories.map((clinicalStory) => {
      let matches1 = true
      let matches2 = true
      let matches3 = true
      let matches4 = true
      let matches5 = true
      let matches6 = true
      if(searchParams.diagnosis) {
        matches1 = matches1 && (clinicalStory.diagnosis?.includes(searchParams.diagnosis))
      }
      if(searchParams.ageRange) {
        matches2 = matches2 && (clinicalStory.edad_paciente > searchParams.ageRange[0] && clinicalStory.edad_paciente < searchParams.ageRange[1])
      }
      if(searchParams.minimumData) {
        const created_at = new Date(clinicalStory.created_at)
        const minData = new Date(searchParams.minimumData)
        console.log(created_at.getTime() > minData.getTime())
        matches3 = matches3 && (created_at.getTime() > minData.getTime())
      }
      if(searchParams.maximumDate) {
        const created_at = new Date(clinicalStory.created_at)
        const maxData = new Date(searchParams.maximumDate)
        matches4 = matches4 && (created_at.getTime() < maxData.getTime())
      }
      if(searchParams.location.length > 0) {
        let start = false
        searchParams.location.forEach(loc => {
          const municipality_id = clinicalStory.pacient.direction.municipality_id
          const state_id = clinicalStory.pacient.direction.municipality.state_id
          console.log(loc.id, municipality_id, state_id) 
          start = start || (loc.id == municipality_id || loc.id == state_id)
        })
        matches5 = start
      }
      if(searchParams.parameters.length > 0) {
        let start = false
        console.log(clinicalStory)
        searchParams.parameters.forEach(pam => {
          // if (clinicalStory.pacient.personal_backgrounds) {
          //   clinicalStory.pacient.personal_backgrounds.forEach(pb => {
          //     console.log(pam.name, pb.name)
          //     start = start || pam.name == pb.name
          //   })
          // }
          // if (clinicalStory.pacient.family_backgrounds) {
          //   clinicalStory.pacient.family_backgrounds.forEach(fb => {
          //     console.log(pam.name, fb.name)
          //     start = start || pam.name == fb.name
          //   })
          // }
          if (clinicalStory.symptoms) {
            clinicalStory.symptoms.forEach(symp => {
              console.log(pam.name, symp.name)
              start = start || pam.name == symp.name
            })
          }
    
        })
        matches6 = start
      }
      if (matches1 && matches2 && matches3 && matches4 && matches5 && matches6) {
        return (
          <Grid item xl={3} lg={3} md={3} sm={6} xs={6} key={clinicalStory.id}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={clinicalStory.pacient.img_url}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {clinicalStory.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {clinicalStory.pacient.first_name + " " + clinicalStory.pacient.last_name}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        )
      } else {
        return null
      }
    })
  }

  
  return (
    <Container maxWidth="lg" className={classes.root}>
                <BackButton/>
      <Grid container className={classes.inv} spacing={1} direction='row' alignItems="flex-start" justify="flex-start">
      <Grid item xs={11} sm={11}>
        <Typography align='center' variant="h4" color="initial">Investigación</Typography>
        </Grid>
 
      </Grid>
      <Box boxShadow={3}>
      <Grid container  
      spacing={1} 
      direction='row' 
      alignItems="flex-start" 
      justify="flex-start" 
      className={classes.container}>
        <Grid item xs={6} sm={6}>
        
        <Autocomplete
        multiple
        id="tags-filled"
        variant='outlined'
        getOptionLabel={(option) => option.country_name || option.name}
        options={[...props.countryData, ...props.stateData, ...props.municipalityData]}
        onChange={(event, value) => setLocation(value)}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip color='secondary' label={ option.country_name || option.name} {...getTagProps({ index })} />
          ))
        }        
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Ubicacion" placeholder="Ingrese la ubicacion deseada" />
        )}
      />
        </Grid>
        <Grid item xs={3} sm={3}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                autoOk
                fullWidth
                variant="inline"
                inputVariant="outlined"
                label="Desde"
                disableFuture
                orientation='landscape'
                format="dd/MM/yyyy"
                value={selectedDate}
                InputAdornmentProps={{ position: "end" }}
                onChange={date => handleFrom(date)}
                
              />
                </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={3} sm={3}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
              orientation='landscape'
              clearable
              autoOk
              fullWidth
              variant="inline"
              inputVariant="outlined"
              label="Hasta"
              disableFuture
              format="dd/MM/yyyy"
              value={selectedDateu}
              InputAdornmentProps={{ position: "end" }}
              onChange={date1 => handleUpto(date1)}
              
            />
              </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={6} sm={6}>
        <ClickAwayListener onClick={() => setFocussed(true)} onClickAway={onFocusLoss}>
        <Box
        className={classes.search}
        borderRadius={theme.shape.borderRadius}
        bgcolor={
          isFocussed
            ? '#455a64'
            : '#bdbdbd'
        }
        boxShadow={isFocussed ? 2 : 0}
        height={"5.7rem"}
      >
        <Autocomplete
        multiple
        id="tags-outlined"
        options={[...props.symptomData, ...props.backgroundData]}
        getOptionLabel={option => {
          if (option.name2) {
            return option.name2
          }
          return option.name
        }}
        onChange={(event, value) => setParameters(value)}
        filterSelectedOptions
        fullWidth
        ChipProps={{color:'primary'}}
        renderInput={params => (
          <div>
          <TextField
            multiple
            {...params}
            onClick={() => setFocussed(true)}
            placeholder="Ingrese sintomas o antecedentes"
            InputProps={{...params.InputProps, disableUnderline: true,   }}
            
          />
          </div>
        )}
      />       
        </Box>
      </ClickAwayListener>
      
        </Grid>
        <Grid item xs={3} sm={3}>
        <TextField
            autoComplete=""
            name="diagnosis"
            variant="outlined"
            multiline
            rows={2}
            fullWidth
            label="Ingrese diagnostico"
            value={diagnosis}
            onChange={handleSetDiagnosis}
          />
        </Grid>
        <Grid item alignItems='flex-end' xs={3} sm={3}>
                <Paper elevation={0} variant="outlined" className={classes.slider}>
                <PrettoSlider aria-label="pretto slider" defaultValue={value} valueLabelDisplay='on' onChangeCommitted={handleChange} />
                <Typography align='center'>Grupo Etareo</Typography>
                </Paper>
        </Grid>
        <Grid container spacing={2} direction='row' alignItems="center" justify="center" >
        <Grid item xs={4} sm={4} className={classes.search}>
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon fontSize='large'>search</Icon>}
        fullWidth
        onClick={changeParams}
      >
        <Typography variant='h6'>Buscar</Typography>
      </Button>
      </Grid>
        </Grid>
    </Grid>
    </Box>
    <Grid
      container
      spacing={2}
      direction="row"
      alignItems="flex-start" 
      justify="flex-start"
      className={classes.inv}
    >
      {clinicalStoriesList}
    </Grid>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    symptomData: state.formData.symptoms || [],
    municipalityData: state.formData.municipalities || [],
    stateData: state.formData.states || [],
    backgroundData: state.formData.backgrounds || [],
    countryData: state.formData.countries || [],
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitFormData: () => dispatch(actions.initFormData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImgMediaCard)