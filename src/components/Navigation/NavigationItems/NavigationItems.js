import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <React.Fragment>
        <NavigationItem link={"/"} style={props.style}>Inicio</NavigationItem>
        <NavigationItem link={"/register"} style={props.style}>Crea una cuenta</NavigationItem>
        <NavigationItem link={"/login"} style={props.style}>Ingresa a tu cuenta</NavigationItem>
        <NavigationItem link={"/profile"} style={props.style}>Profile</NavigationItem>
        <NavigationItem link={"/Adprofile"} style={props.style}>Adprofile</NavigationItem>
        <NavigationItem link={"/test"} style={props.style}>TEST</NavigationItem>
    </React.Fragment>
)

export default navigationItems