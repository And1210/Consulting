import React from 'react';
import Image from 'react';
import '../public/css/index.css';
// import Background from '../public/imgs/home-backsplash.jpg';

var bg = {
	// backgroundImage: "url("+Background+")",
	// backgroundSize: cover,
	// opacity: 0.5
}

class Body extends React.Component {
	render() {
		return (
			<div id='body' className="bg" style={bg}>
			</div>
		)
	}
}

export default Body;
