import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

class Light extends React.Component{
render(){

    return(
        <div>
                <Grid container spacing={3}>
                    <Grid  item xs={12} align='center'>
                        <CircularProgress disableShrink style={{ width: '100px', height: '100px' }} />
                        <p>En construccion...</p>
                    </Grid>
                </Grid>
        </div>
    )

}
}
export default Light