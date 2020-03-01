import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

const minutes = [0, 10, 20, 30, 40, 50]
const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

class SetTime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index:0,
            value:0
        }

    }

    add = () => {
        if (this.state.index != minutes.length){
            this.setState({
                index: this.state.index + 1
            })
            this.setState({
                value: minutes[this.state.index]
            })
        }
    }

    sub = () => {
        if (this.state.index != 0){
            this.setState({
                index: this.state.index - 1
            })
            this.setState({
                value: minutes[this.state.index]
            })
        }
    }

    render() {
        return (
            <div>
                <Button style={{ margin: '20px', width:'30px'  }} onClick={this.sub} variant="contained" color="secondary">
               -
      </Button>
                <Input
                style={{width:'40px', fontSize:20}}
                    readOnly
                    id="outlined-number"
                    label="Number"
                    variant="outlined"
                    value={this.state.value}
                    
                />
                <Button style={{ margin: '20px' ,width:'30px' }} onClick={this.add} variant="contained" color="secondary">
                    +
      </Button>
            </div>
        )
    }

}

export default SetTime