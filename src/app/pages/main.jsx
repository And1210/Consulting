import React from 'react';
import Image from 'react';
import '../public/css/index.css';

var bg = {
	backgroundImage: "url("+'/app/public/imgs/home-backsplash.jpg'+")"
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
