var React = require('react');
// var ReactRouter = require('react-router');
// var Link = ReactRouter.Link;
module.exports = React.createClass({
	render : function (){
		return (
			<footer className="container footer">
				<nav>
					<ul className="clearfix text-center">
						<li className="active"><a href="#!/home">首页</a></li>
						<li><a href="#!/message">消息</a></li>
						<li><a href="#!/login">发表</a></li>
					</ul>
				</nav>
			</footer>
		)
	}
})