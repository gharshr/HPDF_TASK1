import React from 'react';
import Avatar from 'material-ui/Avatar';
import './Profile.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import tweet from './image.jpeg';
const style = {margin: 10,maxheight:"50%", maxwidth:"50%",align:"center"};

const titleStyle={
    fontSize:13,
    fontWeight:'bold',
    paddingLeft:20
}
const subtitleStyle={
    fontSize: 11,
    paddingLeft:20
}
const avatarStyle={
	float: 'left',
	position: 'absolute',
    marginTop: 80,
    marginLeft: 5,
    padding: 2,
    boxShadow: 'inset 0 0 0 12px white'
}
class Profile extends React.Component{
	render(){
		return(
			<Card style={{ width: '213px',height:'218px', marginLeft: '135px', marginTop: '60px',display:'inline-block',float:'left'}}>	
			<img width="213px" height="100px" style={{  position: 'absolute', backgroundColor: 'blue'}} />
			<Avatar src="https://pbs.twimg.com/profile_images/722751398853500929/jnYN1viJ_bigger.jpg" size='48px' style={avatarStyle} />
			<div style={{paddingTop:90}}>
				<CardHeader
				style={{marginLeft:20}}
				title={<a>Harsh Gorakhia</a>}
				subtitle="@GorakhiaHarsh"
				titleStyle={titleStyle}
				subtitleStyle={subtitleStyle}/>
			<span style={{ position:'absolute',color: '#657786', fontSize: 10, fontWeight:'bold',paddingLeft:15 }}>
			<a>Tweets</a> &nbsp;&nbsp;&nbsp; <a>Following</a> &nbsp;&nbsp;&nbsp; <a>Followers</a>
			</span>
			<br/>
			<span style={{ position: 'absolute', color: '#03A9F4', marginBottom: '10px'}}>
                <span style={{ paddingLeft: 17, cursor: 'pointer' }}>50</span> <span style={{ paddingLeft: 25,cursor:'pointer' }}> 408</span> 
                <span style={{ paddingLeft: 29,cursor:'pointer' }}>10K</span>
			</span>
			</div>
			{
					/* <div className="toplevel">
				<div className="upper">
					
				</div>
				<div className="lower"> 	 
						
						<Avatar
							src="https://pbs.twimg.com/profile_images/722751398853500929/jnYN1viJ_bigger.jpg"
							size={50}
							style={style}
							align={"middle"}
						/>
						<a href="#">Harsh Gorakhia</a><br/>
						<a href="#">@Gorakhia Harsh</a>
						<div className="gs"></div>
						<a href="#">Tweets</a>
						<a href="#">Following</a>
						"Tweets Following Followers"<br/>
						"6      120        38"
				</div>
				</div> */
			}
			</Card>
		)	
	}
}

export default Profile