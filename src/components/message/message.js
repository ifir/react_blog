var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	componentDidMount : function(){
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
			<div ref="box" className="message-box opacityup-enter">
				{
					//获取url上的地址this.props.location.pathname
				}
				<p>地址:{this.props.location.pathname }</p>
				<h2>标签页切换小Demo</h2>
			</div>
		)


	}
})