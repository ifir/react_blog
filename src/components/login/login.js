var React = require('react');
var Btn = require('./btn.js');
var Form = require('./form.js');
module.exports = React.createClass({
	getInitialState:function(){
		return {
			display: '',
			msg:this.props.location.query.name,
			mounted:false
		}
	},
	//首次渲染后改变状态
	componentDidMount : function(){
		this.setState({mounted : true});
	},
	handleClick:function(){
		this.setState({
			display: this.state.display == ''? 'show' : ''
		})
	},
	render : function (){
		setTimeout(function(){
			return (
				<div className={"opacityup-enter"+{this.props.}}>
					<p>地址:{this.state.msg}</p>
					<h2>{this.props.location.query.name}</h2>
					<Form formDisplay={this.state.display} />
					<Btn handleClick={this.handleClick}/>
				</div>
			)
		},500)
	}
})