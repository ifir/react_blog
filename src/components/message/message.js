var React = require('react');
var ReactDOM = require('react-dom');


var TabControl = React.createClass({
	getInitialState: function(){
		return {
			currentIndex: 0,
			tabnav:[{title:'标题一', content:'内容一'},
					{title:'标题二', content:'内容二'},
					{title:'标题三', content:'内容三'}
			],
		}
	},
	handleClick:function(){
		this.setState({
			currentIndex: 2
		})
	},
	render:function(){
		var navmap = this.state.tabnav.map(function(arr, index){
			//return (<span key={index} onClick={this.handleClick}>{arr.title}</span>)
		return (<Spannav handleClick={this.handleClick} key={index} titles={arr.title} />)
		});
		return (
			<div>
				{navmap}
				<p onClick={this.handleClick}>{this.state.currentIndex}</p>
				<p onClick={this.handleClick}>{this.state.currentIndex}</p>
				<p onClick={this.handleClick}>{this.state.currentIndex}</p>
			</div>
		)
	}
});

var Spannav = React.createClass({
	render:function(){
		return (
			<span key={this.props.key} onClick={this.props.handleClick}>{this.props.titles}</span>
		)
	}
})

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
				<TabControl />
			</div>
		)


	}
})