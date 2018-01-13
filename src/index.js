import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tryj from './try';
import Apppp from './prof';
import Feed from './newsfeed';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import registerServiceWorker from './registerServiceWorker';
 class App extends React.Component {
	render(){
		return(
			<MuiThemeProvider>
				<Tryj/>
				<Feed/>
				<Apppp/>
			</MuiThemeProvider>
		)
	}
}
ReactDOM.render(< App/>, document.getElementById('root'));
registerServiceWorker();