import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';

import TabPanel from '../TabPanel/TabPanel';
import PersonalBackgroundPicker from '../UI/Pickers/PersonalBackgroundPicker/PersonalBackgroundPicker'
import FamilyBackgroundPicker from '../UI/Pickers/FamilyBackgroundPicker/FamilyBackgroundPicker'
import VaccinePicker from '../UI/Pickers/VaccinePicker/VaccinePicker'

const DetailsArea = React.memo((props) => {
    const theme = useTheme()
    const [tab1value, settab1Value] = React.useState(0);
    const tab1handleChange = (event, newValue) => {
        settab1Value(newValue);
      };
    function tab1handleChangeIndex(index) {
        settab1Value(index);
      };
    function a11yProps(index) {
        return {
          id: `full-width-tab-${index}`,
          'aria-controls': `full-width-tabpanel-${index}`,
        };
      }

    return(
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
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
                    <Tab label="Motivo de consulta" {...a11yProps(0)} />
                    <Tab label="Sintomatología" {...a11yProps(1)} />
                    <Tab label="Ant. personales" {...a11yProps(2)} />
                    <Tab label="Ant. familiares" {...a11yProps(3)} />
                    <Tab label="Vacunas" {...a11yProps(4)} />
                    <Tab label="Examen fisico" {...a11yProps(5)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={tab1value}
                onChangeIndex={tab1handleChangeIndex}
            >
                <TabPanel value={tab1value} index={0} dir={theme.direction}>                  
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <TextField
                        name="description"
                        variant="outlined"
                        required
                        multiline
                        fullWidth
                        rowsMax="10"
                        id="motivo_consulta"
                        label="Motivo de consulta"
                        value={props.description}
                        onChange={props.onChangeFnc}
                      />
                    </Grid>
            </TabPanel>
            <TabPanel value={tab1value} index={1} dir={theme.direction}>                  
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Autocomplete
                          multiple
                          id="tags-filled"
                          variant='outlined'
                          options={props.symptomsList}
                          getOptionLabel={(option) => option.name}
                          onChange={(event, value) => props.onChangeFnc({target: {name: "symptoms", value}})}
                          freeSolo
                          renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                              <Chip color='primary' label={option.name} {...getTagProps({ index })} />
                            ))
                          }        
                          renderInput={(params) => (
                            <TextField {...params} variant="outlined" placeholder="Sintomatología" />
                          )}
                        />
                    </Grid>
            </TabPanel>
            <TabPanel value={tab1value} index={2} dir={theme.direction}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Autocomplete
                          multiple
                          id="tags-filled"
                          variant='outlined'
                          options={props.backgroundList}
                          getOptionLabel={(option) => option.name}
                          onChange={(event, value) => props.onChangeFnc({target: {name: "personal_backgrounds", value}})}
                          freeSolo
                          renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                              <Chip color='primary' label={option.name} {...getTagProps({ index })} />
                            ))
                          }                
                          renderInput={(params) => (
                            <TextField {...params} variant="outlined" placeholder="Antecedentes" />
                          )}
                        />
                    </Grid>
            </TabPanel>
            <TabPanel value={tab1value} index={3} dir={theme.direction}>
            <Autocomplete
                          multiple
                          id="tags-filled"
                          variant='outlined'
                          options={props.familyBackgroundList}
                          getOptionLabel={(option) => `${option.name} (${option.member})`}
                          onChange={(event, value) => props.onChangeFnc({target: {name: "family_backgrounds", value}})}
                          freeSolo
                          renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                              <Chip color='primary' label={option.name} {...getTagProps({ index })} />
                            ))
                          }             
                          renderInput={(params) => (
                            <TextField {...params} variant="outlined" placeholder="Antecedentes familiares" />
                          )}
                        />
            </TabPanel>
            <TabPanel value={tab1value} index={4} dir={theme.direction}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Autocomplete
                          multiple
                          id="tags-filled"
                          variant='outlined'
                          getOptionLabel={(option) => option.name}
                          options={props.vaccineList}
                          onChange={(event, value) => props.onChangeFnc({target: {name: "vaccines", value}})}
                          freeSolo
                          renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                              <Chip color='primary' label={option.name} {...getTagProps({ index })} />
                            ))
                          }             
                          renderInput={(params) => (
                            <TextField {...params} variant="outlined" placeholder="Vacunas" />
                          )}
                        />
                  </Grid>
            </TabPanel>
            <TabPanel value={tab1value} index={5} dir={theme.direction}>
            
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Grid container spacing={1}>
                  <Grid item lg={8}>
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
                              name="diastolic"
                              variant="outlined"
                              type="number"
                              fullWidth
                              size='small'
                              id="diastolica"
                              label="Presion Diastolica"
                              value={props.diastolic}
                              onChange={props.onChangeFnc}
                            />
                          </Grid>
                          <Grid item lg={12}>
                              <TextField
                              name="sistolic"
                              variant="outlined"
                              type="number"
                              fullWidth
                              size='small'
                              id="diastolica"
                              label="Presion Sistolica"
                              value={props.sistolic}
                              onChange={props.onChangeFnc}
                            />
                          </Grid>
                          <Grid item lg={12}>
                              <TextField
                              name="pulse"
                              variant="outlined"
                              type="number"
                              fullWidth
                              size='small'
                              id="diastolica"
                              label="Frecuencia cardiaca"
                              value={props.pulse}
                              onChange={props.onChangeFnc}
                            />
                          </Grid>
                          <Grid item lg={12}>
                              <TextField
                              name="frec_resp"
                              variant="outlined"
                              type="number"
                              fullWidth
                              size='small'
                              id="diastolica"
                              label="Frecuencia respiratoria"
                              value={props.frec_resp}
                              onChange={props.onChangeFnc}
                            />
                          </Grid>
                    </Grid>
                    
                  </Grid>
                  <Grid item lg={2}>
                    <Grid container direction="column" spacing={1}>
                          <Grid item lg={12}>
                              <TextField
                              name="temp"
                              variant="outlined"
                              type="number"
                              fullWidth
                              size='small'
                              id="diastolica"
                              label="Temperatura (C°)"
                              value={props.temp}
                              onChange={props.onChangeFnc}
                            />
                          </Grid>
                          <Grid item lg={12}>
                              <TextField
                              name="height"
                              variant="outlined"
                              type="number"
                              fullWidth
                              size='small'
                              id="diastolica"
                              label="Estatura (cm)"
                              value={props.height}
                              onChange={props.onChangeFnc}
                            />
                          </Grid>
                          <Grid item lg={12}>
                              <TextField
                              name="weight"
                              variant="outlined"
                              type="number"
                              fullWidth
                              size='small'
                              id="diastolica"
                              label="Peso (Kg)"
                              value={props.weight}
                              onChange={props.onChangeFnc}
                            />
                          </Grid>
                    </Grid>
                    
                  </Grid>
                </Grid>
                    </Grid>
            </TabPanel>
          </SwipeableViews>
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

export default DetailsArea