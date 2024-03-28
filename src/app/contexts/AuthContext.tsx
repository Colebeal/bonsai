'use client'
import React, { useState, useEffect, useContext } from 'react'
import { auth, db } from '../firebase'
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from 'firebase/auth'

import { onChildAdded, push, ref, set } from 'firebase/database'

interface AuthContextType {
	currentUser: any | null
	signUp: (email: string, password: string) => Promise<any>
	logIn: (email: string, password: string) => Promise<any>
	logOut: () => Promise<any>
}

const AuthContext = React.createContext<AuthContextType | null>(null)

export function useAuth() {
	const context = useContext(AuthContext)
	// ensures that the useAuth hook is only used when AuthContextType is !null
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}): React.ReactNode => {
	const [currentUser, setCurrentUser] = useState(null)
	const [loading, setLoading] = useState(true)

	// Creates User with email and password and returns a promise
	const signUp = async (email: string, password: string) => {
		await createUserWithEmailAndPassword(auth, email, password).then((user) => {
			// set user data in database

			const userId = user.user.uid
			const reference = ref(db, '/users/' + userId)
			set(reference, {
				uid: userId,
				email: email,
			})
		})
	}

	const logIn = (email: string, password: string) => {
		return signInWithEmailAndPassword(auth, email, password)
	}

	const logOut = () => {
		return signOut(auth)
	}

	const updateUserProfile = async (userName: string) => {
		await updateProfile(auth.currentUser, {
			displayName: userName,
		})
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user)
			setLoading(false)
		})
		return unsubscribe
	}, [])

	const value = {
		currentUser,
		signUp,
		logIn,
		logOut,
		updateUserProfile,
	}

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	)
}
