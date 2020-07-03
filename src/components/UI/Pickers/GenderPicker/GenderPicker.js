import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


const GenderPicker = React.memo((props) => {
  const sextype = [
        {
          value: 'F',
          label: 'Femenino',
        },
        {
          value: 'M',
          label: 'Masculino',
        },
      ];
    return(
        <TextField className="csex"
              id="gender"
              name="gender"
              required
              select
              fullWidth
              label="Género"
              value={props.gender}
              onChange={props.onChangeFnc}        
              variant="outlined"
        >
              {sextype.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    )
})

export default GenderPicker