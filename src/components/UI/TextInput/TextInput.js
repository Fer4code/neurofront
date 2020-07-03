import React from 'react';
import TextField from '@material-ui/core/TextField';


const TextInput = (props) => (
    <TextField
        autoComplete="sname"
        name="secondName"
        variant={this.props.variant || "outlined"}
        required={this.props.required}
        fullWidth={this.props.fullWidth}
        id="firstName"
        label="Segundo Nombre"
        autoFocus={this.props.}
                
    />
)

export default TextInput;