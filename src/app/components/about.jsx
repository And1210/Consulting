import React from 'react';
import ReactDOM from 'react-dom';
import '../public/css/index.css';

import Headshot from '../public/imgs/Andrew_Farley.jpeg';

class About extends React.Component {
	render() {
		return (
			<div id='body'>
				<ul className="slides">
					<li >
            <div className="overlay" />
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                <div className="slider-text-inner js-fullheight">
                    <div className="desc">
                    <h1>Hi! <br />I'm Jackson</h1>
                    <h2>100% html5 bootstrap templates Made by <a href="https://colorlib.com/" target="_blank">colorlib.com</a></h2>
                    <p><a className="btn btn-primary btn-learn">Download CV <em className="icon-download4" /></a></p>
                    </div>
                </div>
                </div>
            </div>
            </div>
          </li>
				</ul>
			</div>
		);
	}
}

export default About;
