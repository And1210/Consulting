import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {IndexRoute, AboutRoute} from './pages.js';

//Final page to render, has routes inside
class Page extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path='/' component={IndexRoute} />
					<Route path='/about' component={AboutRoute} />
				</div>
			</Router>
		);
	}
}

// ========================================

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
