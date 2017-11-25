import React, { Component } from 'react';
import styles from './index.css';

import Title from '../Title/index';
import Paragraph from '../Paragraph/index';
import Image from '../Image/index';


import image_1 from '../../../assets/imgs/me-01-new.jpg';
import image_2 from '../../../assets/imgs/me-02-new.jpg';
import image_3 from '../../../assets/imgs/me-03-new.jpg';
import image_4 from '../../../assets/imgs/me-04-new.jpg';
import image_5 from '../../../assets/imgs/me-05-new.jpg';
import image_6 from '../../../assets/imgs/me-06-new.jpg';
import image_7 from '../../../assets/imgs/me-07-new.jpg';
import image_8 from '../../../assets/imgs/me-08-new.jpg';

const getImage = () => {
	const images = [image_1,image_2,image_1,image_3,image_1,image_4,image_1,image_5,image_1,image_6,image_1,image_7,image_1,image_8]
	const min = 0, max = images.length-1
	return images[Math.floor(Math.random() * (max - min + 1)) + min]
}

class Hero extends Component {
  render() {
    return (
      <div className="hero">
				<div className="container">
					<Title title="Michael Genesini" shadowTitle="Frontend Developer" />
					<Paragraph>
						I’m a software engineer & frontend developer living in Parma.
					</Paragraph>
					<ul className="links">
						<li><a target="_blank" href="http://www.twitter.com/michaelgenesini"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
						<li><a target="_blank" href="https://github.com/michaelgenesini"><i className="fa fa-github" aria-hidden="true"></i></a></li>
						{/* <li><a href="https://www.instagram.com/francisqut/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li> */}
						<li><a target="_blank" href="https://www.linkedin.com/in/michaelgenesini/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
						<li><a target="_blank" href="https://medium.com/@michaelgenesini"><i className="fa fa-medium" aria-hidden="true"></i></a></li>
					</ul>
					<a style={{'fontSize': '16px'}} download target="_blank" href="/michaelgenesini_CV_2017.pdf">download CV</a>
					<br/>
					<br/>
					<div className="image">
						<Image src={ getImage() } />
					</div>
				</div>
			</div>
    );
  }
}

export default Hero;
