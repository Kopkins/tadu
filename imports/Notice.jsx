import React from 'react';

export default class Notice extends React.Component {
	render(){
		return (<div>{this.props.data.type}</div>)
	}
}