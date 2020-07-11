import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


const PersonalBackgroundPicker = React.memo((props) => {
    let valuesList = props.valuesList ? props.valuesList : []
    return(
        <TextField className="state"
              id=""
              name="personal_background"
              required
              select
              fullWidth
              label="Ant. Personales"
              value={props.state}
              onChange={props.onChangeFnc}        
              variant="outlined"
              disabiled={!props.valuesList.length > 0}
        >
              {valuesList.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
    )
})

export default PersonalBackgroundPicker