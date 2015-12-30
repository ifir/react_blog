var React = require('react');

module.exports = React.createClass({
	getInitialState:function(){
		return {
			mounted:false
		}
	},
	componentDidMount : function(){
		setTimeout(function(){
			$('.opacityup-enter').addClass('opacityup-enter-active');
		},10)
	},
	render:function(){
		return (
			<div className="opacityup-enter" ref="box">
				{
					//获取url上的地址this.props.location.pathname
				}
				<p>地址:{this.props.location.pathname }</p>
			</div>
		)


	}
})