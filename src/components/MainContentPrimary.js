import React from 'react'
import '../App.css'
import ImageGrid1 from '../assets/desktop/image-grid-1.jpg'

const MainContentPrimary = () => {
	return (
		<div className='content-primary-container'>
			<div className='content-primary-left'>
				<div className='content-primary-left-header'>
					YOUR DAY AT THE GALLERY
				</div>
				<div className='content-primary-left-text'>
					Wander through our distinct collections and find new insights about
					our artists. Dive into the details of their creative process.
				</div>
			</div>
			<div className='content-primary-right'>
				<img src={ImageGrid1} alt='Gallery' />
			</div>
		</div>
	)
}

export default MainContentPrimary
