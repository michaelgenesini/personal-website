import React, { Component } from 'react';

import Header from './containers/Header/index';
import Body from './containers/Body/index';
import Footer from './containers/Footer/index';

class App extends Component {

	constructor(props) {
    super(props);
  }
	componentDidMount() {}
	componentWillUnmount() {}

  render() {
		// let showBrand = this.props.location.pathname === '/' ? false : true
    return (
			<div>
				{/* <Header showBrand={ showBrand } /> */}
				<Body>
					{this.props.children}
				</Body>
				{/* <Footer /> */}
			</div>
    );
  }
}

export default App;
