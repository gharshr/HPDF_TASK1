import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import './prof.css';
const left = {
	marginLeft:100,
	marginTop:-120,
};

const Profilepage = () => (
	<div className="left">
		<Card style={{height:214, marginTop:60}}>
			<CardHeader
				style={{backgroundColor:'blue', height:'95px'}}
			/>
			<Avatar src="https://pbs.twimg.com/profile_images/722751398853500929/jnYN1viJ_bigger.jpg"  size={70} style={{float: 'left' ,marginTop:'-30px', position: 'absolute', boxShadow: 'inset 0 0 0 12px white', marginLeft: 9, padding: 2,}}/>
			<CardMedia>
				<CardTitle title={<a href='#harsh'>Harsh Gorakhia</a>} subtitle={<a href='#harsh'>@GorakhiaHarsh</a>} style={{padding:'0px 0px 0px 95px'}} titleStyle={{fontSize:'22px', fontWeight: 'bold', fontcolor: 'black'}}/>
				<CardText>
					<span style={{ position:'absolute',color: '#657786', fontSize: 15, fontWeight:'bold',paddingLeft:15 }}>
					<a>Tweets</a> &nbsp;&nbsp;&nbsp; <a>Following</a> &nbsp;&nbsp;&nbsp; <a>Followers</a>
					</span>
					<br/>
					<span style={{ position: 'absolute', color: '#03A9F4', marginBottom: '10px'}}>
					<span style={{ paddingLeft: 17, cursor: 'pointer' }}>50</span> 
					<span style={{ paddingLeft: 25,cursor:'pointer' }}> 408</span> 
					<span style={{ paddingLeft: 36,cursor:'pointer' }}>10K</span>
					</span>
				</CardText>
			</CardMedia>
		</Card>
		<Card style={{height:452, marginTop:10}}>
			<CardHeader style={{padding:'0px'}}>
				<CardText style={{paddingTop:'0px',fontWeight:'bold', fontSize:16}}>Trends for you |
					<span style={{ paddingLeft: 5, cursor: 'pointer' ,fontWeight:'normal', fontSize:12}}>Change</span>
				</CardText>
			</CardHeader>
			<CardMedia>
				<CardText style={{marginLeft:'-22px',marginTop:'-18px', padding:0}}>
				<ul>
					<dl>
						<a href='#kesari'>
							<span>#kesari</span><br/>
						</a>
						23.1K tweets
					</dl>
					<dl>
						<a href='#HelmetNews'>
							<span>#HelmetNews</span><br/>
						</a>
						245 tweets
					</dl>
					<dl>
						<a href='#LamborghiniUrus'>
							<span>#LamborghiniUrus</span><br/>
						</a>
						2162 tweets
					</dl>
					<dl>
						<a href='#HappyBirthdayDravid'>
							<span>#HappyBirthdayDravid</span><br/>
						</a>
						12.1K tweets
					</dl>
					<dl>
						<a href='#LalBahadurShastri'>
							<span>#LalBahadurShastri</span><br/>
						</a>
						@sureshprabhu is tweeting about this.
					</dl>
					<dl>
						<a href='#BjpFDIflipflop'>
							<span>#BjpFDIflipflop</span><br/>
						</a>
						4162 tweets
					</dl>
					<dl>
						<a href='#ThursdayThoughts'>
							<span>#ThursdayThoughts</span><br/>
						</a>
						9794 tweets
					</dl>
					<dl>
						<a href='#YaadonKiBahaar'>
							<span>#YaadonKiBahaar</span><br/>
						</a>
						3858 tweets
					</dl>
					<dl>
						<a href='Rahul Dravid'>
							<span>Rahul Dravid</span><br/>
						</a>
						16.3K tweets						
					</dl>					
				</ul>
				</CardText>
			</CardMedia>
		</Card>
	</div>
);
export default Profilepage;