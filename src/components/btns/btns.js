var React = require('react');

var Buttons = React.createClass({
	getInitialState: function(){
		return {
			num : 0
		}
	},
	handleClick:function(){
		this.setState({
			num: this.state.num += 1
		})
	},
	render:function(){
		return (
			<div>
				<input type="button" value="点我" onClick={this.handleClick} />
				<p>你点了{this.state.num}下</p>
			</div>
		)
	}
})

module.exports = Buttons;