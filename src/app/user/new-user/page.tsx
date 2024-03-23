'use client'
import React, { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './userSignUp.module.scss'
import { useAuth } from '../../contexts/AuthContext'

const UserSignUp = () => {
	const [loading, setLoading] = useState(false)
	const { signUp, currentUser } = useAuth()
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

		if (password !== confirmPassword && password.length < 6) {
			alert('Passwords do not match')
			return
		}

		try {
			setLoading(true)
			await signUp(email, password)
			await router.push('/')
		} catch (error) {
			console.error('error', error)
		}
		setLoading(false)
	}
	console.log(currentUser)
	return (
		<section className={styles['user-window']}>
			<form
				action='submit'
				onSubmit={(event) => submitHandler(event)}
				className={styles.form}
			>
				<h2>Sign up</h2>
				<div className={styles['form-field']}>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='bonsai@example.com'
					/>
				</div>
				<div className={styles['form-field__container']}>
					<div className={styles['form-field']}>
						<label htmlFor='password'>Password:</label>
						<input
							type='password'
							name='password'
							id='password'
							placeholder='Password'
						/>
					</div>
					<div className={styles['form-field']}>
						<label htmlFor='password'>Confirm Password:</label>

						<input
							type='password'
							name='confirmPassword'
							id='confirm-password'
							placeholder='Confirm Password'
						/>
					</div>
				</div>
				<div className='flex gap-3 w-full items-center'>
					<input
						disabled={loading}
						type='submit'
						value='Sign up'
					/>
				</div>
			</form>
			<span className='flex justify-center gap-2 w-full'>
				<p>Already have an account?</p>
				<a
					href='/user/log-in'
					className='text-blue-500 hover:text-blue-700 hover:font-semibold'
				>
					Log in
				</a>
			</span>
		</section>
	)
}

export default UserSignUp
