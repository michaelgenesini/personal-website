import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router'
import styles from './index.css';

import Typist from 'react-typist';

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			opened: false,
			text: 'things',
			typing: true,
			cursor: {
			  show: true,
			  blink: false,
			  element: '',
			  hideWhenDone: false,
			  hideWhenDoneDelay: 1000,
			}
		}
		this.changePage = this.changePage.bind(this);
		this.keyDownHandler = this.keyDownHandler.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.restartTyping = this.restartTyping.bind(this);
	}

	changePage() {
		console.log('changePage');
	}

	keyDownHandler(evt) {
		if (!this.state.opened) return
		evt = evt || window.event;
		var isEscape = false;
		if ("key" in evt) {
				isEscape = (evt.key == "Escape" || evt.key == "Esc");
		} else {
				isEscape = (evt.keyCode == 27);
		}
		if (isEscape) this.handleClick()
	}

	componentDidMount() {
		document.onkeydown = this.keyDownHandler
	}

	handleClick() {
		this.setState({
			opened: !this.state.opened,
			text: this.state.opened ? 'things' : 'close',
		})
		let htmlClasses = document.getElementsByTagName('html')[0].classList
		this.state.opened ? htmlClasses.remove('-no-scroll') : htmlClasses.add('-no-scroll')
		this.restartTyping()
	}

	restartTyping() {
		this.setState({ typing: false }, () => {
			this.setState({ typing: true })
		});
  }

  render() {
		let menu = null;
		let classes = [styles.button];
		if (this.state.opened) {
			classes = [styles.button, styles['button-opened']]
			menu = (
					<div className={styles.root}>
					<div>
						<ul className={ styles.list }>
							<li className={ styles['list-item'] + ' -underline' }><Link onClick={ this.handleClick } to="/about">.About me</Link></li>
							<li className={ styles['list-item'] + ' -underline' }><Link onClick={ this.handleClick } to="/medium">.Medium</Link></li>
							<li className={ styles['list-item'] + ' -underline' }><Link onClick={ this.handleClick } to="/pens">.Pens</Link></li>
						</ul>
					</div>
				</div>
			);
		}

    return (
			<div>
				<div className={ classes.join(' ') } onClick={ this.handleClick }>
				{
					this.state.typing
		      ? <Typist cursor={ this.state.cursor } >{ this.state.text }</Typist>
		      : <span>{ this.state.text }</span>
		    }
				</div>
				{ menu }
			</div>
		);
  }
}

export default Menu;
