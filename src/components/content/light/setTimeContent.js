import React from 'react'
import SetTime from './setTime'

class SetTimeContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hour: 0,
            minute: 0,
        }
    }
    componentWillMount() {
        var object = this.props.object
        object[this.props.step] = { 'value': '00:00' }
        this.props.handleSelected(object)
    }
    componentWillUnmount() {
        var value = this.state.hour + ':' + this.state.minute
        this.props.object[this.props.step] = { value }
        this.props.handleSelected(this.props.object)
    }
    handleHour = (o) => {
        this.setState({ hour: o } )
    }
    handleMinute = (o) => {
        this.setState({ minute: o })
    }
    render() {
        return (<div>
            {this.props.repeat && <SetTime handleValue={this.handleHour} hours />}
            <br></br>
            <SetTime handleValue={this.handleMinute} minutes />
        </div>
        )
    }


}

export default SetTimeContent