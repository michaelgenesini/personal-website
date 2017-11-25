import React from 'react'
import { render } from 'react-dom'

// First we import some modules...
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import 'style-loader!./font-awesome.min.css';
import './global.css';
import App from './app/index';
import Home from './app/pages/home/index';
import About from './app/pages/about/index';
import Medium from './app/pages/medium/index';
import Pens from './app/pages/pens/index';

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
	<App>
		<Home/>
	</App>
  // <Router history={browserHistory}>
  //   <Route path="/" component={App}>
	// 		<IndexRoute component={Home}/>
	//     <Route path="/about" component={About} />
	//     <Route path="/medium" component={Medium} />
	//     <Route path="/pens" component={Pens} />
	// 	</Route>
  // </Router>
), document.getElementById('root'))
