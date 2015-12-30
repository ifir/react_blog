var React = require('react');

module.exports = React.createClass({
	componentDidMount : function(){
		setTimeout(function(){
			$('.opacityup-enter').addClass('opacityup-enter-active');
		},10)
	},
	render:function(){
		return (
			<div className="message-box opacityup-enter">
				{
					//获取url上的地址this.props.location.pathname
				}
				<p>地址:{this.props.location.pathname }</p>
			</div>
		)


	}
})