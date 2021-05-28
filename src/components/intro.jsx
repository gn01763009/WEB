import React from 'react'
import Typed from 'react-typed'

class Intro extends React.Component {
	render() {
		return (
			<div id='home' className='intro route bg-image background'>
				<div className='intro-content display-table'>
					<div className='table-cell'>
						<div className='container'>
							<h1 className='intro-title mb-4'>Hello &#128075; I'm Reggie</h1>
							<p className='intro-subtitle'>
								<span className='text-slider-items'></span>
								<strong className='text-slider'>
									<Typed
										strings={[
											'Software Engineer',
											'&#128679; Updating....',
											' &#128556; &#128556;',
										]}
										typeSpeed={87}
										backDelay={1100}
										backSpeed={30}
										loop
									/>
								</strong>
							</p>
							<p className='pt-3'></p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Intro
