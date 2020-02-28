import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ConfigurationLight from '../content/light/configurationLight';
import MainLight from '../content/light/main';
import Scenes from '../content/light/scenes';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div>
            {value === index && <Box>{children}</Box>}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'theme.palette.background.paper',

    },
}));
const styleTab = {
    fontSize: '20px',
    width: '300px',
    backgroundColor: 'brown',
    height: '90px'
}
export default function MenuLight() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} centered onChange={handleChange} fullWidth>
                    <Tab label="Principal"  style={styleTab} />
                    <Tab label="Escenas"  style={styleTab} />
                    <Tab label="Programar" style={styleTab} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <MainLight />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Scenes />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ConfigurationLight />
            </TabPanel>
        </div>
    );
}