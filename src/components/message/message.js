var React = require('react');

module.exports = React.createClass({
	render:function(){
		return (
			<div>
				<p>地址:{this.props.location.pathname }</p>
			</div>
		)
	}
})