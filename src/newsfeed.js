import React from 'react';
import Paper from 'material-ui/Paper';
import Card from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';

const Paperstyle={
	height:10,width:590
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
};

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
};

const center = () => (
	<div className="center" style={{height:60,width:590,marginLeft:400}}>
		<Paper style={{height:60,width:590,marginTop:65,backgroundColor:'#F0F0F0'}} zdepth={0}>
			<Avatar src="https://pbs.twimg.com/profile_images/722751398853500929/jnYN1viJ_bigger.jpg" size={30} style={{marginTop:'15px',marginLeft:'15px'}}/>
			<Card style={{height:20,width:515,marginLeft:55,marginTop:-43}} expandable={true}>
				<Paper>
					<TextField
						underlineShow = {false}
						hintText="Search Twitter"
						hintStyle={hintStyle}
						inputStyle={inputStyle}
					/>
					<img src="./search.png" style={imgStyle1}/>
				</Paper>	
			</Card>
		</Paper>
	</div>
)

export default center;