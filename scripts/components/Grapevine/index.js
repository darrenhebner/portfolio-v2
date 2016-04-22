import React from 'react';
import TweenMax from 'gsap';
import ReactTransitionGroup from 'react-addons-transition-group';

var tweenLength = 1;

var Grapevine = React.createClass({
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
					<h1 className="project__title">Grapevine</h1>
					<div className="project__info-container">
						<p className="project__description">
							Grapevine takes the voting structure of Reddit, Product Hunt, and Hacker News and applies it to music discovery. Users can sign up to share their favourite tracks, the community will then upvote their favourites, surfacing the best new music.
							<a href="https://grapevin.es" className="project__link" target="_blank">View Project</a>
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
									Side Project
								</p>
							</li>
						</ul>
					</div>

		
					<div className="project__feature-container">
						<img className="project__feature-image" src="../build/images/grapevine-laptop.png" alt="Grapevine"/>
					</div>
						
					<div className="project__section">
						<div className="project__section-image--left">
							<img src="../build/images/grapevine-add-track.png" alt="Grapevine Add Track"/>
						</div>
						<div className="project__section--right">
							<h2>Effortless Song Submission</h2>
							<p>Users simply paste the soundcloud link of the song they would like to share. The data, such as album artwork, genre, and links to purchase are automatically filled in via the soundcloud API.</p>
						</div>
					</div>

					<div className="project__feature-container">
						<img src="../build/images/grapevine-playlist.png" alt="Grapevine" className="project__feature-image project__feature-image--shadow"/>
					</div>

					<div className="project__section">
						<div className="project__section--center">
							<h2>An Evolving Playlist</h2>
							<p>Each track is given a score based on its total number of upvotes and also how recently it was submitted. Each track has a sense of gravity as upvotes on fresher tracks carry more weight than votes on older tracks.</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
})

export default Grapevine