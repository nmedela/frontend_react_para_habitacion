import React from 'react'
import SetTime from './setTime'

class SetTimeContent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (<div>
           {this.props.repeat && <SetTime hours />}
            <br></br>
            <SetTime minutes />
        </div>
        )
    }


}

export default SetTimeContent