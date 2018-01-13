import React from 'react';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import tweet from './Twitter.png';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import {blue500, blue900, red500, greenA200} from 'material-ui/styles/colors';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Card from 'material-ui/Card';

const style = {
  height: 50,
  width: '100%', 	
  backgroundColor: 'blue',
  zIndex:1,
  position: 'fixed',
  display: 'inline-block',
  left:0,
  top:0,
  overflow: 'hidden',
};

const iconStyles = {
	paddingLeft:10,
};

const left = {
	marginLeft: 64,
};

const textit = {
	paddingLeft: 4,
	hover: {backgroundColor: {blue500}},
};

const center = {
	marginRight:'12%',
	width: 25,
    height: 50,
	marginLeft:'12%',
};

const right = {
	marginRight: '70px',
    marginLeft: '0px',
	marginBottom: '7px',
};

const hintStyle={
    color: '#6e7f8d',
    display: 'inline-block',
	paddingLeft:10,
	paddingBottom:5,
    fontSize:15	,
};

const inputStyle={
    position:'realtive',
    width: 140,
	display: 'inline-block',
    height: 20,
    paddingLeft:10,
	paddingTop: 9,
    fontSize:15,
}

const Paperstyle={
    width : 180,
    height: 40,
    borderRadius: 20,
    backgroundColor:'white'
}

const imgStyle1 = {
    width: 19,
    height: 18,
    display: 'inline-block',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    marginLeft: 150,
    marginTop: 15,
}

const st={
	margin:10,
};

const PaperExampleRounded = () => (
	<Paper style={style} zDepth={2} >
		<Toolbar>
			<ToolbarGroup style={left}>
				<FontIcon className="material-icons" style={iconStyles} color='#00897B' hoverColor={blue500}>home</FontIcon>
				<a style={textit}>Home</a>
				<FontIcon className="material-icons" style={iconStyles} color='#00897B' hoverColor={blue500}>flash_on</FontIcon>
				<a style={textit}>Moments</a>
				<FontIcon className="material-icons" style={iconStyles} color='#00897B' hoverColor={blue500}>notifications</FontIcon>
				<a style={textit}>Notifications</a>
				<FontIcon className="material-icons" style={iconStyles} color='#00897B' hoverColor={blue500}>mail_outline</FontIcon>
				<a style={textit}>Messages</a>
			</ToolbarGroup>
			<ToolbarGroup style={center}>
				<img width='25px' height='25px' src={tweet}/>
			</ToolbarGroup>
			<ToolbarGroup style={right}>
				<Paper style={Paperstyle}>
					<TextField
						underlineShow = {false}
						hintText="Search Twitter"
						hintStyle={hintStyle}
						inputStyle={inputStyle}					
					/>
					<img src="./search.png" style={imgStyle1} />
				</Paper>
				<Avatar
					src="https://pbs.twimg.com/profile_images/722751398853500929/jnYN1viJ_bigger.jpg"
					size={30}
					style={st}
				/>
				<FlatButton label="Tweet" hoverColor={blue900} backgroundColor={blue500} round/>
			</ToolbarGroup>
		</Toolbar>
	</Paper>
);

export default PaperExampleRounded;