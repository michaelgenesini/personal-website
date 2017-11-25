import React, { Component } from 'react';
import styles from './index.css';

class Image extends Component {
  render() {
    return (
      <img className="img" src={ this.props.src } />
    );
  }
}

export default Image;
