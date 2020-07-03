import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    subtitle: {
      fontSize: 'subtitle',
      color: 'white',
    },
    subtitlem: {
        fontSize: 'subtitle',
        color: 'black',
        align: 'center',
        justifyContent: 'center',
      },
  });

const NavigationItem = (props) => {
    const classes = useStyles()

    return (
        <Link to={props.link}>
            <MenuItem>
                <Typography className={classes[props.stylew]}>
                    {props.children}
                </Typography>
            </MenuItem>
        </Link>
    )
}

export default NavigationItem