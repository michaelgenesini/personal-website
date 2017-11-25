import React, { Component } from 'react';
import styles from './index.css';

class Button extends Component {
  render() {
    return (
      <a href="#" className={styles.root}>
				<div className={styles.text}>button</div>
			</a>
    );
  }
}

export default Button;
