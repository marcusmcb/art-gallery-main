import React from 'react'
import '../App.css'
import ImageGrid2 from '../assets/desktop/image-grid-2.jpg'
import ImageGrid3 from '../assets/desktop/image-grid-3.jpg'

const MainContentSecondary = () => {
	return (
		<div className='content-secondary-container'>
			<div className='content-secondary-left'>
				<img src={ImageGrid2} alt='Gallery Grid 2' />
			</div>
			<div className='content-secondary-right'>
				<div className='content-secondary-right-image'>
					<img src={ImageGrid3} alt='Gallery Grid 3' />
				</div>
				<div className='content-secondary-right-text-box'>
					<div className='content-secondary-right-header'>
						COME & BE INSPIRED
					</div>
					<div className='content-secondary-right-text'>
						We're excited to welcome you to our gallery and see how our
						collections influence you.
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainContentSecondary
