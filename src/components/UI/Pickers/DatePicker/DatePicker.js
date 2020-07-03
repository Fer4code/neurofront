import React from 'react';
import {  MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const DatePicker = (props) => {
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                className="cbirthdate"
                name="birth_date"
                autoOk
                fullWidth
                variant="inline"
                inputVariant="outlined"
                label="Fecha de nacimiento"
                format="dd/MM/yyyy"
                disableFuture
                orientation="landscape"
                rightArrowIcon
                maxDateMessage="Fecha posterior al día de hoy"
                value={props.birth_date}
                onChange={props.onChangeFnc}
                InputAdornmentProps={{ position: "start" }}
            />
        </MuiPickersUtilsProvider>
    )
}

export default DatePicker;