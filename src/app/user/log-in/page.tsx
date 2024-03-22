'use client'
import React from 'react'
import styles from './userLogIn.module.scss'

const UserLogIn = () => {
	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event?.preventDefault()
		const formData = new FormData(event.currentTarget)

		// take form data and send to server
		console.log('Form Data:', Object.fromEntries(formData.entries()))
		// check to see if the form data is valid
		// if valid, log in the user
		// if not valid, display error message
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
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						name='email'
						id='email'
						required
					/>
				</div>
				<div className={styles['form-field']}>
					<label htmlFor='password'>Password:</label>
					<input
						type='password'
						name='password'
						id='password'
						required
					/>
				</div>
				<input
					type='submit'
					value='Log in'
				></input>
			</form>
		</section>
	)
}

export default UserLogIn
