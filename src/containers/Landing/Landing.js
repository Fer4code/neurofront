import React from 'react'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Carousel from 'react-bootstrap/Carousel'
import car1 from '../../img/car1.jpg'
import car2 from '../../img/car2.jpg'
import car3 from '../../img/car3.jpg'
import photo2 from '../../img/prueba.gif'
import L2 from "../../img/L22.png"
import { Grid, useMediaQuery, Typography, Divider } from '@material-ui/core';

import Footer from './Footer'

const drawerWidth = 240;
const miniWidth = 73;
const useStyles = makeStyles((theme) => ({
  content: {
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'white'
  },
  contentShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: '#FFFFF'
  },
  contentmini: {
    marginLeft: miniWidth,
    width: `calc(100% - ${miniWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: '#FFFFF'
  },
  carimg:{
    width: '100%',
    height: '70vh'
  },
  img: {
    width:'100%'
  },
  paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      background: 'white',
  },
  mid: {
    marginTop: theme.spacing(15)
  }
}));

export default function Landing() {
  const [index, setIndex] = React.useState(2);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [isDrawer, setDrawer]= React.useState(false)
  

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return ( 
    <main className={isDrawer ? open ? classes.contentShift : classes.contentmini : classes.content}>
      <Grid item sm={12}>
      <Carousel
      alt='mycarousel'
      pause='scroll'
      controls='true'
      wrap='true'
      touch='true'
      fade='true'
      activeIndex={index} 
      onSelect={handleSelect} 
      className={classes.carousel}>
      <Carousel.Item>
        <img
          className={classes.carimg}
          src={car1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={classes.carimg}
          src={car1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={classes.carimg}
          src={car1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      </Grid>
      <Grid container className={classes.paper}>
      <Grid item sm={7} className={classes.mid}>
        <Grid container >
        <Grid item lg={6} sm={12}>
         <Typography variant="h4" color="initial" align='left'>Redes Neuronales Artificiales</Typography>
         <Typography variant="h5" color="initial" style={{marginTop: '10px'}}>Aplicadas en la investigación médica.</Typography>
         <Typography variant="body1" align='justify' color="initial" style={{marginTop: '10px'}}>
         Nosotros como organización para la atención médica aprovechando las técnicas de aprendizaje automático, como las redes neuronales artificiales (ANN) por sus siglas
         en inglés, mejorando la prestación de  nuestros servicios. Las aplicaciones de ANN al diagnóstico son bien conocidas; las ANN también
         son conocidas por utilizarse cada vez más para informar las decisiones de gestión de la atención médica. En este sistema ponemos a tu disposición una ANN diseñada
         para la investigación médica, la cual podrás utilizar para agilizar este proceso, consultando nuestras bases de datos, las cuales contienen una amplia variedad de 
         casos clinicos utiles para ti, ese profesional médico motivado a investigar más a fondo sobre las patolagías menos frecuentes en el mundo.
         </Typography>
         </Grid>
         <Grid item lg={6} sm={12} >
         <img src={photo2} alt='photo2' className={classes.img} />
          </Grid> 
       </Grid>
       <Divider style={{marginTop: '100px', marginBottom: "100px"}}/>
       <Grid container spacing={2}>
              <Grid item lg={6} sm={12} >
                  <img src={L2} alt='L2' className={classes.img}/>
              </Grid>
              <Grid item lg={6} sm={12}>
                <Typography variant="h4" align='justify'color="initial">Historias clínicas electrónicas</Typography>
                <Typography variant="h5" align='justify'color="initial">EHR ó Registros de salud electrónicos</Typography>
                <Typography variant="body1" align='justify' color="initial">
                Es la última tendencia dentro de los centros clínicos, y seguidamente de los médicos independientes,
                es la mejor manera de guardar los registros de los pacientes, permite acceder a ellos desde practicamente cualquier sitio con 
                conexión a internet, ademas tiene beneficios como el ahorro del papel y de archivos físicos.
                Este sistema te permite registrar todas las historias de tus pacientes y consultarlas en cualquier momento que lo necesites,
                sin necesidad de tener un papel en la mano.
                </Typography>
              </Grid>
       </Grid>
      <Divider style={{marginTop:'100px', marginBottom: "100px"}}/>
       <Grid container  style={{marginBottom:"40px"}}>
        <Grid item lg={6} sm={12}>
         <Typography variant="h4" color="initial" align='left'>Orientado a Médicos o Investigadores</Typography>
         <Typography variant="h5" color="initial" style={{marginTop: '10px'}}>En el área de la medicina</Typography>
         <Typography variant="body1" align='justify' color="initial" style={{marginTop: '10px'}}>
        Esta aplicación esta pensada, diseñada y construida en pro de los investigadores en el area de la medicina,
        es una aplicación basada en los principios de la medicina colaborativa e innovadora.
         </Typography>
         <Typography variant="body1" align='justify' color="initial" style={{marginTop: '15px'}}>
        Nuestro proposito es:
        </Typography>
        <Typography variant="body1" align='justify' color="initial" style={{marginTop: '5px'}}>
          1. Aumentar la velocidad de la investigación agilizando el manejo de datos.
         </Typography>
         <Typography variant="body1" align='justify' color="initial" style={{marginTop: '5px'}}>
         2. Mejorar la calidad de las investigaciones dentro de la medicina.
         </Typography>
         <Typography variant="body1" align='justify' color="initial" style={{marginTop: '5px'}}>
         3. Motivar cada vez más los avances en la medicina que proporcionen nuevas herramientas para la salud.
         </Typography>
         </Grid>
         <Grid item lg={6} sm={12} >
         <img src={photo2} alt='photo2' className={classes.img} />
          </Grid> 
       </Grid>
      </Grid>
      </Grid>
      <Footer/>
    </main>
  );
}