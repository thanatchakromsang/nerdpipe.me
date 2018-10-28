import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import red from '@material-ui/core/colors/red'
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import { NavigationBarContainer as NavigationBar } from '@containers/NavigationBar'
import { LocationProvider } from '@contexts/Location'

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
})

import './App.css'

const Index = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Users = () => <h2>Users</h2>

class App extends React.Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <LocationProvider>
            <NavigationBar />
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
          </LocationProvider>
        </MuiThemeProvider>
      </Router>
    )
  }
}

export default App
