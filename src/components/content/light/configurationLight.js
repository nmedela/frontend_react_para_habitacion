import React, { useEffect } from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListProgram from './../../utils/listProgram'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import StepperProgram from '../../utils/stepperProgram';
import LightService from './../../../services/lightService'

// import Paper from '@material-ui/core/Paper';
// import DialogLight from './../../utils/dialogLight'

const useStyles = makeStyles(theme => ({
    buttonMain: {
        fontSize: 70,
        height: '150px',
        width: '150px',
        border: '2px solid rgb(140,140,140)',
        cursor: 'none'
    },
    buttonConfirm: {
        width: '50px',
    },
    root: {
        flexGrow: 1,
        backgroundColor: 'rgb(200,200,200)',
        height: '288px'

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
const interval= 0
export default function ConfigurationLight() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [listProgram, setListProgram] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true)

    useEffect(() => {
      if(isLoading){
          getListProgram()
      }
    })

    const handleChange = event => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
        refreshList()
        
    };
    const refreshList =()=>{
        setIsLoading(true)
        getListProgram()

    }
    const getListProgram = () => {
        if(isLoading){
            return service.getOptions()
            .then((newList)=>{
                setListProgram(newList)
                setIsLoading(false)
            })
        }
    }

    const handleOpen = () => {
        setOpen(true);
    };
    const dialog = () => {
        return (<DialogLight />)
    }
    return (
        <div>
            <div className={classes.root}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={4} >
                        <Grid item xs={12} sm={12} >
                            <div className={classes.paperSelect}>
                                <DialogLight handleClose={handleClose} />
                            </div>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} sm={8} >
                        <div className={classes.paperScenes}>
                            {!isLoading ? <ListProgram handleRefreshList={refreshList} list={listProgram} /> : 'No hay programas'}
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
function PaperComponent(props) {
    return (
        <Paper style={{ width: '750px', height: '480px' }} {...props} />
    );
}
export function DialogLight(props) {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        props.handleClose()
    }
    return (
        <div >
            <Fab className={classes.buttonMain} onClick={handleClickOpen} color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}

            // aria-labelledby="draggable-dialog-title"
            >
                <DialogContent>
                    <DialogContentText>
                        <StepperProgram handleClose={handleClose} />
                    </DialogContentText>
                </DialogContent>
                {/* <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Cancel
            </Button>
                    <Button onClick={handleClose} color="primary">
                        Aceptar
            </Button>
                </DialogActions> */}
            </Dialog>
        </div>
    );
}