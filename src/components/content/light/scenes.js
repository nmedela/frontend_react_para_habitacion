import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    buttonScenes: {
        margin: theme.spacing(1),
        height: '110px',
        width: '200px',
        fontSize:20,
        borderRadius:'50px',
        backgroundColor:'rgb(100,100,100)',
        cursor:'none'
    },
    buttonMain: {
        fontSize:20,
        height: '100px',
        width: '200px',
        border:'2px solid rgb(140,140,140)',
        cursor:'none'
    },
    formControl: {
        margin: theme.spacing(0),
        minWidth: 120,
        cursor:'none'
    },
    root: {
        flexGrow: 1,
        backgroundColor:'rgb(200,200,200)',
        
    },
    select: {
        height: 60,
        width:'200px',
        cursor:'none'
    },
    paperSelect: {
        padding: theme.spacing(3),
        backgroundColor:'rgb(200,200,200)',
        textAlign: 'center',
        color: theme.palette.text.secondary,
        cursor:'none'
        // border: '1px solid black'
    },
    paperMain: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        // border: '1px solid black',
        cursor:'none'
    },
    paperScenes: {
        backgroundColor:'rgb(200,200,200)',
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        cursor:'none'
        // border: '1px solid black',
    },
    menuItem:{
        height:'80px',
        width:'200px',
        cursor:'none'
    }
}));

export default function Scenes() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = event => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <div className={classes.root}>
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
                                        value={age}
                                        onChange={handleChange}
                                    >
                                        <MenuItem className={classes.menuItem} value={10}>Ten</MenuItem>
                                        <MenuItem className={classes.menuItem} value={20}>Twenty</MenuItem>
                                        <MenuItem className={classes.menuItem} value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} >
                            <div className={classes.paperMain}>
                                <Button variant="contained"  className={classes.buttonMain}>Principal</Button>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={8} >
                        <div className={classes.paperScenes}>
                                <Button variant="contained" color="Primary" className={classes.buttonScenes}>Apagado</Button>
                                <Button variant="contained" color="Primary" className={classes.buttonScenes}>Tenue</Button>
                        </div>
                        <div className={classes.paperScenes}>
                                <Button variant="contained" color="Primary" className={classes.buttonScenes}>Agradable</Button>
                                <Button variant="contained" color="Primary" className={classes.buttonScenes}>Full</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}