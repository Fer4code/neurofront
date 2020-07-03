import React from 'react'
import {Grid, Typography, makeStyles} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    content :{
        backgroundColor: theme.palette.navbar.color,
        height: '30%'
    },
    header:{
        color: 'white'
    },
    item: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
        
    }
}));


function Footer() {
    const classes = useStyles();
    return (
        <div>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-end"
              alignContent='flex-end'
              wrap="nowrap"
              className={classes.content}
            >
            <Grid item xs={12}>
                <Grid container >
                <Grid item xs={4} align='center' style={{marginTop: '2%'}}>
                    <GitHubIcon style={{ color: 'white' }}fontSize='large'/>
                    <Typography variant="h6" className={classes.header}>GitHub</Typography>
                </Grid>
                <Grid item xs={4} align='center' className={classes.item}>
                    <Typography variant="h6" className={classes.header}>Como lo hacemos</Typography>
                    <Typography variant="body1"  align="center"style={{color: "white"}}>
                        Aplicamos la AI a la investigación médica, basados en los casos clinicos más
                        relevantes, llevando un histórico de todos los casos de estudio. 
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "white", marginTop: "10px"}}>
                        ¿Aún dudas? Registrate y experimenta todas las bondades que ofrecemos para ti! 
                    </Typography>
                </Grid>
                <Grid item xs={4} align='center' style={{marginTop: '3%'}}>
                    <Typography variant="h6" className={classes.header}>{`© ${new Date().getFullYear()} Medic System`}</Typography>
                    
                </Grid>
                </Grid>
            </Grid>
            </Grid>            
        </div>
    )
}

export default Footer
