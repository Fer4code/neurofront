import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import TabPanel from '../TabPanel/TabPanel';
import ExpansionArea from '../UI/ExpansionArea/ExpansionArea';
import MedicinePicker from '../UI/Pickers/MedicinePicker/MedicinePicker';

const ExaminationArea = React.memo((props) => {
  const theme = useTheme()
  const [tab2value, settab2Value] = React.useState(0);
  const tab2handleChange = (event, newValue) => {
    settab2Value(newValue);
  };

  const tab2handleChangeIndex = index => {
    settab2Value(index);
  };
  function tab2Props(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  return(
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <ExpansionArea title="Examen Físico">
          <Grid container spacing={2}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <AppBar position="static" color="default" >
                <Tabs
                  value={tab2value}
                  onChange={tab2handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                  FullWidthTabs
                  aria-label="full width tabs example"
                >
                  <Tab label= "Examen Fisico"{...tab2Props(0)} />
                  <Tab label="Observaciones"{...tab2Props(1)} />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={tab2value}
                onChangeIndex={tab2handleChangeIndex}
              >
           <TabPanel value={tab2value} index={0} dir={theme.direction}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Grid container spacing={1}>
                  <Grid item lg={10}>
                    <TextField
                          autoComplete=""
                          name="fisical_exam"
                          variant="outlined"
                          required
                          multiline
                          rows={8}
                          fullWidth
                          rowsMax="10"
                          id="fisical_exam"
                          label="Examen Fisico"
                          value={props.fisical_exam}
                          onChange={props.onChangeFnc}
                        />
                  </Grid>
                  <Grid item lg={2}>
                    <Grid container direction="column" spacing={1}>
                    <Grid item lg={12}>
                              <TextField
                              name="observations"
                              variant="outlined"
                              fullWidth
                              size='small'
                              id="diastolica"
                              label="Presion Diastolica"
                              value={props.observations}
                              onChange={props.onChangeFnc}
                            />
                          </Grid>
                          <Grid item lg={12}>
                              <TextField
                              name="observations"
                              variant="outlined"
                              fullWidth
                              size='small'
                              id="diastolica"
                              label="Presion Sistolica"
                              value={props.observations}
                              onChange={props.onChangeFnc}
                            />
                          </Grid>
                          <Grid item lg={12}>
                              <TextField
                              name="observations"
                              variant="outlined"
                              fullWidth
                              size='small'
                              id="diastolica"
                              label="Estatura (cm)"
                              value={props.observations}
                              onChange={props.onChangeFnc}
                            />
                          </Grid>
                          <Grid item lg={12}>
                              <TextField
                              name="observations"
                              variant="outlined"
                              fullWidth
                              size='small'
                              id="diastolica"
                              label="Peso (Kg)"
                              value={props.observations}
                              onChange={props.onChangeFnc}
                            />
                          </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                    </Grid>
            </TabPanel>
            <TabPanel value={tab2value} index={1} dir={theme.direction}>                  
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <TextField
                        autoComplete=""
                        name="observations"
                        variant="outlined"
                        required
                        multiline
                        fullWidth
                        rowsMax="10"
                        id="observations"
                        label="Observaciones"
                        value={props.observations}
                        onChange={props.onChangeFnc}
                      />
                    </Grid>
            </TabPanel>
              </SwipeableViews>
            </Grid>
          </Grid>
      </ExpansionArea>
    </Grid>
  )
}, (prevProps, nextProps) => {
  return Object.keys(nextProps).reduce((currentResult, name) => {
    if ( name == "onChangeFnc") {
        return currentResult
    }
    return currentResult && ( prevProps[name] === nextProps[name] )
}, true) 
      
})

export default ExaminationArea