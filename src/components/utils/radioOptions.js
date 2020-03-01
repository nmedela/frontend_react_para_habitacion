import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(3),
    },
    formControlLabel:{
        height:'50px'
    }
}));

export default function RadioButtonsGroup(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(props.options[0]);

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (

        <div>
            <FormControl component="fieldset" className={classes.formControl}>
                <RadioGroup value={value} onChange={handleChange}>
                    {props.options.map(e => {
                        return (
                            <FormControlLabel className={classes.formControlLabel} value={e} control={<Radio />} label={e} />
                        )
                    }

                    )}
                </RadioGroup>
            </FormControl>

        </div>
    );
}