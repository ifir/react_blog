var React = require('react');
var Article = require('../article/article.js');
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
			<div className={this.props.classOpacity}>
				<h1>我是首页,url:{this.state.message}</h1>
				<Article />
				<p onClick={this.props.handleClick}>呵呵{this.props.animate}</p>
			</div>
		)
	}
})