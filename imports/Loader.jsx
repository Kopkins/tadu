import React, {Component} from 'react';

const Loader = (props)=>{
	return(
		<div className="animated fadeIn" style={{width: props.width !== undefined ? props.width : "100%", height: "100%", position: "fixed", top: 0, backgroundColor: "#242424", color: "#FFF"}}>
		<div className="loader-inner ball-grid-pulse" style={{position: "relative", top: "calc(50% - 4.5em)", margin: "auto", width: '90px'}} >
		<div style={{animationName: 'ball-grid-pulse', animationIterationCount : 'infinite', animationDuration: '1.41s', animationDelay: '0.7s'}}></div>
		<div style={{animationName: 'ball-grid-pulse', animationIterationCount : 'infinite', animationDuration: '1.41s', animationDelay: '0.71s'}}></div>
		<div style={{animationName: 'ball-grid-pulse', animationIterationCount : 'infinite', animationDuration: '1.41s', animationDelay: '0.7s'}}></div>
		<div style={{animationName: 'ball-grid-pulse', animationIterationCount : 'infinite', animationDuration: '1.41s', animationDelay: '0.71s'}}></div>
		<div style={{animationName: 'ball-grid-pulse', animationIterationCount : 'infinite', animationDuration: '1.41s', animationDelay: '0.69s'}}></div>
		<div style={{animationName: 'ball-grid-pulse', animationIterationCount : 'infinite', animationDuration: '1.41s', animationDelay: '0.7s'}}></div>
		<div style={{animationName: 'ball-grid-pulse', animationIterationCount : 'infinite', animationDuration: '1.41s', animationDelay: '0.71s'}}></div>
		<div style={{animationName: 'ball-grid-pulse', animationIterationCount : 'infinite', animationDuration: '1.41s', animationDelay: '0.0s'}}></div>
		<div style={{animationName: 'ball-grid-pulse', animationIterationCount : 'infinite', animationDuration: '1.41s', animationDelay: '0.0s'}}></div>
		<div style={{animationName: 'ball-grid-pulse', animationIterationCount : 'infinite', animationDuration: '1.41s', animationDelay: '0.73s'}}></div>
		<div style={{animationName: 'ball-grid-pulse', animationIterationCount : 'infinite', animationDuration: '1.41s', animationDelay: '0.0s'}}></div>
		<div style={{animationName: 'ball-grid-pulse', animationIterationCount : 'infinite', animationDuration: '1.41s', animationDelay: '0.72s'}}></div>
		<div style={{animationName: 'ball-grid-pulse', animationIterationCount : 'infinite', animationDuration: '1.41s', animationDelay: '0.7s'}}></div>
		<div style={{animationName: 'ball-grid-pulse', animationIterationCount : 'infinite', animationDuration: '1.41s', animationDelay: '0.0s'}}></div>
		<div style={{animationName: 'ball-grid-pulse', animationIterationCount : 'infinite', animationDuration: '1.41s', animationDelay: '0.69s'}}></div>
		<div style={{animationName: 'ball-grid-pulse', animationIterationCount : 'infinite', animationDuration: '1.41s', animationDelay: '0.68s'}}></div>
		
		</div>
		</div>
		);
};
export default Loader;