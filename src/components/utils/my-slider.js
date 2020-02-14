import React from 'react'
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import VolumeOff from '@material-ui/icons/VolumeOff'
import Slider from '@material-ui/core/Slider';
import axios from 'axios'
import { isBoolean } from 'util';

class MySlider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: null,
            step: parseInt(this.props.stepSlider) ? parseInt(this.props.stepSlider) : 1,
            mute: null
        }

    }

    componentWillMount() {
        this.setState({
            value: this.props.value
        })
    }

    change = (id, newValue) => {
        isBoolean(newValue) ? this.setState({ mute: newValue }) : this.setState({ value: newValue })
        axios.post(`http://192.168.0.99:4000/sound/change/68/${id}`, { value: newValue })
            .then(res => {
                var sound = res.data
                console.log(sound)
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
            margin: '5px',

        }
        const styleSlider = {
            width: long ? long : '300px'
        }
        return (
            <div>
                <span>{nameSlider}</span>
                <br />
                {mute ? <button
                    style={
                        styleControls,
                        { backgroundColor: this.state.mute ? 'gray' : '#DDD' }}
                    id='mute'
                    onClick={() => this.change('mute', !this.state.mute)}
                ><VolumeOff /></button> : null}
                <button style={styleControls}
                    onClick={() => this.handleClick('-2')}
                ><VolumeDown /></button>

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

                <button style={styleControls} onClick={() => this.handleClick('2')} ><VolumeUp /></button>
                <br />
                <span>{this.state.value}</span>
            </div>
        )
    }
}

export default MySlider