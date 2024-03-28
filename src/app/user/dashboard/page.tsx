'use client'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useRouter } from 'next/navigation'
import styles from './userDashboard.module.scss'

const userDashBoard = () => {
	const router = useRouter()
	const { logOut, updateUserProfile, currentUser } = useAuth()
	const [isUpdatingProfile, setIsUpdatingProfile] = useState(false)

	const handleUpdateProfile = async (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event?.preventDefault()
		// get form data into a useable object
		const rawFormData = new FormData(event.currentTarget)
		const formData = Object.fromEntries(rawFormData.entries())
		// formatting form data to be a string for updateUserProfile
		const userName = `${formData.name}`
		try {
			console.log('updating profile')
			await updateUserProfile(userName)
			// setIsUpdatingProfile(!isUpdatingProfile)
			console.log('userName', currentUser?.displayName)
		} catch (error) {}
	}

	const handleLogOut = async () => {
		try {
			await logOut()
			await router.push('/user/log-in')
		} catch (error) {
			console.error('error', error)
		}
	}
	!currentUser && router.push('/user/log-in')
	console.log('currentUser', currentUser)
	return (
		<>
			<div className={styles.hero}>
				{currentUser && (
					<h2 className={styles.greet}>{`Welcome, ${
						currentUser?.displayName
							? currentUser.displayName
							: currentUser.email
					}`}</h2>
				)}
			</div>
			<section className={styles.content}>
				<div className={styles['content-header']}>
					<h1>Dashboard</h1>
					<a
						onClick={handleLogOut}
						className='text-[#8aaa8d] font-semibold hover:font-bold'
					>
						Log out
					</a>
				</div>
				<div className={styles['content-body']}>
					<div className={styles['content-card']}>
						<h2>Profile</h2>
						<form
							action=''
							onSubmit={handleUpdateProfile}
						>
							<div className={styles['form-item']}>
								<label htmlFor='name'>Name</label>
								<input
									type='text'
									name='name'
									id='name'
									placeholder={
										currentUser?.displayName
											? currentUser.displayName
											: 'username'
									}
									className='mt-2'
								/>
							</div>
							<div className={styles['form-item']}>
								<label htmlFor='email'>Email</label>
								<input
									type='email'
									name='email'
									id='email'
									placeholder={currentUser?.email ? currentUser.email : 'email'}
									className='mt-2'
								/>
							</div>
							<input
								type='submit'
								value='Update Profile'
								className='mt-1 flex flex-col gap-3 w-full items-center'
							/>
						</form>
					</div>

					<div className={styles['content-card']}>
						<h2>My Trees</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						<ul className={styles['my-trees']}>
							<li className={styles['my-trees__item']}>
								<div className={styles['img-container']}>
									<img
										src='/pre-bonsai.jpeg'
										alt=''
									/>
								</div>
								<div>
									<h2>Tree Name</h2>
									<p>
										<strong>Stage:</strong> Development
									</p>
									<p>
										<strong>Goal:</strong> Trunk Thickening
									</p>
								</div>
							</li>
							<li className={styles['my-trees__item']}>
								<div className={styles['img-container']}>
									<img
										src='/pre-bonsai.jpeg'
										alt=''
									/>
								</div>
								<div>
									<h2>Tree Name</h2>
									<p>
										<strong>Stage:</strong> Development
									</p>
									<p>
										<strong>Goal:</strong> Trunk Thickening
									</p>
								</div>
							</li>
							<li className={styles['my-trees__item']}>
								<div className={styles['img-container']}>
									<img
										src='/finished-bonsai.jpeg'
										alt=''
									/>
								</div>
								<div>
									<h2>Tree Name</h2>
									<p>
										<strong>Stage:</strong> Refinement
									</p>
									<p>
										<strong>Goal:</strong> Ramification
									</p>
								</div>
							</li>
						</ul>
						<button className='mt-4'>Update Trees</button>
					</div>
					<div className={styles['content-card']}>
						<h2>Care Guide</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
							ex ut quae delectus! Fugit facere distinctio deleniti ipsa
							cupiditate placeat sit adipisci, exercitationem aut molestiae
							dolor quia illo vero eligendi.
						</p>
						<a href='/tree-care'>
							<button className='mt-4'>Launch</button>
						</a>
					</div>
				</div>
			</section>
		</>
	)
}

export default userDashBoard
