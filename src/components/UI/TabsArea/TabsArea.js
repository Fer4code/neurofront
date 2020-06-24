import React from 'react';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'

const TabsArea = (props) => {
    const [tab1value, settab1Value] = React.useState(0);
    const tab1handleChange = (event, newValue) => {
        settab1Value(newValue);
      };
    return(
        <Grid container spacing={1}>
        <AppBar position="static" color="default" >
            <Tabs
                value={tab1value}
                onChange={tab1handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
                FullWidthTabs
                aria-label="full width tabs example"
            >
                <Tab label="Motivo de consulta" />
                <Tab label="Ant. personales" />
                <Tab label="Ant. familiares" />
                <Tab label="Alergias" />
                <Tab label="Vacunas" />
            </Tabs>
        </AppBar>
        </Grid>
    )
}

export default TabsArea