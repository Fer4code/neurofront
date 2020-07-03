import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <React.Fragment>
        <NavigationItem link={"/"} stylew={props.stylew}>Inicio</NavigationItem>
        <NavigationItem link={"/register"} stylew={props.stylew}>Crea una cuenta</NavigationItem>
        <NavigationItem link={"/login"} stylew={props.stylew}>Ingresa a tu cuenta</NavigationItem>
        <NavigationItem link={"/profile"} stylew={props.stylew}>Profile</NavigationItem>
        <NavigationItem link={"/Adprofile"} style={props.stylew}>Adprofile</NavigationItem>
        <NavigationItem link={"/test"} stylew={props.stylew}>TEST</NavigationItem>
    </React.Fragment>
)

export default navigationItems