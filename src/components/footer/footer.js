var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
module.exports = React.createClass({
	render : function (){
		return (
			<footer className="container footer">
				<nav>
					<ul className="clearfix text-center">
						<li className="active"><Link to="/">首页</Link></li>
						<li><Link to="/">消息</Link></li>
						<li><Link to="/login">我的</Link></li>
					</ul>
				</nav>
			</footer>
		)
	}
})