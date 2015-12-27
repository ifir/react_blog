var React = require('react');

module.exports = React.createClass({
	render : function (){
		return (
			<div>
				<h1>登陆</h1>
				<input type="text" placeholder="请输入用户名" /><br/>
				<input type="password" placeholder="请输入密码" /><br/>
				<input type="button"  value="登陆" />
			</div>
		)
	}
})