import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import LightService from './../../services/lightService'
import moment from 'moment'
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
        width: "500px"
    },
    title: {
        margin: theme.spacing(1, 0, 0),
    },
    icon: {
        fontSize: 5
    },
    button: {
        height: 30
    },

}));
const service = new LightService()

export default function ListProgram(props) {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(true);

    const handleDelete = (e) => {
        service.deleteOption(e.target.value).then(() => {
            props.handleRefreshList()
        })
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" className={classes.title}>
                        Configuraciones
          </Typography>
                    <div className={classes.demo}>
                        <List dense={dense}>

                            {props.list.map((e) => {

                                return (<ListItem  >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <FolderIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        // primary={"Se ejecutará " + e.frecuency.title + ' a las ' + e.time  }
                                        secondary={secondary ? e.frecuency.title + ' a las ' + e.time +' -' + e.action.title + '-' + e.light.title : null}
                                    />
                                    <ListItemSecondaryAction>
                                        <Button
                                        
                                            value={e.id}
                                            onClick={handleDelete}
                                            variant="contained"
                                            color="secondary"
                                            className={classes.button}
                                        // startIcon={<DeleteIcon />}
                                        > </Button>

                                    </ListItemSecondaryAction>
                                </ListItem>)
                            })}
                        </List> 
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}