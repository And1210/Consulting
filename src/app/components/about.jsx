import React from 'react';
import ReactDOM from 'react-dom';
import '../public/css/index.css';

import Headshot from '../public/imgs/Andrew_Farley.jpeg';

class Panel extends React.Component {
	render() {
		return (
			<div className="resume-panel">
				<h4>{this.props.title}</h4>
				{this.props.children}
			</div>
		);
	}
}

class About extends React.Component {
	render() {
		return (
			<div id='body'>
				<ol className="resume">
					<li style={{paddingBottom: '30px'}}>
            <div className="container-fluid">
	            <div className="row">
								<div className="col-md-2">
									<img src={Headshot} className="resume-image" />
								</div>
	              <div className="col-md-4">
                  <h1>Andrew Farley</h1>
									<h2>About Me</h2>
								</div>
								<div className="col-md-6">
									<Panel title="Education">
										<ul>
											<li>
												Computer Engineering - Class of 2021 - Queen's University
											</li>
											<li>
												Class of 2017 - North Toronto Collegiate Institute
											</li>
										</ul>
									</Panel>
								</div>
	            </div>
            </div>
          </li>
					<li>
            <div className="container-fluid">
	            <div className="row">
								<div className="col-md-6">
									<Panel title="Project Experience">

									</Panel>
								</div>
								<div className="col-md-6">
									<Panel title="Extracurriculars">

									</Panel>
								</div>
							</div>
						</div>
					</li>
				</ol>
			</div>
		);
	}
}

export default About;
