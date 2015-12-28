var React = require('react');

module.exports = React.createClass({
	render:function(){
		return (
			<form className={"hide " + this.props.formDisplay}>
				<h3>表单</h3>
				<input type="text" />
			</form>
		)
	}
})