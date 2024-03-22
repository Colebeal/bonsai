'use client'
import React from 'react'
import styles from './userSignUp.module.scss'

const UserSignUp = () => {
	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event?.preventDefault()
		const formData = new FormData(event.currentTarget)
		console.log('Form Data:', Object.fromEntries(formData.entries()))
	}

	return (
		<section className={styles['user-window']}>
			<form
				action='submit'
				onSubmit={submitHandler}
				className={styles.form}
			>
				<h2>Sign up</h2>
				<div className={styles['form-field__container']}>
					<div className={styles['form-field']}>
						<input
							type='name'
							name='first-name'
							id='first-name'
							placeholder='First Name'
						/>
					</div>
					<div className={styles['form-field']}>
						<input
							type='name'
							name='last-name'
							id='last-name'
							placeholder='Last Name'
						/>
					</div>
				</div>
				<div className={styles['form-field']}>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='bonsai@example.com'
					/>
				</div>
				<div className={styles['form-field__container']}>
					<div className={styles['form-field']}>
						<input
							type='password'
							name='password'
							id='password'
							placeholder='Password'
						/>
					</div>
					<div className={styles['form-field']}>
						<input
							type='password'
							name='password'
							id='confirm-password'
							placeholder='Confirm Password'
						/>
					</div>
				</div>
				<input
					type='submit'
					value='Sign up'
				></input>
			</form>
		</section>
	)
}

export default UserSignUp
