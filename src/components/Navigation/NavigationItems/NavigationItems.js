import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <React.Fragment>
        <NavigationItem link={"/"} stylew={props.stylew}>Inicio</NavigationItem>
        
        { props.isAuthenticated && props.admin ? <NavigationItem link={"/Adprofile"} style={props.stylew}>Perfil Administrador</NavigationItem> : null }
        
        { props.isAuthenticated && !props.admin ? <NavigationItem link={"/profile"} stylew={props.stylew}>Menú</NavigationItem>: null}
        
        { !props.isAuthenticated ? <NavigationItem link={"/register"} stylew={props.stylew}>Crea una cuenta</NavigationItem> : null}
        
        { !props.isAuthenticated ? <NavigationItem link={"/login"} stylew={props.stylew}>Ingresa a tu cuenta</NavigationItem> : null}
        
        { props.isAuthenticated ? <NavigationItem link={"/logout"} stylew={props.stylew}>Salir</NavigationItem>: null}

    </React.Fragment>
)

export default navigationItems