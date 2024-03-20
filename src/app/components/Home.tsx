import React from 'react'
import { AiOutlineMenu, AiOutlineArrowRight } from 'react-icons/ai'

const Home = () => {
	return (
		<div>
			<div className='hero'>
				<div className='hero-content'>
					<h1 className='text-2xl'>Welcome to Bonsai Buddy</h1>
					<p className='my-4'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
						quis magni deserunt sequi quisquam ratione a atque maxime cum dolore
						dolorem itaque ipsa molestias, ipsam cupiditate nostrum corrupti sit
						enim?
					</p>
					<button>Sign up</button>
					<a className='ml-4 text-sm'>Already have and account?</a>{' '}
				</div>
			</div>
			<section className='value-prop'>
				<h4 className='text-sm'>Tree Specific</h4>
				<h2>Grow & Care Data</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos
					ducimus recusandae, quasi commodi.
				</p>
			</section>
			<section className='value-prop tree-tracker'>
				<div>
					<h2>From Nursery Stock</h2>
					<h2 className='mt-3 text-right'>To Refined Bonsai</h2>
					<div className='flex justify-between items-center mt-4'>
						<div className='img-container'>
							<img
								src='/pre-bonsai.jpeg'
								alt=''
								className='img-container__img'
							/>
						</div>
						<AiOutlineArrowRight className='text-2xl font-semibold' />
						<div className='img-container'>
							<img
								src='/finished-bonsai.jpeg'
								alt=''
								className='img-container__img'
							/>
						</div>
					</div>
				</div>
				<div className='tree-tracker'>
					<h2>Tree Tracker</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos
						ducimus recusandae, quasi commodi.
					</p>
				</div>
			</section>
			<section className='value-prop'>
				<h4>Location Specific</h4>
				<h2>Water Reminders</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos
					ducimus recusandae, quasi commodi.
				</p>
			</section>
			<section className='footer'>
				<div className='value-prop'>
					<h2>Get Started</h2>
					<p className='mb-4'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos
						ducimus recusandae, quasi commodi.
					</p>
					<div>
						<button>Sign up</button>
						<a className='ml-4 text-sm'>Already have and account?</a>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home
