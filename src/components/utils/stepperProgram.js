import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioButtonsGroup from './../utils/radioOptions'
import SetTimeContent from './../content/light/setTimeContent'
import LightService from './../../services/lightService'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));
const service = new LightService()

const getSteps = () => {
    return service.getSteps().then((res) => {
        return res
    })
}

// function getSteps() {

//     return ['Seleccionar frecuencia', 'Elegir tiempo', 'Modo de accionar', 'Luz'];
// }

function getStepContent(step, label) {
    // var titulos= label.map(e =>e.list.title )
    switch (step) {
        case 0:
            var titulos = []
            label.map((e) => { (titulos.push(e.title)) })
            return (
                <RadioButtonsGroup options={titulos} />
            );
        case 1:
            var titulos = []
            label.map((e) => { (titulos.push(e.title)) })
            return (
                < RadioButtonsGroup options={titulos} />
            )
        case 2:
            var titulos = []
            label.map((e) => { (titulos.push(e.title)) })
            return (
                <RadioButtonsGroup options={titulos} />
            )

        case 3:
            var titulos = []
            label.map((e) => { (titulos.push(e.title)) })
            return (
                <SetTimeContent />
            )

        default:
            return 'Unknown step';
    }
}


export default function StepperProgram() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [isLoading, setIsLoading] = React.useState(true);
    const [steps, setSteps] = React.useState(null);

    useEffect(() => {
        if (isLoading) {

            var valor = getSteps()
            valor.then((res) => {
                setSteps(res)
                setIsLoading(false)

            })
        }

    })
    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        !isLoading && <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="horizontal">
                {steps.map((label, index) => (
                    <Step key={label.title}>
                        <StepLabel>
                            {/* { label.title } */}
                        </StepLabel>
                        <StepContent>
                            <Typography>{getStepContent(index, label.list)}</Typography>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Back
                  </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>Listo Papuni</Typography>
                    {/* <Button onClick={handleReset} className={classes.button}>
                        Reset
          </Button>
                    <Button onClick={handleClose} className={classes.button}>
                        ok
          </Button> */}
                </Paper>
            )}
        </div>
    );
}