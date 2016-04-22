import React from 'react';
import TweenMax from 'gsap';
import ReactTransitionGroup from 'react-addons-transition-group';

TweenMax.defaultEase = Expo.easeOut;
var tweenLength = 1;

var About = React.createClass({
	componentWillAppear: function(callback) {
		console.log("componentWillAppear");
        var portrait = this.refs.portrait;
        var title = this.refs.title;
        var bio = this.refs.bio;

        TweenMax.fromTo(portrait, tweenLength, {opacity: 0, y:45, x:"-100%"}, { opacity: 1,y:0, x:"-100%", onComplete: callback, onCompleteScope: this, delay: tweenLength, ease:Expo.easeOut});
        TweenMax.fromTo(title, tweenLength, {opacity: 0, y:100}, { opacity: 1, y:75, onComplete: callback, onCompleteScope: this, delay: tweenLength, ease:Expo.easeOut});
        TweenMax.fromTo(bio, tweenLength, {opacity: 0, y:185}, { opacity: 1, y:175, onComplete: callback, onCompleteScope: this, delay: tweenLength, ease:Expo.easeOut});
	},
	componentWillEnter: function(callback) {
		console.log("componentWillEnter");
        var portrait = this.refs.portrait;
        var title = this.refs.title;
        var bio = this.refs.bio;

        TweenMax.fromTo(portrait, tweenLength, {opacity: 0, y: 45, x:"-100%"}, { opacity: 1, y: 0, x:"-100%", onComplete: callback, onCompleteScope: this, delay: tweenLength, ease:Expo.easeOut});
        TweenMax.fromTo(title, tweenLength, {opacity: 0, y:100}, { opacity: 1, y:75, onComplete: callback, onCompleteScope: this, delay: tweenLength, ease:Expo.easeOut});
        TweenMax.fromTo(bio, tweenLength, {opacity: 0, y:185}, { opacity: 1, y:175, onComplete: callback, onCompleteScope: this, delay: tweenLength, ease:Expo.easeOut});
	},
	componentWillLeave: function(callback) {
		console.log("componentWillLeave");
		var portrait = this.refs.portrait;
		var title = this.refs.title;
		var bio = this.refs.bio;

        TweenMax.to(portrait, tweenLength, { opacity: 0, y:45, onComplete: callback, onCompleteScope: this, ease:Expo.easeIn});
        TweenMax.to(title, tweenLength, { opacity: 0, y:100, onComplete: callback, onCompleteScope: this, ease:Expo.easeIn});
        TweenMax.to(bio, tweenLength, { opacity: 0, y:185, onComplete: callback, onCompleteScope: this, ease:Expo.easeIn});
	},
	render: function() {
		return (
			<div>
				<div className="container about__container">
					<img ref="portrait" className="about__portrait" src="/build/images/portrait2.png" alt="Darren Hebner"/>
					<h1 ref="title" className="about__title"><span className="dash">&mdash; </span>Darren Hebner</h1>
					<div ref="bio" className="about__bio">
						<p>I am a Toronto based web developer currently pursuing post-graduate studies at Sheridan College. My studies are focused on web development and UX design.</p>
						<p>I have an entrepreneurial spirit and a strong sense of design. Most weekends are spent building side projects and drinking coffee.</p>
						<p>Email &mdash; <a href="mailto:darren@hbnr.co" target="_blank">darren@hbnr.co</a></p>
					</div>
				</div>
			</div>
		)
	}
})

export default About