import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Root from './components/root.jsx';
import Home from './components/home.jsx';

//Content of the index route
const IndexRoute = () => (
	<Root>
		<Home />
	</Root>
);

//Final page to render, has routes inside
class Page extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Route path='/' component={IndexRoute} />
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
