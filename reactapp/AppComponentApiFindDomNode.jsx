import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
	constructor(){
		super();
		this.findDomNodeHandler=this.findDomNodeHandler.bind(this);
	}
	findDomNodeHandler(){
		var myDivRed=document.getElementById('myDivRed');
		ReactDOM.findDOMNode(myDivRed).style.color='red';

		var myDivGreen=document.getElementById('myDivGreen');
		ReactDOM.findDOMNode(myDivGreen).style.color='green';
	}
	findDomNodeHandlerOriginal(){
		var myDivRed=document.getElementById('myDivRed');
		ReactDOM.findDOMNode(myDivRed).style.color='black';

		var myDivGreen=document.getElementById('myDivGreen');
		ReactDOM.findDOMNode(myDivGreen).style.color='black';
	}
	render(){
		return(
			<div>
				<button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
				<div id = "myDivRed">MY RED NODE</div>
				<div id = "myDivGreen">MY GREEN NODE</div>
				<button onClick = {this.findDomNodeHandlerOriginal}>Original DOME NODE</button>
			</div>
		);
	}
}
export default App;