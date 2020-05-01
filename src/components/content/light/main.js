import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import LightService from './../../../services/lightService'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        alignContent: 'center',
        backgroundColor: 'black',
        color: theme.palette.text.secondary,
        height: '258px'
    },
}));
const service = new LightService()

export default function MainLight() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Button
                        onClick= {()=>{service.changePrincial()}}
                            style={
                                {
                                    cursor: 'none',
                                    height: 'inherit',
                                    width: '600px',
                                    fontSize: 40,
                                    border: '3px solid rgb(0,90,255)',
                                    color: 'white',
                                    backgroundColor:'rgb(20,20,20)',
                                    borderRadius:40
                                }}>
                            </Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}