import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

import logo from '../../../img/MD1.svg'
import * as actions from '../../../store/actions/index';
import Footer from '../../Landing/Footer';

const useStyles = theme => ({
    paper: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    imagen: {
      width: '60%',
      height: '60%',
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(4)
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(14),
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: '0.5rem'
    },
    submit: {
      fontSize: theme.typography.pxToRem(16),
      margin: theme.spacing(4, 0, 2),
    },
    root: {
      width: '100%',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    
    title: {
      textAlign: 'center',
      marginBottom: theme.spacing(2),

    }
  });

class Login extends Component {
    state = {
        email: '',
        password: '',
        errors: {}
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
      }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.onAuth( this.state.email, this.state.password)
    }
    render() {
        const { classes } = this.props;
        let authRedirect = null;
            if(this.props.isAuthenticated) {
                authRedirect = <Redirect to={"/profile"} />
            }
        return (
          <main>
            <Container maxWidth="xs" className={classes.form}>
            <form noValidate onSubmit={this.onSubmit}>
              <Grid
                container
                spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"
                wrap="nowrap"
              >
                <img className={classes.imagen} src={logo} alt="logo"/>
              </Grid>
              <h2 className={classes.title}>Ingresa a tu cuenta</h2>
              <Grid container spacing={2} >
              <Grid Item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography variant="subtitle2" color="initial">Correo electronico</Typography>
                <TextField
                  id="first"
                  value={this.state.email}
                  onChange={this.onChange}
                  type="text"
                  htmlFor="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  autoComplete="true"
                  size='small'
                  placeholder="Correo electronico"
                  error={this.props.error == "Recurso no encontrado" ? this.props.error : null}
                  helperText={this.props.error == "Recurso no encontrado" ? "Correo invalido" : null}
                />
              </Grid>
              <Grid className={classes.paper} Item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography variant="subtitle2" color="initial">Contraseña</Typography>
                <TextField
                  id="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  type="password"
                  htmlFor="password"
                  name="password"
                  variant="outlined"
                  required
                  autoComplete='true'
                  fullWidth
                  size='small'
                  placeholder="Ingrese su contraseña"
                  error={this.props.error == "Contraseña invalida" ? this.props.error : null}
                  helperText={this.props.error == "Contraseña invalida" ? this.props.error : null}
                />
              </Grid>
              <Button className={classes.submit} variant="contained" type="submit" color='inherit' fullWidth >
                Iniciar Sesión
              </Button>
              <Link to={"/register"}>
              <Typography variant="caption" gutterBottom color="initial">Aún no tienes cuenta? Crea una cuenta para ti</Typography>
              </Link>
              
              </Grid>
            </form>
            {authRedirect}
            
      </Container>
      </main>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( email, password, isSignup ) => dispatch( actions.auth( email, password, isSignup ) ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( withStyles(useStyles)(Login) );