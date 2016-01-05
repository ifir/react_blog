var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
	render : function (){
		return (
			<footer className="container footer">
				<nav>
					<ul className="clearfix text-center">
						<li className="active"><Link to="/home">首页</Link></li>
						<li><Link to="/message">消息</Link></li>
						<li><Link to="/login">发表</Link></li>
					</ul>
				</nav>
			</footer>
		)
	}
})