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
	// if there is no currentUser, redirect to log-in page
	!currentUser && router.push('/user/log-in')
	// useEffect(() => {
	// 	!currentUser && router.push('/user/log-in')
	// }, [currentUser, router])

	return (
		<div>
			{currentUser && <h2>{`Hello, ${currentUser.email}`}</h2>}
			<button onClick={() => logOut()}>Log Out</button>
		</div>
	)
}

export default userDashBoard
