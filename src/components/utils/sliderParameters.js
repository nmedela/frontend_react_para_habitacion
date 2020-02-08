import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles({
    root: {
        width: 450,
    },
});
const VolumeSlider = withStyles({
    root: {
      color: 'rgb(0,0,255)',
      height: 8,
    },
    thumb: {
      height: 54,
      width: 54,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus,&:hover,&$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 40,
      borderRadius: 4,
    },
    rail: {
      height: 40,
      borderRadius: 4,
    },
  })(Slider);
export default function SliderParameter() {
    const classes = useStyles();
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Typography id="continuous-slider" gutterBottom>
                Volume
      </Typography>
            <Grid container spacing={1}>
                <Grid item>
                    <VolumeDown />
                </Grid>
                <Grid item xs>
                    <VolumeSlider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                </Grid>
                <Grid item>
                    <VolumeUp />
                </Grid>
            </Grid>
        </div>
    );
}