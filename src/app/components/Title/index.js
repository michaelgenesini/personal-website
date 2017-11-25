import React, { Component } from 'react';
import styles from './index.css';

class Title extends Component {
  render() {
    return (
      <div className="title">
      	<h1>{ this.props.title.split(' ').map((t,i) => <span key={i}>{t}</span>) }</h1>
				<h1 className="shadow">{ this.props.shadowTitle.split(' ').map((t,i) => <span key={i}>{t}</span>) }</h1>
      </div>
    );
  }
}

export default Title;
