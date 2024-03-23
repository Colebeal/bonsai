'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../../contexts/AuthContext'
import styles from './userLogIn.module.scss'

const UserLogIn = () => {
	const [loading, setLoading] = useState(false)
	const { logIn, currentUser } = useAuth()
	const router = useRouter()

	const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
		event?.preventDefault()
		// get form data into a useable object
		const rawFormData = new FormData(event.currentTarget)
		const formData = Object.fromEntries(rawFormData.entries())
		// formatting form data to be a string for signUpHandler
		const email = `${formData.email}`
		const password = `${formData.password}`
		const confirmPassword = `${formData.confirmPassword}`

		try {
			setLoading(true)
			await logIn(email, password)
			await router.push('/user/dashboard')
		} catch (error) {
			console.error('error', error)
		}
		setLoading(false)
	}

	return (
		<section className={styles['user-window']}>
			<form
				action='submit'
				onSubmit={submitHandler}
				className={styles.form}
				id='log-in'
			>
				<h2>Sign in</h2>
				<div className={styles['form-field']}>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='Email'
						required
					/>
				</div>
				<div className={styles['form-field']}>
					<input
						type='password'
						name='password'
						id='password'
						placeholder='Password'
						required
					/>
				</div>
				<div className='mt-1 flex flex-col gap-3 w-full items-center'>
					<input
						disabled={loading}
						type='submit'
						value='Log in'
						className='w-full'
					/>
					<a
						href={'/user/forgot-password'}
						className='text-sm'
					>
						Forgot your password?
					</a>
				</div>
			</form>
			<span className='flex justify-center gap-2 w-full text-sm'>
				<p>Need an account?</p>
				<a
					href='/user/new-user'
					className='text-[#8aaa8d] font-semibold hover:font-bold'
				>
					Sign up
				</a>
			</span>
		</section>
	)
}

export default UserLogIn
