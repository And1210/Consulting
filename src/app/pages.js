import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root.jsx';
import Home from './components/home.jsx';
import About from './components/about.jsx';

//Content of the index route
const IndexRoute = () => (
	<Root>
		<Home />
	</Root>
);

//Content of the about route
const AboutRoute = () => (
	<Root>
		<About />
	</Root>
);

export {
	IndexRoute,
	AboutRoute
}
