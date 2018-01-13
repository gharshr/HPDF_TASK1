import React from 'react';
import logo from '../home.png';
import button from './tweet-button.png';
import './Header.css';

class Header extends React.Component {
	render(){
		return(
		<div className="top">
			<div className="header-component left">
				<div className="navbar-component navbar-logo">
					<img src={logo} className="home-pic"></img>
				</div>
				<div className="navbar-component">
					<a className = "navbar-link" href="#home">Home</a>
				</div>
				<div className="navbar-component">
					<a className = "navbar-link" href="#contact">Notifications</a>
				</div>
				<div className="navbar-component">
					<a className = "navbar-link" href="#about">Messages</a>
				</div>
			</div>
			<div className="header-component logo">
				<img src="https://png.icons8.com/color/50/000000/twitter.png"></img>
			</div>
			<div className="header-component right">
				<input type="texbox" className="search-box" name="search" placeholder="Search Twitter"></input>
				<img src = {button} className="tweet-button" />
			</div>
		</div>
		)
	}
}

export default Header;
