import React, { Component } from 'react';
import styles from './index.css';

class Paragraph extends Component {
  render() {
    return (
      <p className="paragraph">
      	{this.props.children}
      </p>
    );
  }
}

export default Paragraph;
