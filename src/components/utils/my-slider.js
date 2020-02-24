import React from 'react'
import Typography from '@material-ui/core/Typography';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import VolumeOff from '@material-ui/icons/VolumeOff'
import Slider from '@material-ui/core/Slider';
import axios from 'axios'
import { isBoolean } from 'util';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { url } from '../../config'
import Grid from '@material-ui/core/Grid';


const theme = createMuiTheme({
    overrides: {
        // Style sheet name ⚛️
        MuiSlider: {
            // Name of the rule
            thumb: {
                // Some CSS
                width: '35px',
                height: '35px',
                // color:'black',
                backgroundColor: '#fff',
                borderBottom: '2px solid black',
                marginLeft: '-10px'
            },
            rail: {
                height: '25px',
                color: 'gray',
                borderBottom: '2px solid black',
                borderBottomRightRadius: '10px',
                borderBottomLeftRadius: '10px'
            },
            track: {
                height: '25px',
                color: 'blue',
                borderBottomRightRadius: '10px',
                borderBottomLeftRadius: '10px'
            },
        },
    },
});

class MySlider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: null,
            step: parseInt(this.props.stepSlider) ? parseInt(this.props.stepSlider) : 1,
            mute: null
        }

    }
    componentWillReceiveProps(props) {
        this.setState({
            value: props.value
        })

    }
    componentWillMount() {
        this.setState({
            value: this.props.value
        })
    }
    change = (id, newValue) => {
        isBoolean(newValue) ? this.setState({ mute: newValue }) : this.setState({ value: newValue })
        axios.post(`http://${url}/sound/change/68/${id}`, { value: newValue })
            .then(res => {
                var sound = res.data
                // console.log(sound)
            })
    }

    handleChange = (event, newValue) => {
        this.change(this.props.id, newValue)
    };
    handleClick(newValue) {
        var num = parseInt(newValue)
        var value = this.state.value + num
        if (value < 0 || value > 47) {
            value < 0 ? value = 0 : value = 47
        }
        this.change(this.props.id, value)

    }
    render() {
        const {
            controls,
            long,
            maxNum,
            minNum,
            mute,
            nameSlider,
        } = this.props


        const styleControls = {
            display: controls ? 'inline' : 'none',
            marginRight: '20px',
            marginLeft: '10px',
            borderBottom: ' 1px solid black',
            width: '70px',
            height: '60px',
            borderRadius: '5px',
            cursor: 'none'

        }
        const styleSlider = {
            width: long ? long : '300px',
            height: '20px',
            marginTop: '1px',
            marginLeft: '15px',
            cursor: 'none'
        }
        return (
            <div>
                <Grid container align='center' spacing={1}>
                    <Grid item xs={12} sm={12}>

                        <Typography style={{ fontSize: '20px', border: '1px solid rgb(160,160,160)', borderRadius: '20px', marginRight:'30px' }} align='center'  >
                            <span>
                                {nameSlider + " "}
                            </span>
                            <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                                {this.state.value}
                            </span>
                        </Typography>
                        {/* <br /> */}
                        {
                            mute ? <button
                                style={
                                    { backgroundColor: this.state.mute ? 'gray' : '#DDD', width: '70px', height: '60px', borderBottom: ' 1px solid black', }}
                                id='mute'
                                onClick={() => this.change('mute', !this.state.mute)}
                            ><VolumeOff /></button> : null
                        }
                        <button style={styleControls}
                            onClick={() => this.handleClick('-2')}
                        ><VolumeDown /></button>
                        <ThemeProvider theme={theme}>

                            <Slider
                                style={
                                    styleSlider
                                }
                                value={this.state.value}
                                min={parseInt(minNum)}
                                max={parseInt(maxNum)}
                                step={this.state.step}
                                onChangeCommitted={this.handleChange}
                                aria-labelledby="continuous-slider"
                            />
                        </ThemeProvider>

                        <button style={styleControls} onClick={() => this.handleClick('2')} ><VolumeUp /></button>
                        <br />

                    </Grid>
                </Grid>
            </div >
        )
    }
}

export default MySlider