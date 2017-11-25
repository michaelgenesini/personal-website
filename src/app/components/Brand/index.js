import React, { Component } from 'react';
import styles from './index.css';

import { IndexLink } from 'react-router'

class Brand extends Component {
  render() {
    return (
      <div className={styles.root}>
      	<IndexLink onlyActiveOnIndex={true} to="/">.Home</IndexLink>
      </div>
    );
  }
}

export default Brand;
