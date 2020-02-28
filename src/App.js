import React from 'react';
// import './App.css';
import Global from './components/menu/global'
import Sound from './components/content/sound/sound'
import Light from './components/content/light/light';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import DenseAppBar from './components/menu/appBar'

//se encuentran las rutas
import pathIndex from './config'
import MainLight from './components/content/light/main';
import Scenes from './components/content/light/scenes';
import ConfigurationLight from './components/content/light/configurationLight';

const styleEncabezado = {
  backgroundColor: "black",
  height: '100px'
}

function App() {

  return (
    <div>
      <Router>
        <div style={styleEncabezado}>
          <Global />
        </div>
        <div>
          <Switch>
            <Redirect from='/' exact to='/light' />
            <Route path={pathIndex[0]} component={Light} exact />
            <Route path={pathIndex[1]} component={Sound} exact />
          </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;
