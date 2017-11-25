import React, { Component } from 'react';
import styles from './index.css';

import Menu from '../../components/Menu/index';
import Brand from '../../components/Brand/index';

class Header extends Component {
  render() {
    return (
      <header className={ styles.root }>
				{ this.props.showBrand ? <Brand /> : '' }
				<Menu />
			</header>
    );
  }
}

Header.propTypes = {
  showBrand: React.PropTypes.bool.isRequired
};

Header.defaultProps = {
  showBrand: true
};

export default Header;
