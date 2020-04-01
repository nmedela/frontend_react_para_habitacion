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
            index: 0,
            value: 0,
            time: props.minutes ? minutes : hours
        }

    }

    add = () => {
        if (this.state.index != this.state.time.length - 1) {
            this.setState((state) => {
                return { index: state.index + 1 }
            })
        } else {
            this.setState((state) => {
                return { index: 0 }
            })

        }
        this.setState((state) => {
            return { value: state.time[state.index] }
        })
    }

    sub = () => {
        if (this.state.index != 0) {
            this.setState((state) => {
                return { index: state.index - 1 }
            })
        } else {
            this.setState((state) => {
                return { index: state.time.length - 1 }
            })

        }
        this.setState((state) => {
            return { value: state.time[state.index] }
        })
    }

    render() {
        return (
            <div>
                <Button style={{ margin: '20px', width: '30px' }} onClick={this.sub} variant="contained" color="secondary">
                    -
      </Button>
                <Input
                    style={{ width: '40px', fontSize: 20 }}
                    readOnly
                    id="outlined-number"
                    label="Number"
                    variant="outlined"
                    value={this.state.value}

                />
                <Button style={{ margin: '20px', width: '30px' }} onClick={this.add} variant="contained" color="secondary">
                    +
      </Button>{this.props.minutes ? 'Min' : 'Hs'}

            </div>
        )
    }

}

export default SetTime