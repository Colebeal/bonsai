'use client'
import React, { useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useRouter } from 'next/navigation'
import styles from './userDashboard.module.scss'

const userDashBoard = () => {
	const router = useRouter()
	const { logOut, currentUser } = useAuth()

	const handleLogOut = async () => {
		try {
			await logOut()
			await router.push('/user/log-in')
		} catch (error) {
			console.error('error', error)
		}
	}
	!currentUser && router.push('/user/log-in')

	return (
		<>
			<div className={styles.hero}>
				{currentUser && (
					<h2 className={styles.greet}>{`Welcome, ${currentUser.email}`}</h2>
				)}
				{/* <p onClick={() => logOut()}>Log Out</p> */}
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
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
							ex ut quae delectus! Fugit facere distinctio deleniti ipsa
							cupiditate placeat sit adipisci, exercitationem aut molestiae
							dolor quia illo vero eligendi.
						</p>
						<button className='mt-4'>Update Profile</button>
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
