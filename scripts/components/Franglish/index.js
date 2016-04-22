import React from 'react';
import TweenMax from 'gsap';
import ReactTransitionGroup from 'react-addons-transition-group';

var tweenLength = 1;

var Franglish = React.createClass({
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
					<h1 className="project__title">Franglish</h1>
					<div className="project__info-container">
						<p className="project__description">
							Franglish is a language learning application designed to help users practice french. The application takes a simple task and wraps it in a beautiful interface with instant feedback to encourage the user to continue to practice.
							<a href="http://hbnr.co/franglish" className="project__link" target="_blank">View Project</a>
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
									<a href="https://github.com/darrenhebner/franglish" target="_blank">View on Github</a>
								</p>
							</li>
						</ul>
					</div>

					<div className="project__feature-container">
						<img className="project__feature-image project__feature-image--shadow" src="../build/images/franglish.gif" alt="Franglish"/>
					</div>
						
					<div className="project__section">
						<div className="project__section--center">
							<h2>SVG animation</h2>
							<p>The large green score guage gives the user sense of accomplishment as they correctly answer each question. The guage is created and animated using SVG and javascript.</p>
						</div>
					</div>

					<div className="project__feature-container">
						<img className="project__feature-image project__feature-image--shadow" src="../build/images/franglish-menu.gif" alt="Franglish"/>
					</div>

					<div className="project__section">
						<div className="project__section--center">
							<h2>Intelligently arranging words</h2>
							<p>The application intelligently arranges the order and frequency of which each word appears based on if the user has previously answered the word correctly or not.</p>
						</div>
					</div>

				</div>
			</div>
		)
	}
})

export default Franglish