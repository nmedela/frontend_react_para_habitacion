import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import DenseAppBar from '../../menu/appBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainLight from './main'
import MenuLight from '../../menu/tabsLight';

class Light extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            isReady: true,
            light: {

            },
            content: null
        }
    }
    render() {
        if (!this.state.isReady) {
            return (
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={12} align='center'>
                            <CircularProgress disableShrink style={{ width: '100px', height: '100px' }} />
                            <p>En construccion...</p>
                        </Grid>
                    </Grid>
                </div>)
        }
        if (this.state.isLoading) {
            return (
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={12} align='center'>
                            <CircularProgress disableShrink style={{ width: '100px', height: '100px' }} />
                            <p>Cargando...</p>
                        </Grid>
                    </Grid>
                </div>)
        }

        return (
            <div>
                <div>
                    <MenuLight />
                </div>

                {this.props.content}

            </div>
        )

    }
}
export default Light