import React from 'react'
import { Link } from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import PlayCircleFilledSharpIcon from '@material-ui/icons/PlayCircleFilledSharp';
import pathIndex from './../../config'
import './../../App.css'

const styleEncabezado = {
  backgroundColor: "orange",
  height: '100px',
  cursor: 'none'
}

class Global extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 0,

    }
  }
  componentDidMount() {
    this.setState({ value: pathIndex.findIndex(e => e === window.location.pathname) })
  }
  render() {
    return (

      <BottomNavigation
        value={this.state.value}
        onChange={(event, newValue) => {
          this.setState({ value: newValue });
        }}
        showLabels
        style={styleEncabezado}

      >
        <BottomNavigationAction
          label="Luces"
          style={{ cursor: 'none' }}
          icon={<Brightness5Icon
            style={{ fontSize: '50px', cursor: 'none' }} />}
          component={Link} to={pathIndex[0]} />
        <BottomNavigationAction
          label="Audio"
          style={{  cursor:'none'}}
          icon={<PlayCircleFilledSharpIcon
            style={{ fontSize: '50px', cursor: 'none' }} />}
          component={Link} to={pathIndex[1]} />
      </BottomNavigation>


    )
  }
}

export default Global
