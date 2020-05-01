import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import LightService from './../../../services/lightService'

const useStyles = makeStyles(theme => ({
    buttonScenes: {
        margin: theme.spacing(1),
        height: '110px',
        width: '200px',
        fontSize: 20,
        borderRadius: '50px',
        backgroundColor: 'rgb(100,100,100)',
        cursor: 'none'
    },
    buttonMain: {
        fontSize: 20,
        height: '100px',
        width: '200px',
        border: '2px solid rgb(140,140,140)',
        cursor: 'none'
    },
    formControl: {
        margin: theme.spacing(0),
        minWidth: 120,
        cursor: 'none'
    },
    root: {
        flexGrow: 1,
        backgroundColor: 'rgb(200,200,200)',

    },
    select: {
        height: 60,
        width: '200px',
        cursor: 'none'
    },
    paperSelect: {
        padding: theme.spacing(3),
        backgroundColor: 'rgb(200,200,200)',
        textAlign: 'center',
        color: theme.palette.text.secondary,
        cursor: 'none'
        // border: '1px solid black'
    },
    paperMain: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        // border: '1px solid black',
        cursor: 'none'
    },
    paperScenes: {
        backgroundColor: 'rgb(200,200,200)',
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        cursor: 'none'
        // border: '1px solid black',
    },
    menuItem: {
        height: '80px',
        width: '200px',
        cursor: 'none'
    }
}));
const service = new LightService()

export default function Scenes() {
    const classes = useStyles();
    const [lights, setLights] = React.useState(null);
    const [scenes, setScenes] = React.useState(null);
    const [selected, setSelected] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const getAll = () => {
        return service.getAll().then((res) => {
            console.log(res)
            return res
        })
    }

    const getScenes = () => {
        return service.getScenes().then((res) => {
            return res
        })
    }
    useEffect(() => {
        if (isLoading) {

            var valor = getAll()
            var scenes = getScenes()
            valor.then((res) => {
                setLights(res)
                scenes.then((respo) => {
                    console.log("esto trae scenes ", respo)
                    setScenes(respo)
                    setSelected(0)
                    setIsLoading(false)
                })
            })

        }

    })

    const changeIntensity = (value) => {
        var newLights = lights
        var index = newLights.findIndex(e => e.id == selected)
        newLights[index].intensity = value
        setLights(newLights)
        service.setScene(newLights[index])

    }

    const handleChange = (event) => {
        changeSelected(event)
    };
    const changeSelected = (event) => {
        setSelected(event.target.value)
    }
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    const hola=()=>{
        alert("lalalal")
    }
    return (

        <div>

            {!isLoading && <div className={classes.root}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={4} >
                        <Grid item xs={12} sm={12} >
                            <div className={classes.paperSelect}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="label-light">Luces</InputLabel>
                                    <Select
                                        labelId="label-light"
                                        className={classes.select}
                                        open={open}
                                        onClose={handleClose}
                                        onOpen={handleOpen}
                                        value={selected}
                                        onChange={e => handleChange(e)}
                                    >
                                        {
                                            lights.map((e) => {
                                                return (
                                                    <MenuItem className={classes.menuItem} value={e.id}>{e.title}</MenuItem>
                                                )
                                            })
                                        }
                                    </Select>
                                </FormControl>

                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} >
                            <div className={classes.paperMain}>
                                <Button variant="contained" onClick={()=>{service.changePrincial()}} className={classes.buttonMain}>Principal</Button>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={8} >
                        <div className={classes.paperScenes}>
                            <Button variant="contained" color="Primary" onClick={() => changeIntensity(scenes[0].intensity)} className={classes.buttonScenes}>{scenes[0].title}</Button>
                            <Button variant="contained" color="Primary" onClick={() => changeIntensity(scenes[1].intensity)} className={classes.buttonScenes}>{scenes[1].title}</Button>
                        </div>
                        <div className={classes.paperScenes}>
                            <Button variant="contained" color="Primary" onClick={() => changeIntensity(scenes[2].intensity)} className={classes.buttonScenes}>{scenes[2].title}</Button>
                            <Button variant="contained" color="Primary" onClick={() => changeIntensity(scenes[3].intensity)} className={classes.buttonScenes}>{ scenes[3].title}</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>}
        </div>
    );
}