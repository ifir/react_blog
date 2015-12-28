var React = require('react');
var Btn = require('./btn.js');
var Form = require('./form.js');
module.exports = React.createClass({
	getInitialState:function(){
		return {
			display: ''
		}
	},
	handleClick:function(){
		this.setState({
			display: this.state.display == ''? 'show' : ''
		})
	},
	render : function (){
		return (
			<div>
				<Form formDisplay={this.state.display} />
				<Btn handleClick={this.handleClick}/>
			</div>
		)
	}
})