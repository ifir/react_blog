var React = require('react');

var Login = React.createClass({
	render : function (){
		return (
			<div>
				<h2>我是第二个页面</h2>
				{this.props.children}
			</div>
		)
	}
})

module.exports = Login;
