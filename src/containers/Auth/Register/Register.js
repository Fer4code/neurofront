import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import logo from '../../../img/MD1.svg'
import Typography from '@material-ui/core/Typography'
import{ Chip, CssBaseline }from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

import * as actions from '../../../store/actions/index';

const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    background: '#ffff',
    borderRadius: "0.5rem",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(8),
  },
  submit: {
    fontSize: theme.typography.pxToRem(20),
    margin: theme.spacing(4, 0, 2),
    text: theme.palette.button, 
    backgroundColor: 'green'
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.h2,
  },
  img: {
    marginTop: theme.spacing(4),
    width: '65%'
  },
  title: {
    alignText: 'center',
    margin: theme.spacing(4, 0 ,2)
  }
});
class Register extends Component {
    state = {
      first_name: '',
      last_name: '',
      username:'',
      email: '',
      password: '',
    }
    onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
       e.preventDefault()
       
       const newUser = {
          ...this.state
       }
       this.props.onRegister(newUser)
       if(!this.props.errors) {
         this.props.history.push('/registration-completed')
       }
    }
      
    render() {
        const { classes } = this.props;
        let authRedirect = null
        if(this.props.registrationCompleted) {
          authRedirect = <Redirect to={"/registration-completed"} />
        }
        
        return (
              <Container component="main" maxWidth="sm" className={classes.paper}>
             <CssBaseline />     
             <Grid
                  container
                  spacing={1}
                  direction="row"
                  justify="center"
                  alignItems="center"
                  alignContent="center"
                  wrap="nowrap"
                  
                >
                <img src={logo} className={classes.img} alt="registerlogo"/>
                </Grid>
                <form onSubmit={this.onSubmit} style={useStyles.form}>
                
                <Typography variant="h4" color="initial" align="center" className={classes.title}>Crea una cuenta y disfruta de nuestros servicios</Typography>
                    <Grid container spacing={2}>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                          <Typography variant="subtitle2" color="initial">Nombres:</Typography>
                        <TextField
                                id="first"
                                
                                value={this.props.first_name}
                                onChange={this.onChange}
                                type="text"
                                htmlFor="name"
                                name="first_name"
                                variant="outlined"
                                fullWidth
                                required
                                autoComplete="true"
                                autoCapitalize="true"
                                autoFocus
                                placeholder="Ingrese su nombre"
                                size="small"
                                error={Boolean(this.props.errors?.first_name)}
                                helperText={this.props.errors?.first_name ? this.props.errors?.first_name[0] : ""}
                                />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Typography variant="subtitle2" color="initial">Apellidos:</Typography>
                        <TextField
                                id="last"
                                value={this.props.last_name}
                                onChange={this.onChange}
                                type="text"
                                htmlFor="name"
                                name="last_name"
                                fullWidth
                                variant="outlined"
                                required
                                autoComplete="true"
                                autoCapitalize="true"
                                size="small"
                                placeholder="Ingrese su apellido"
                                error={Boolean(this.props.errors?.last_name)}
                                helperText={this.props.errors?.last_name ? this.props.errors?.last_name[0] : ""}
                                />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Typography variant="subtitle2" color="initial">Género</Typography>
                        <TextField
                                id="gen"
                                value={this.props.last_name}
                                onChange={this.onChange}
                                type="text"
                                htmlFor="name"
                                name="genre"
                                fullWidth
                                variant="outlined"
                                required
                                autoComplete="true"
                                autoCapitalize="true"
                                size="small"
                                placeholder="Elija su genero"
                                error={Boolean(this.props.errors?.last_name)}
                                helperText={this.props.errors?.last_name ? this.props.errors?.last_name[0] : ""}
                                />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Typography variant="subtitle2" color="initial">Título</Typography>
                        <TextField
                                id="title"
                                value={this.props.last_name}
                                onChange={this.onChange}
                                type="text"
                                htmlFor="name"
                                name="last_name"
                                fullWidth
                                variant="outlined"
                                required
                                autoComplete="true"
                                autoCapitalize="true"
                                size="small"
                                placeholder="Indique su titulo"
                                error={Boolean(this.props.errors?.last_name)}
                                helperText={this.props.errors?.last_name ? this.props.errors?.last_name[0] : ""}
                                />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Typography variant="subtitle2" color="initial">Área de estudio</Typography>
                        <Autocomplete
                          multiple
                          size='small'
                          id="tags-filled"
                          variant='outlined'
                          options={top100Films.map((option) => option.title)}
                          freeSolo
                          renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                              <Chip color='primary' label={option} {...getTagProps({ index })} />
                            ))
                          }        
                          renderInput={(params) => (
                            <TextField {...params} variant="outlined" placeholder="Área de estudio" />
                          )}
                        />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Typography variant="subtitle2" color="initial">Número del colegio de medico</Typography>
                        <TextField
                                id="title"
                                htmlFor="number"
                                name="medicID"
                                fullWidth
                                variant="outlined"
                                required
                                autoComplete="true"
                                size="small"
                                placeholder="Numero de colegio de medico"
                                />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="subtitle2" color="initial">Correo Electronico:</Typography>
                              <TextField
                                id="email"
                                value={this.props.email}
                                onChange={this.onChange}
                                type="email"
                                htmlFor="email"
                                name="email"
                                fullWidth
                                variant="outlined"
                                placeholder="Ingrese su correo electronico"
                                required
                                autoComplete="true"
                                size="small"
                                error={Boolean(this.props.errors?.email)}
                                helperText={this.props.errors?.email ? this.props.errors?.email[0] : ""}
                                />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="subtitle2" color="initial">Ingrese su contraseña:</Typography>
                        <TextField
                                    id="password"
                                    value={this.props.password}
                                    onChange={this.onChange}
                                    type="password"
                                    htmlFor="password"
                                    name="password"
                                    fullWidth
                                    required
                                    placeholder="Ingrese su contraseña"
                                    size="small"
                                    variant="outlined"
                                    error={Boolean(this.props.errors?.password)}
                                    helperText={this.props.errors?.password ? this.props.errors?.password[0] : ""}
                                    />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="subtitle2" color="initial">Confirme su contraseña</Typography>
                        <TextField
                                    id="confirm_password"
                                    variant="outlined"
                                    onChange={this.onChange}
                                    type="password"
                                    htmlFor="password"
                                    name="confirm_password"
                                    fullWidth
                                    required
                                    placeholder="Confirme su contraseña"
                                    size="small"
                                    error={Boolean(this.props.errors?._schema)}
                                    helperText={this.props.errors?._schema ? this.props.errors?._schema[0] : ""}
                                    />
                        </Grid>                                                                  
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      className={classes.submit}
                    >
                      Crear cuenta
                    </Button>
                </form>
              {authRedirect}
            </Container>
        )
    }
}
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];

const mapStateToProps = state => {
  return {
    email: state.user.email,
    password: state.user.password,
    confirm_password: state.user.confirm_password,
    username: state.user.username,
    first_name: state.user.first_name,
    last_name: state.user.last_name,
    errors: state.user.errors,
    registrationCompleted: state.user.registrationCompleted
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRegister: (user) => dispatch(actions.register(user))
  }
}
export default connect( mapStateToProps, mapDispatchToProps )(withStyles(useStyles)(Register));
