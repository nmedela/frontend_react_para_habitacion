import React from 'react'
import Grid from '@material-ui/core/Grid';
import MySlider from './../utils/my-slider';
import axios from 'axios'

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
    constructor(props) {
        super(props)
        this.state = {
            volumen: null,
            bass: null,
            treble: null,
            balanceL: null,
            balanceR: null,
            power: false,
            isLoading: true
        }
    }

    componentWillMount() {
        axios.get(`http://192.168.0.99:4000/sound/sounds/68`)
            .then((res) => {
                this.setState({
                    volumen: res.data.volumen,
                    bass: res.data.bass,
                    treble: res.data.treble,
                    balanceL: res.data.balanceL,
                    balanceR: res.data.balanceR,
                    // power: res.data.power,
                    isLoading: false
                })
                console.log(this.state)
                console.log(res.data)
            })
    }

    handleClick = (event, newValue) => {
        this.setState({
            power: !this.state.power
        })
        axios.post(`http://192.168.0.99:4000/sound/change/68/power`, { value: (this.state.power ? 1 : 0) })
            .then(res => {
                var sound = res.data
                console.log(sound)
            })
    }
    render() {

        if (this.state.isLoading) {
            console.log("paso por el cargando")
            return <p>Está cargando</p>

        }
        return (
            < div >
                <Grid style={styleContainer} container spacing={3}>
                    <Grid style={style12} item xs={12}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={2}>
                                <button onClick={this.handleClick} style={{backgroundColor: !!this.state.power?'green':'red'}}> Encender con imagen de encendido</button>
                                <button disabled>Boton de restablecer valores</button>
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
                                    value={this.state.volumen}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid style={style6} item xs={12} sm={6}>
                        <MySlider
                            id='bass'
                            maxNum='14'
                            minNum='-14'
                            stepSlider='2'
                            nameSlider='Graves'
                            value={this.state.bass}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6} style={style6}>
                        <MySlider
                            id='treble'
                            maxNum='14'
                            minNum='-14'
                            stepSlider='2'
                            nameSlider='Agudos'
                            value={this.state.treble}

                        />
                    </Grid>
                    <Grid style={style6} item xs={12} sm={6}>
                        <MySlider
                            id='balanceL'
                            maxNum='79'
                            minNum='0'
                            nameSlider='Balance L'
                            value={this.state.balanceL}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} style={style6}>
                        <MySlider
                            id='balanceR'
                            maxNum='79'
                            minNum='0'
                            nameSlider='Balance R'
                            value={this.state.balanceR}
                        />
                    </Grid>

                </Grid>
            </div >
        )
    }

}
export default Sound