import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AiOutlineMenu } from 'react-icons/ai'
import { AuthProvider } from './contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Bonsai Buddy',
	description: 'A place for you to track and care for your bonsai trees.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={'root'}>
				<AuthProvider>
					<nav>
						<a href='/'>
							<h2>Bonsai Buddy</h2>
						</a>
						<AiOutlineMenu className='text-2xl' />
					</nav>
					{children}
				</AuthProvider>
			</body>
		</html>
	)
}
