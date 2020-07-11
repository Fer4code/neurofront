import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


const StatusPicker = React.memo((props) => {
    const mstatus = [
    {
      value: 'Soltero',
      label: 'Soltero'
    },
    {
      value: 'Casado',
      label: 'Casado'
    }, {
      value: 'Divorciado',
      label: 'Divorciado'
    },
    {
      value: 'Viudo',
      label: 'Viudo'
    },
  ]
    return(
        <TextField className="maritalstatus"
            id="idmaritalstatus"
            name="marital_status"
            select
            required
            fullWidth
            label="Estado civil"
            value={props.marital_status}
            onChange={props.onChangeFnc}         
            variant="outlined"
        >
              {mstatus.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    )
})

export default StatusPicker