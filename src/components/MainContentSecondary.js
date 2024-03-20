import '../App.css'
import ImageGrid2 from '../assets/desktop/image-grid-2.jpg'
import ImageGrid3 from '../assets/desktop/image-grid-3.jpg'

const MainContentSecondary = () => {
	return (
		<div className='content-secondary-container'>
			<div className='content-secondary-left'>
				<img src={ImageGrid2} alt='Gallery Image' />
			</div>
			<div className='content-secondary-right'>
				<img src={ImageGrid3} alt='Another Gallery Image'/>
				<div classname='content-secondary-right-text-box'>
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
