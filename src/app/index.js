import React from 'react';
import ReactDOM from 'react-dom';
import './public/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header.jsx';
import Body from './pages/main.jsx';


class Page extends React.Component {

	render() {
		return (
			<div id="page">
				<Header />
				<Body />
			</div>
		);
	}
}

// ========================================

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
