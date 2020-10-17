import React from 'react';
import Slider from 'react-slick';
import { makeStyles } from '@material-ui/core/styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography, Grid } from '@material-ui/core';
import './slick-custom.css';
import { findDOMNode } from 'react-dom';

const useStyles = makeStyles(theme => ({
    content: {
        maxWidth: '100%',
    },
    root:{
        width: '100%',
        margin: 0,
    },
    card: {
        paddingLeft: 25,
        paddingRight: 25
    },
    cardTitle: {
        position: 'absolute',
        top: '20%',
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Poppins',
        fontWeight: 700
    },
    cardText: {
        position: 'absolute',
        top: '40%',
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Poppins',
    },
}));

export function Carousel() {
    const classes = useStyles();
    const settings = {
        dots: true,
        centerMode: true,
        className: classes.content,
        slidesToShow: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000
      };
    
    return(
        <div className={classes.root}>
        <Slider {...settings}>
        <div>
            <Grid container justify="center" alignItems="center">
            <Card src="https://source.unsplash.com/2tigIl6Tt7E/1920x666" text="Gallery" />
            </Grid>  
        </div>
        <div>
            <Grid container justify="center" alignItems="center">
            <Card src="https://source.unsplash.com/2tigIl6Tt7E/1920x666" text="Gallery" />
            </Grid>
        </div>
        <div>
            <Grid container justify="center" alignItems="center">
            <Card src="https://source.unsplash.com/2tigIl6Tt7E/1920x666" text="Gallery" />
            </Grid>
        </div>
        <div>
            <Grid container justify="center" alignItems="center">
            <Card src="https://source.unsplash.com/2tigIl6Tt7E/1920x666" text="Gallery" />
            </Grid>
        </div>
        <div>
            <Grid container justify="center" alignItems="center">
            <Card src="https://source.unsplash.com/2tigIl6Tt7E/1920x666" text="Gallery" />
            </Grid>
        </div>
        <div>
            <Grid container justify="center" alignItems="center">
            <Card src="https://source.unsplash.com/2tigIl6Tt7E/1920x666" text="Gallery" />
            </Grid>
        </div>
      </Slider>
      </div>
    );
}

function Card(props) {
    const {src, text} = props;
    const classes = useStyles();
    return(
        <div className={classes.card} >
            <Grid container justify="center" alignItems="center" className="card-image">
                <img 
                src={src}
                style={{maxHeight: '100%', maxWidth: '100%'}}
                />
            </Grid>
            <Grid container justify="center" alignItems="center">
                <Typography variant="h6" className={classes.cardTitle}>
                    RAVI SURI
                </Typography>
                <Typography variant="h4" className={classes.cardText}>
                    {text}
                </Typography>
            </Grid>
            
        </div>
    );
}