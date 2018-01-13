import React from 'react';
import ReactDOM from 'react-dom';
import logo from './home.png';
import './App.css';
import Header from './Components/Header';
import Profile from './Components/Profile';
import Navbar from './try';
import Trend from './Components/trends';
import Timeline from './Components/timeline';
import IconMenuExampleSimple from './timeline';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class App extends React.Component {
	render(){
		return(
			<MuiThemeProvider>
				<IconMenuExampleSimple />
			</MuiThemeProvider>
		)
	}
}	 
//var x=()=>"hello"
export default App
//export default top
