import React from 'react'
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import VolumeOff from '@material-ui/icons/VolumeOff'
import Slider from '@material-ui/core/Slider';
import axios from 'axios'

class MySlider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            step: parseInt(this.props.stepSlider) ? this.props.stepSlider : 1
        }
    }
    componentDidMount(props) {
    }

    handleChange = (event, newValue) => {
        this.setState({ value: newValue })
        axios.post(`http://192.168.0.99:4000/sound/change/68/${this.props.id}`, { value: newValue })
            .then(res => {
                console.log(res.data)
            })
    };

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
            margin: '5px',

        }
        const styleSlider = {
            width: long ? long : '300px'
        }
        return (
            <div>
                <span>{nameSlider}</span>
                <br />
                {mute ? <button> <VolumeOff /></button> : null}
                <button style={styleControls}><VolumeDown /></button>

                <Slider
                    style={
                        styleSlider
                    }
                    value={this.state.value}
                    min={parseInt(minNum)}
                    max={parseInt(maxNum)}
                    step={this.state.step}
                    onChange={this.handleChange}
                    aria-labelledby="continuous-slider"
                />

                <button style={styleControls}><VolumeUp /></button>
                <br />
                <span>{this.state.value}</span>
            </div>
        )
    }
}

export default MySlider