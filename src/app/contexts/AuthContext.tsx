'use client'
import React, { useState, useEffect, useContext, use } from 'react'
import { auth } from '../firebase'
import {
	getAuth,
	createUserWithEmailAndPassword,
	Auth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'
import { sign } from 'crypto'

// interface User {
// 	email: string
// 	password: string
// }

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
	const signUp = (email: string, password: string) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const logIn = (email: string, password: string) => {
		return signInWithEmailAndPassword(auth, email, password)
	}

	const logOut = () => {
		return signOut(auth)
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
	}

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	)
}
