var React = require('react');
var Article = require('../article/article.js');
module.exports = React.createClass({
	getInitialState:function(){
		return {message:''}
	},
	componentDidMount:function() {
	    var id = this.props.params.id

	      this.setState({ message: id })
	      setTimeout(function(){
	      		$('.opacityup-enter').addClass('opacityup-enter-active');
	      },10)
	},
	render:function(){
		return (
			<div className="home-box opacityup-enter">
				<h1>我是首页,url:{this.state.message}</h1>
				<Article />
				<p className={this.props.classOpacity}>？？？？？？？</p>
				<p onClick={this.props.handleClick}>点我{this.props.animate}</p>
			</div>
		)
	}
})