import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from '../../axios-instance';
import { makeStyles } from '@material-ui/core/styles';
import {Card, Grid, Divider, CssBaseline, Paper} from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Line
} from 'recharts';

const useStyles = makeStyles  ((theme) => ({
    container: {
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        marginTop: theme.spacing(4),
        padding: theme.spacing(2),
        width: '100%'
    },
    icon: {
      marginLeft: '80%',
      marginTop: '15%',
      color: 'green',
      '&:hover': {
      color: 'yellow',
      cursor: 'pointer'
      },
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
    exp: {
      backgroundColor: 'grey',
      borderRadius: '0.5rem',
      padding: theme.spacing(2),
      width: '100%'
    },
    titles: {
        color:'white',
        marginBottom: theme.spacing(2)
    },
    secondandthird:{
      marginTop: theme.spacing(4),
      backgroundColor: 'grey',
      borderRadius: '0.5rem',
      padding: theme.spacing(2),
      width: '100%'
    }
  }));
const data = [
	{
		name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
	},
	{
		name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
	},
	{
		name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
	},
	{
		name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
	},
	{
		name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
	},
	{
		name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
	},
	{
		name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
	},
];

export default function Lerea (props){
    const classes = useStyles();
    return(
        <Container maxWidth='lg' className={classes.container}>
            <Typography align='center' variant="h3" color="initial">Estadisticas del sitio</Typography>
            <Paper elevation={8} className={classes.exp}>
                <Grid
                container
                spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="space-between"
                wrap="nowrap"
                >
                        <Grid item xl={6} lg={6}>
                            <Typography variant="h6" align='center' className={classes.titles}>Usuarios registrados en la ultima semana</Typography>
                            <AreaChart width={500} height={250} data={data}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="2%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                    <stop offset="98%" stopColor="#82ca9d" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <XAxis tick={{fill: 'white'}} dataKey='name' /> 
                                <YAxis tick={{fill: 'white'}}/>
                                <Tooltip />
                                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={4} fill="url(#colorPv)" />
                            </AreaChart>
                            
                        </Grid>
                        <Grid item xl={6} lg={6}>
                        <Typography variant="h6" align='center' className={classes.titles}>Usuarios registrados</Typography>
                            <AreaChart width={500} height={250} data={data}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                    </linearGradient>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <XAxis tick={{fill: 'white'}} dataKey='name' /> 
                                <YAxis tick={{fill: 'white'}}/>
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                            </AreaChart>
                        </Grid>
                </Grid>
            </Paper>
            <Paper elevation={8} className={classes.secondandthird}>
                <Grid
                container
                spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="space-between"
                wrap="nowrap"
                >
                        <Grid item xl={6} lg={6}>
                            <Typography variant="h6" align='center' className={classes.titles}>Usuarios registrados en la ultima semana</Typography>
                            <AreaChart width={500} height={250} data={data}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="2%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                    <stop offset="98%" stopColor="#82ca9d" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <XAxis tick={{fill: 'white'}} dataKey='name' /> 
                                <YAxis tick={{fill: 'white'}}/>
                                <Tooltip />
                                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={4} fill="url(#colorPv)" />
                            </AreaChart>
                            
                        </Grid>
                        <Grid item xl={6} lg={6}>
                        <Typography variant="h6" align='center' className={classes.titles}>Usuarios registrados</Typography>
                            <AreaChart width={500} height={250} data={data}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                    </linearGradient>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <XAxis tick={{fill: 'white'}} dataKey='name' /> 
                                <YAxis tick={{fill: 'white'}}/>
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                            </AreaChart>
                        </Grid>
                </Grid>
            </Paper>
            <Paper elevation={8} className={classes.secondandthird}>
                <Grid
                container
                spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="space-between"
                wrap="nowrap"
                >
                        <Grid item xl={6} lg={6}>
                            <Typography variant="h6" align='center' className={classes.titles}>Usuarios registrados en la ultima semana</Typography>
                            <AreaChart width={500} height={250} data={data}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="2%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                    <stop offset="98%" stopColor="#82ca9d" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <XAxis tick={{fill: 'white'}} dataKey='name' /> 
                                <YAxis tick={{fill: 'white'}}/>
                                <Tooltip />
                                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={4} fill="url(#colorPv)" />
                            </AreaChart>
                            
                        </Grid>
                        <Grid item xl={6} lg={6}>
                        <Typography variant="h6" align='center' className={classes.titles}>Usuarios registrados</Typography>
                            <AreaChart width={500} height={250} data={data}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                    </linearGradient>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <XAxis tick={{fill: 'white'}} dataKey='name' /> 
                                <YAxis tick={{fill: 'white'}}/>
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                            </AreaChart>
                        </Grid>
                </Grid>
            </Paper>
        </Container>
)}
