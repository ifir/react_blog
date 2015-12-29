var React = require('react');

module.exports = React.createClass({
	render:function(){
		return (
			<article className="article-box">
				<section className="article-info">
					<div className="clearfix">
						<div>
							<img src="" alt="" />
						</div>
						<div>
							<h3></h3>
							<p></p>
						</div>
					</div>
				</section>
				<section className="article-info">
					<div ></div>
				</section>
				<section className="article-img">
					<div>
						<img src="" alt="" />
					</div>
				</section>
				<footer className="article-footer">
				</footer>
			</article>
		)
	}
})