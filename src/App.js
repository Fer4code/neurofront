/*import Test from './components/Navigation/Navbar/Test'*/
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import { connect } from 'react-redux';
import { Container, CssBaseline, ThemeProvider, Drawer } from '@material-ui/core'
import ReactGA from 'react-ga'
import createHistory from 'history/createBrowserHistory'


import MenuAppBar from './components/Navigation/Navbar/Navbar'

import Landing from './containers/Landing/Landing'
import Login from './containers/Auth/Login/Login'
import Logout from './containers/Auth/Logout'
import Register from './containers/Auth/Register/Register'
import PostRegister from './containers/Auth/Register/PostRegister'
import Profile from './containers/Profile/Profile'
import PacientForm from './containers/PacientForm/PacientForm'
import Adprofile from './containers/Admin/Adprofile'
import Adusers from './containers/Admin/Adusers'
import Adexams from './containers/Admin/Adexams'
import Adant from './containers/Admin/Adant'
import Admedicamentos from './containers/Admin/Admedicamentos'
import Adalergies from './containers/Admin/Adalergies'
import Adstatics from './containers/Admin/Adstatics'
import Adnews from './containers/Admin/Adnews'
import Examsview from './containers/User/Examsview'
import Histories from './containers/User/Histories'
import Patientsview from './containers/User/Patientsview'
import Patientview from './containers/User/Patientview'
import Medsview from './containers/User/Medsview'
import Newsview from './containers/User/Newsview'
import Investigation from './containers/User/Investigation'
import Caseview from './containers/User/Caseview'

import * as actions from './store/actions/index';
import {light} from './theme'
import Footer from './containers/Landing/Footer';

const history = createHistory()
ReactGA.initialize('UA-171994443-1');


class App extends Component {

  componentDidMount() {
    const userId = localStorage.getItem('userId')
    console.log(userId)
    if( userId && !this.props.userId) {
      console.log('llamada')
      const token = localStorage.getItem('accessToken')
      this.props.retrieveUserInfo(token, userId)
    }

  }
  render() {
    return (
      <ThemeProvider theme={light}>
        <CssBaseline/>
      
      <Router history={history}>
        <div className="App">
          {/*<Navbar /> */}
          <MenuAppBar isAuthenticated={this.props.isAuthenticated}/>
          <Route exact path="/" component={Landing}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/registration-completed" component={PostRegister}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/Adstatics" component={Adstatics}/>
          <Container maxWidth='lg'>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/pacientform" component={PacientForm}/>
            <Route exact path="/logout" component={Logout}/>
            <Route exact path="/Adprofile" component={Adprofile}/>
            <Route exact path="/Adexams" component={Adexams}/>
            <Route exact path="/Adusers" component={Adusers}/>
            <Route exact path="/Adant" component={Adant}/>
            <Route exact path="/Admedicamentos" component={Admedicamentos}/>
            <Route exact path="/Adalergies" component ={Adalergies}/>            
            <Route exact path="/Adnews" component={Adnews}/>
            {/*<Route exact path="/Test" component ={Test}/>*/}
            <Route exact path="/Examsview" component ={Examsview}/>
            <Route exact path="/Patientsview" component={Patientsview}/>
            <Route exact path="/Patientview" component={Patientview}/>
            <Route exact path="/Histories" component={Histories}/>
            <Route exact path="/Newsview" component={Newsview}/>
            <Route exact path="/Medsview" component={Medsview}/>
            <Route exact path="/Investigation" component={Investigation}/>
            <Route exact path="/Caseview" component={Caseview}/>
            </Container>
        </div>
      </Router>
        
      </ThemeProvider>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.user != null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    retrieveUserInfo: (token, userId) => dispatch(actions.retrieveUserInfo(token, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)