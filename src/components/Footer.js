import React from 'react'
import '../App.css'
import LogoDarkImage from '../assets/logo-dark.svg'
import FacebookIcon from '../assets/icon-facebook.svg'
import InstagramIcon from '../assets/icon-instagram.svg'
import TwitterIcon from '../assets/icon-twitter.svg'

const Footer = () => {
	return (
		<div className='footer-container'>
			<div className='footer-logo'>
				<img
					src={LogoDarkImage}
					alt='Logo'
					style={{ filter: 'invert(100%)' }}
				/>
			</div>
			<div className='footer-text'>
				The Modern Art Gallery is free to all visitors and open seven days a
				week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
			</div>
			<div className='footer-icons'>
				<img src={FacebookIcon} alt='Facebook' />
				<img src={InstagramIcon} alt='Instagram' />
				<img src={TwitterIcon} alt='Twitter' />
			</div>
		</div>
	)
}

export default Footer
