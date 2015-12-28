var React = require('react');
//var ajax = require('reqwest');
module.exports = React.createClass({
	handleClick:function(){
		$.ajax({
			url:'/login',
			type:'POST',
			dataType: 'json',
			data: $('form').serialize(),
			success:function(res){

			},
			error: function (err) {

			}
		})

	},
	render:function(){
		return (
			<form className={"hide " + this.props.formDisplay}>
				<h3>表单</h3>
				<input name="user" type="text" />
				<input name="psd" type="password" />
				<br />
				<br />
				<br />
				<input type="button" className="btn btn-default" onClick={this.handleClick} value="提交" />
			</form>
		)
	}
})