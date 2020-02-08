import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



const ONOFF = withStyles(theme => ({
    root: {
        width: 100,
        height: 56,
        padding: 0,
        margin: theme.spacing(4),
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(45px)',
            color: theme.palette.common.white,
            '& + $track': {
                backgroundColor: 'rgb(0,200,00)',
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            border: '1px solid ',
        },
    },
    thumb: {
        width: 54,
        height: 54,
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[800],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))(({ classes, ...props }) => {
    return (
        <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    );
});


export default function Onoff() {
    const [state, setState] = React.useState({
        checkedB: true,
      
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    return (
    
            <FormControlLabel
                control={
                    <ONOFF
                        checked={state.checkedB}
                        onChange={handleChange('checkedB')}
                        value="checkedB"
                    />
                }
                label=""
            />
            
    );
}