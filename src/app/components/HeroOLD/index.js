import React, { Component } from 'react';
import styles from './index.css';

import Title from '../Title/index';
import Paragraph from '../Paragraph/index';
import Image from '../Image/index';

import image_1 from '../../../assets/imgs/me-01.png';
import image_2 from '../../../assets/imgs/me-02.png';
import image_3 from '../../../assets/imgs/me-03.png';
import image_4 from '../../../assets/imgs/me-04.png';
import image_5 from '../../../assets/imgs/me-05.png';
import image_6 from '../../../assets/imgs/me-06.png';
import image_7 from '../../../assets/imgs/me-07.png';
import image_8 from '../../../assets/imgs/me-08.png';

const getImage = () => {
	const images = [image_1,image_2,image_3,image_4,image_5,image_6,image_7,image_8]
	const min = 0, max = 7
	return images[Math.floor(Math.random() * (max - min + 1)) + min]
}

class Hero extends Component {
  render() {
		console.log(getImage());
    return (
      <div className={styles.root}>
				<div className={ styles.container}>
					<Title title=".Michael Genesini" />
					<Paragraph>
						I’m a software engineer & creative frontend developer living in Parma.
					</Paragraph>
					<div className={ styles.image }>
						<Image src={ getImage() } />
					</div>
				</div>
			</div>
    );
  }
}

export default Hero;
