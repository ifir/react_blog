var React = require('react');

module.exports = React.createClass({
	render:function(){
		return (
			<div>
				{
					//获取url上的地址this.props.location.pathname
				}
				<p>地址:{this.props.location.pathname }</p>
			</div>
		)
	}
})