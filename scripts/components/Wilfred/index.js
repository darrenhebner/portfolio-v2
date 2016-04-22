import React from 'react';
import TweenMax from 'gsap';
import ReactTransitionGroup from 'react-addons-transition-group';

var tweenLength = 1;

var Wilfred = React.createClass({
	componentWillAppear: function(callback) {
        var container = this.refs.container;

        TweenMax.fromTo(container, tweenLength , {y:100, opacity:0}, {y:0, opacity: 1, onComplete: callback, onCompleteScope: this, delay: tweenLength, ease:Expo.easeOut});
	},
	componentWillEnter: function(callback) {
        var container = this.refs.container;

        TweenMax.fromTo(container, tweenLength, {y:100, opacity:0}, {y:0, opacity: 1, onComplete: callback, onCompleteScope: this, delay: tweenLength, ease:Expo.easeOut});
	},
	componentWillLeave: function(callback) {
		var container = this.refs.container;

        TweenMax.to(container, tweenLength, {y:100, opacity: 0, onComplete: callback, onCompleteScope: this, ease:Expo.easeIn});
	},
	render: function() {
		return (
			<div>
				<div ref="container" className="container project__container">
					<h1 className="project__title">Wilfred</h1>
					<div className="project__info-container">
						<p className="project__description">
							Wilfred is an AI powered networking wingman. He will research a twitter feed and provide you with a quick blurb about that person. Discover anybody's favourite things to talk about including their favourite sports, programming languages, and foods.
							<a href="http://hbnr.co/wilfred" className="project__link" target="_blank">View Project</a>
						</p>
						<ul className="project__aside">
							<li>
								<h3 className="project__aside-title">
									My Role
								</h3>
								<p className="project__aside-body">
									Concept, UX/UI, Development
								</p>
							</li>
							<li>
								<h3 className="project__aside-title">
									Context
								</h3>
								<p className="project__aside-body">
									School Project
								</p>
							</li>
							<li>
								<h3 className="project__aside-title">
									Code
								</h3>
								<p className="project__aside-body">
									<a href="https://github.com/darrenhebner/wilfred" target="">View on Github</a>
								</p>
							</li>
						</ul>
					</div>

					<div className="project__feature-container">
						<img className="project__feature-image project__feature-image--shadow" src="../build/images/wilfred-search.gif" alt="Wilfred"/>
					</div>
						
					<div className="project__section">
						<div className="project__section--center">
							<h2>Delivering the data with a personality</h2>
							<p>I wanted Wilfred to deliver the data just like a human would. Sentences are coded with proper grammar, making it easy for the user to digest the information.</p>
						</div>
					</div>

					<div className="project__feature-container">
						<img className="project__feature-image project__feature-image--shadow" src="../build/images/wilfred-about.gif" alt="Wilfred"/>
					</div>

					<div className="project__section">
						<div className="project__section--center">
							<h2>A study in interface animation</h2>
							<p>I used this project to experiment with playful yet unobtrusive interface animations. The animations and transitions are meant to guide the user through different views without breaking the flow of the experience.</p>
						</div>
					</div>

				</div>
			</div>
		)
	}
})

export default Wilfred