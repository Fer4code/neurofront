import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


const FamilyBackgroundPicker = React.memo((props) => {
    let valuesList = props.valuesList ? props.valuesList : []
    return(
        <TextField className="state"
              id=""
              name="family_background"
              required
              select
              fullWidth
              label="Ant. Familiares"
              value={props.state}
              onChange={props.onChangeFnc}        
              variant="outlined"
              disabled={!props.valuesList.length > 0}
        >
              {valuesList.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
    )
})

export default FamilyBackgroundPicker