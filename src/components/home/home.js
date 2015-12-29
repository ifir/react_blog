var React = require('react');

module.exports = React.createClass({
	getInitialState:function(){
		return {message:''}
	},
	componentDidMount:function() {
    // from the path `/inbox/messages/:id`
	    var id = this.props.params.id

	      this.setState({ message: id })

	},
	render:function(){
		return (
			<div>
				<h1>我是首页</h1>
				<p>aa{this.state.message}</p>
			</div>
		)
	}
})