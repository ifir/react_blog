var React = require('react');
var ReactDOM = require('react-dom');
var Article = require('../article/article.js');
module.exports = React.createClass({
	componentDidMount:function() {
	  // var id = this.props.params.id

   //    this.setState({ message: id });

      var box = ReactDOM.findDOMNode(this.refs.box);
		timer = setTimeout(function(){
			//$('.opacityup-enter').addClass('opacityup-enter-active');
			box.classList.add('opacityup-enter-active');
		},10);
	},
	componentWillUnmount:function(){
		clearTimeout(timer);
	},
	render:function(){
		return (
			<div ref="box" className="home-box opacityup-enter">
				<h1>我是首页,url:</h1>
				<Article />
				<Article />
			</div>
		)
	}
})