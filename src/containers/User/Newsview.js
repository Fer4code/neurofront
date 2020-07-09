import React from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-instance';
import { makeStyles } from '@material-ui/core/styles';
import {Card, Grid, Container} from '@material-ui/core/';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from '@date-io/date-fns';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Icon from '@material-ui/core/Icon';
import BackButton from '../../components/UI/BackButton/BackButton';
import SearchBar from '../../components/UI/TextInput/SearchBar';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles({
  root: {
    backgroundColor: 'white',
    borderRadius:'0.5rem',
    marginTop:24,
    minHeight: '80vh' 
  },
  container: {
    backgroundColor: "grey",
    borderRadius: '0.5rem',
    padding: 8
  },
  pacient:{
    marginTop: 16,
    marginBottom: 10,

  },
  button: {
    marginTop: 0,
  },
  avatar: {
    marginTop: 10,
    backgroundColor: '#D93250' ,
    color: '#FFFFFF',
    '&:hover': {
      cursor: 'pointer'
  },
}});

const ImgMediaCard = function(props) {
  const classes = useStyles();

  const [news, setNews] = React.useState(null)

  const [searchParams, setSearchParams] = React.useState({
    stringSearch: null,
    minimumDate: null,
    maximumDate: null
  })
  const [strSearch, setStrSearch] = React.useState('')
  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-01-01T21:11:54'));
  const [selectedDateu, setSelectedDateu] = React.useState(new Date());

  React.useEffect(() => {
    if (news === null) {
      const config = {
        headers: { Authorization: "Bearer " + props.token }
      }
      axios.get('news', config)
        .then((response) => {
          setNews(response.data.data)
        })
        .catch((err) => {

        })
    }
  })

  const clean = ()=> {
    setStrSearch('')
  }

  const handleFrom = (date) => {
    setSelectedDate(date);
  };
  const handleUpto = (date1) => {
    setSelectedDateu(date1);
  };
  const handleStrChange = (e) => {
    setStrSearch(e.target.value)
  }

  const changeParams = () => {
    setSearchParams({
      stringSearch: strSearch,
      minimumDate: selectedDate,
      maximumDate: selectedDateu
    })
  }
  let newsList = <Typography variant="h4" color="initial">Parece que no hay buenas nuevas.</Typography>
  if(news != null) {
    newsList = news.map((news) => {
      let matchesString = true;
      if(searchParams.stringSearch != null) {
        const lowercaseFirstName = news.title.toLowerCase()
        const lowercaseLastName = news.abstract.toLowerCase()
        matchesString = lowercaseFirstName.includes(searchParams.stringSearch) || lowercaseLastName.includes(searchParams.stringSearch)
      }
      let matchesDate = true;
      if(searchParams.minimumDate != null) {
        const newsDate = new Date(news.created_at)
        matchesDate = searchParams.minimumDate.getTime() < newsDate.getTime() && newsDate.getTime() < searchParams.maximumDate.getTime()
      }
      if (matchesString && matchesDate) {
        return (
          <Grid item xl={3} lg={3} md={3} sm={6} xs={6} key={news.id}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={news.img_url}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    <a href={news.link} target="_blank">
                    {news.title}
                    </a>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {news.abstract }
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button> */}
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
    <div>
    <Container maxWidth="lg" className={classes.root}>
                <BackButton/>
      <Grid container className={classes.pacient} spacing={1} direction='row' alignItems="flex-start" justify="flex-start">
      <Grid item xs={11} sm={11}>
        <Typography align='center' variant="h3" color="initial">Noticias</Typography>
        </Grid>
      {/*<Grid item xs={1} sm={1}>
        <Tooltip title='Agregar nuevo paciente' TransitionComponent={Zoom}>
            <Avatar variant='rounded' className={classes.avatar} onClick={event =>  window.location.href='/pacientform'}>
                    <PersonAddIcon />
                </Avatar>
        </Tooltip>
          </Grid>*/}    
      </Grid>
      <Grid container  spacing={2} direction='row' alignItems="flex-start" justify="flex-start" className={classes.container}>
        <Grid item lg={6} xs={12} sm={12}>
                <SearchBar cedula='Titulo o palabras claves' value={strSearch} 
                cancel={clean}
                onchange={handleStrChange}/>
          {/*<TextField
            id="outlined-search"
            type='search'
            variant="outlined"
            fullWidth
            size='small'
            placeholder="Buscar por cédula, nombre o apellido"
            value={strSearch}
            onChange={handleStrChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />*/}
          </Grid>
        <Grid item lg={2} xs={6} sm={6}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                autoOk
                fullWidth
                size='small'
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
        <Grid item lg={2} xs={6} sm={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
              orientation='landscape'
              clearable
              autoOk
              size='small'
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
        <Grid item align='center' lg={2} xs={2} sm={2} >
                  <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<Icon>search</Icon>}
                  fullWidth
                  onClick={changeParams}
                >
                  Buscar
                </Button>
              </Grid>
        </Grid>
    <Grid
      container
      spacing={2}
      direction="row"
      alignItems="flex-start" justify="flex-start"
      className={classes.news}
    >
      { newsList }
      
    </Grid>
    </Container>
    </div>
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