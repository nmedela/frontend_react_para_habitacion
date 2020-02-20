import React from 'react'
import Grid from '@material-ui/core/Grid';
import MySlider from '../../utils/my-slider';
import axios from 'axios'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import { url } from '../../../config'

const style12 = {
    height: '140px',
    // border: '1px solid'
}
const style6 = {
    height: '120px',
    // border: '1px solid rgb(190,190,190)',

}
const styleContainer = { width: '800px', margin: '0px', backgroundColor: 'rgb(200,200,200)' }


class Sound extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sound: {
                volumen: null,
                bass: null,
                treble: null,
                balanceL: null,
                balanceR: null,
                power: null,
            },
            isLoading: true
        }
    }

    interval = 0

    componentWillMount() {
        this.init()
        this.interval = setInterval(() => {
            axios.get(`http://${url}/sound/sounds/68`)
                .then((res) => {
                    if (JSON.stringify(this.state.sound) != res.data) {
                        this.init()
                    }
                })
        }, 3000)
    }
    componentWillUnmount() {
        console.log('Se desmonta')
        clearInterval(this.interval)
    }
    init() {
        axios.get(`http://${url}/sound/sounds/68`)
            .then((res) => {
                this.setState({
                    sound: res.data,
                    isLoading: false
                })
            })

    }

    handleClick = (event, newValue) => {
        axios.post(`http://${url}/sound/change/68/power`, { value: (this.state.sound.power ? 0 : 1) })
            .then((res) => {
                this.setState({
                    sound: { power: !this.state.sound.power }
                })
            })
    }
    render() {

        if (this.state.isLoading) {
            return <div >
                <Grid container spacing={3}>
                    <Grid item xs={12} align='center'>
                        <CircularProgress disableShrink style={{ width: '100px', height: '100px' }} />
                        <p>Cargando...</p>
                    </Grid>
                </Grid>
            </div>

        }
        return (
            < div >
                <Grid style={styleContainer} container spacing={3}>
                    <Grid container spacing={1} style={{margin:'10px'}} aling='center'>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={2} align='center'>
                                    <IconButton onClick={this.handleClick}
                                        style={
                                            {
                                                backgroundColor: 'rgb(250,250,250)',
                                                borderBottom: '4px solid rgb(100,100,100)',
                                                cursor: 'none'
                                            }
                                        }
                                    > <PowerSettingsNewIcon color={!this.state.sound.power ? 'disabled' : 'secondary'}
                                        style={{ fontSize: 60 }} /></IconButton>
                                    {/* <button disabled>Restablecer</button> */}
                                </Grid>
                                <Grid item xs={12} sm={10}>
                                    <MySlider
                                        controls
                                        long='350px'
                                        id='volumen'
                                        maxNum='47'
                                        minNum='0'
                                        mute
                                        nameSlider='Volumen'
                                        value={this.state.sound.volumen}
                                    />
                                </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} style={{margin:'10px'}} aling='center'>
                        <Grid style={style6} item xs={12} sm={6}>
                            <MySlider
                                id='bass'
                                maxNum='14'
                                minNum='-14'
                                stepSlider='2'
                                nameSlider='Graves'
                                value={this.state.sound.bass}

                            />
                        </Grid>
                        <Grid item xs={12} sm={6} style={style6}>
                            <MySlider
                                id='treble'
                                maxNum='14'
                                minNum='-14'
                                stepSlider='2'
                                nameSlider='Agudos'
                                value={this.state.sound.treble}

                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} style={{margin:'10px'}} aling='center'>

                        <Grid style={style6} item xs={12} sm={6}>
                            <MySlider
                                id='balanceL'
                                maxNum='79'
                                minNum='0'
                                nameSlider='Balance L'
                                value={this.state.sound.balanceL}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} style={style6}>
                            <MySlider
                                id='balanceR'
                                maxNum='79'
                                minNum='0'
                                nameSlider='Balance R'
                                value={this.state.sound.balanceR}
                            />
                        </Grid>

                    </Grid>
                </Grid>
            </div >
        )
    }

}
export default Sound