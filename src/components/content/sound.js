import React from 'react'
import Grid from '@material-ui/core/Grid';
import Onoff from './../utils/onoff'
import sliderParameters from './../utils/sliderParameters'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import SliderParameter from './../utils/sliderParameters';

const style12 = {
    height: '140px',
    border: '1px solid'
}
const style6 = {
    height: '120px',
    border: '1px solid'
}
const styleContainer = { width: '800px', margin: '0px', backgroundColor: 'rgb(200,200,200)' }


class Sound extends React.Component {

    render() {
        return (

            <div >
                <Grid style={styleContainer} container spacing={3}>
                    <Grid style={style12} item xs={12}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={2}>
                                <Onoff />
                            </Grid>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <SliderParameter />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid style={style6} item xs={12} sm={6}>
                    </Grid>
                    <Grid item xs={12} sm={6} style={style6}>
                    </Grid>
                    <Grid style={style6} item xs={12} sm={6}>
                    </Grid>
                    <Grid item xs={12} sm={6} style={style6}>
                    </Grid>

                </Grid>
            </div>
        )
    }

}
export default Sound