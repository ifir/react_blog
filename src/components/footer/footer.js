var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
module.exports = React.createClass({
	render : function (){
		return (
			<footer className="container footer">
				<nav>
					<ul className="clearfix text-center">
						<li onClick={this.props.handleClick} className="active"><Link to="/home/23456">首页</Link></li>
						<li onClick={this.props.handleClick}><Link to="/message">消息</Link></li>
						<li onClick={this.props.handleClick}><Link to="/login/?name=fir">我的</Link></li>
					</ul>
				</nav>
			</footer>
		)
	}
})