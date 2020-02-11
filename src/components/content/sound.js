import React from 'react'
import Grid from '@material-ui/core/Grid';
import Onoff from './../utils/onoff'
import Slider from '@material-ui/core/Slider';
import SliderParameter from './../utils/sliderParameters';
import MySlider from './../utils/my-slider';


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
                                <button > Encender con imagen de encendido</button>
                                <button>Boton de restablecer valores</button>
                            </Grid>
                            <Grid item xs={12} sm={1}>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <MySlider
                                    controls
                                    long='350px'
                                    id='volumen'
                                    maxNum='47'
                                    minNum='0'
                                    mute
                                    nameSlider='Volumen'
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid style={style6} item xs={12} sm={6}>
                        <MySlider
                            id='bass'
                            maxNum='14'
                            minNum='-14'
                            stepSlider= '2'
                            nameSlider='Graves'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} style={style6}>
                        <MySlider
                            id='treble'
                            maxNum='14'
                            minNum='-14'
                            stepSlider='2'
                            nameSlider='Agudos'
                        />
                    </Grid>
                    <Grid style={style6} item xs={12} sm={6}>
                        <MySlider
                            maxNum='15'
                            minNum='0'
                            nameSlider='Balance L'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} style={style6}>
                        <MySlider
                            maxNum='15'
                            minNum='0'
                            nameSlider='Balance R'
                        />
                    </Grid>

                </Grid>
            </div>
        )
    }

}
export default Sound