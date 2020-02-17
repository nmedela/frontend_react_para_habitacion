import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import DenseAppBar from './../menu/appBar'

class Light extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            isReady: true,
            light: {

            }
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
                <DenseAppBar />
                <div style={{backgroundColor:'rgb(200,200,200)', height:'320px'}}>
                    container
                </div>
            </div>
        )

    }
}
export default Light