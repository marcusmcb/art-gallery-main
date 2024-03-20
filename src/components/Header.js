import React from 'react'
import '../App.css'
import IconArrowRight from '../assets/icon-arrow-right.svg'

const Header = () => {
	return (
		<div className='header-container'>
			<div className='color-block left'></div>
			<div className='image-block'></div>
			<div className='color-block right'></div>
			<div className='overlay-row'>
				<div className='left-element'>
					<p>MODERN</p>
					<p>ART GALLERY</p>
				</div>
				<div className='right-element'>
					<p>
						The arts in the collection of the Modern Art Gallery all started
						from a spark of inspiration. Will these pieces inspire you? Visit us
						and find out.
					</p>
					<div className='location-button'>
						<div className='location-button-text'>OUR LOCATION</div>
						<div className='location-button-icon'>
							<img src={IconArrowRight} alt='Arrow Right' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
