import React, { Component } from 'react';
import styles from './index.css';

class Body extends Component {
  render() {
    return (
      <section className={styles.root}>
				{ this.props.children }
			</section>
    );
  }
}

export default Body;
