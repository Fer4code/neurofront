import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-bootstrap/Carousel'
import car1 from '../../img/car1.jpg'
import car2 from '../../img/car2.jpg'
import car3 from '../../img/car3.jpg'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  carousel: {

  },
  carimg:{
    width: '100%',
    height: '70vh'
  }
}));

export default function Landing() {
  const [index, setIndex] = React.useState(0);
  const classes = useStyles();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return ( 
    <Grid container>
      <Grid item sm={12}>
      <Carousel activeIndex={index} onSelect={handleSelect} className={classes.carousel}>
      <Carousel.Item>
        <img
          className={classes.carimg}
          src={car1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={classes.carimg}
          src={car3}
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
          src={car2}
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
      <Grid item xs={12}>
        
      </Grid>
    </Grid>
    
  );
}