import React, {Component} from 'react';
import MainLayout from './MainLayout.jsx';
import EntryPortal from './EntryPortal.jsx';

/* Import Custom CSS */
import './styles/main.css';

import swal from 'sweetalert';
import 'sweetalert/dist/sweetalert.css';
/* Fix to change alerts to fit theme */
import './styles/swaloverride.css';


export default class App extends Component {
	constructor(){
		super();
		this.state = {
			loggedIn: Meteor.userId() === null ? false : true,
		};
		this.loggedInChange = this.loggedInChange.bind(this);
	}
	loggedInChange(flag){
		/* Tell out app that we're changing our logged in state and that Meteor knows we're logged in / out and need to change views 
		* Methods that log the user in should provide true as a parameter or false if they're logging out
		*/
		this.setState({
			loggedIn: flag
		});
	}
	/* Render method should only switch our logged in state */
	render(){
		return(
			<div className="wrapper">
			{this.state.loggedIn ?
				<MainLayout loggedInChange={this.loggedInChange}/>
				:
				<EntryPortal loggedInChange={this.loggedInChange}/>
			}
			</div>
			);
	}
}
