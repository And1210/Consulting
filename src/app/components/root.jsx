import React from 'react';
import ReactDOM from 'react-dom';
import '../public/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header.jsx';

class Root extends React.Component {

	render() {
		return (
			<div id="page">
				<Header />
				{this.props.children}
			</div>
		);
	}
}

export default Root;
