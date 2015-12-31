var React = require('react');
var ReactDOM = require('react-dom');
var Btn = require('./btn.js');
var Form = require('./form.js');
var Login = React.createClass({
	getInitialState:function(){
		return {
			display: '',
			msg:this.props.location.query.name,
		}
	},
	handleClick:function(){
		this.setState({
			display: this.state.display == ''? 'show' : ''
		})
	},
	componentDidMount:function(){
		var box = ReactDOM.findDOMNode(this.refs.box);
		timer = setTimeout(function(){
			//$('.opacityup-enter').addClass('opacityup-enter-active');
			box.classList.add('opacityup-enter-active');
		},10);
	},
	componentWillUnmount:function(){
		clearTimeout(timer);
	},
	render : function (){

		return (
			<div ref="box" className="login-box opacityup-enter">
				<p>地址:{this.state.msg}</p>
				<h2>{this.props.location.query.name}</h2>
				<Form formDisplay={this.state.display} />
				<Btn handleClick={this.handleClick}/>
			</div>
		)
	}
})

module.exports = Login;