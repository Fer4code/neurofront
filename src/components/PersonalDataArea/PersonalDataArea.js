import React from 'react';
import { Typography, Grid, TextField} from '@material-ui/core/';

import ExpansionArea from '../UI/ExpansionArea/ExpansionArea';
import DatePicker from '../UI/Pickers/DatePicker/DatePicker'
import GenderPicker from '../UI/Pickers/GenderPicker/GenderPicker'
import BloodPicker from '../UI/Pickers/BloodPicker/BloodPicker'
import DocumentPicker from '../UI/Pickers/DocumentPicker/DocumentPicker'
import StatusPicker from '../UI/Pickers/StatusPicker/StatusPicker'
import CountryPicker from '../UI/Pickers/CountryPicker/CountryPicker'
import StatePicker from '../UI/Pickers/StatePicker/StatePicker'
import MunicipalityPicker from '../UI/Pickers/MunicipalityPicker/MunicipalityPicker'
import InputAdornment from '@material-ui/core/InputAdornment';
import NumberFormatCustom from '../UI/TelephoneInput/NumberFormatCustom/NumberFormatCustom'
import TelephoneInput from '../UI/TelephoneInput/TelephoneInput'

const PersonalDataArea = React.memo((props) => {
    return(
        <ExpansionArea title="Datos Personales">
            <Grid container spacing={2}>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                    <DatePicker birth_date={props.birth_date} onChangeFnc={props.onChangeFnc}/>
                </Grid>
                <Grid item xl={1} lg={1} md={1} sm={6} xs={12}>
                <TextField
                        autoComplete="address"
                        name="direction"
                        variant="outlined"
                        InputProps={{
                            readOnly: true,
                          }}
                        fullWidth
                        id="direction"
                        label="Edad"
                        direction={props.direction} 
                        onChange={props.onChangeFnc}
                    />
                </Grid>
                <Grid item xl={2} lg={2} md={2} sm={6} xs={12}>
                    <GenderPicker gender={props.gender} onChangeFnc={props.onChangeFnc}/>
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                    <BloodPicker blood_type={props.blood_type} onChangeFnc={props.onChangeFnc}/>
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                    <StatusPicker marital_status={props.marital_status} onChangeFnc={props.onChangeFnc}/>
                </Grid>
                <Grid item xl={2} lg={2} md={3} sm={6} xs={12}>
                    <DocumentPicker documentType={props.documentType} onChangeFnc={props.onChangeFnc}/>
                </Grid>
                <Grid item xl={2} lg={2} md={3} sm={6} xs={12}>
                    <TextField className="cidnumber"
                    id="document"
                    name={props.documentType}
                    required
                    fullWidth
                    label="Nro de documento"
                    type="input"
                    
                    defaultValue=''        
                    startadornment={<InputAdornment position="start">
                                        "V-"
                                    </InputAdornment>}
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                    variant="outlined"
                    value={props.document} 
                    onChange={props.onChangePrefixed("document")}
                    />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                    <TextField className="cidnumber"
                    id="document"
                    name={props.documentType}
                    required
                    fullWidth
                    label="Profesion"
                    type="input"
                    variant='outlined   '
                    
                    />
                </Grid>
                <Grid item xl={3} lg={2} md={3} sm={6} xs={12}>
                    <TelephoneInput id="telephone1" label="Telefono" name="telephone" value={props.telephone} onChangePrefixed={props.onChangePrefixed}/>
                </Grid>
                <Grid item xl={2} lg={2} md={3} sm={6} xs={12}>
                    <TelephoneInput id="telephone2" label="Telefono Secundario" name="telephone2" value={props.telephone2} onChangePrefixed={props.onChangePrefixed}/>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField
                        autoComplete="address"
                        name="direction"
                        variant="outlined"
                        required
                        fullWidth
                        id="direction"
                        label="Direccion"
                        direction={props.direction} 
                        onChange={props.onChangeFnc}
                    />
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                    <CountryPicker 
                        valuesList={props.countriesList} 
                        value={props.country}
                        onChangeFnc={props.onChangeFnc}/>
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                    <StatePicker 
                        valuesList={props.statesList} 
                        value={props.state}
                        onChangeFnc={props.onChangeFnc} />
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                    <MunicipalityPicker 
                        valuesList={props.municipalitiesList} 
                        value={props.municipality}
                        onChangeFnc={props.onChangeFnc}
                    />
                </Grid>
            </Grid>
        </ExpansionArea>
    )
}, (prevProps, nextProps) => {
    return Object.keys(nextProps).reduce((currentResult, name) => {
        if ( name == "onChangeFnc" || name == "onChangePrefixed") {
            return currentResult
        }
        return currentResult && ( prevProps[name] === nextProps[name] )
    }, true) 
        
})

export default PersonalDataArea