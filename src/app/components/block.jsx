import React from 'react';
import '../public/css/index.css';

class Block extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inverted: false
		}

		if (props.inverted != undefined)
			this.state.inverted = true;
	}

	render() {
		if (!this.state.inverted) {
			return (
				<div id={this.props.id} className="block">
					<div className="block-text">
						<h1>{this.props.title}</h1>
						<p>
							{this.props.children}
						</p>
					</div>
					<div className="block-image">
						<img src={this.props.img} style={{'maxWidth': '100px', 'maxHeight': '100px'}} />
					</div>
				</div>
			);
		} else {
			return (
				<div id={this.props.id} className="block">
					<div className="block-image">
						<img src={this.props.img} style={{'maxWidth': '100px', 'maxHeight': '100px'}} />
					</div>
					<div className="block-text">
						<h1>{this.props.title}</h1>
						<p>
							{this.props.children}
						</p>
					</div>
				</div>
			);
		}
	}
}

export default Block;
