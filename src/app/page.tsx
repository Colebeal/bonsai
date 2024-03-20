// import TreeCare from '@/app/pages/tree-care/TreeCare'
// import { Image } from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai'
import Home from '@/app/components/Home'

export default function App() {
	return (
		<>
			<nav>
				<h2>Bonsai Buddy</h2>
				<AiOutlineMenu className='text-2xl' />
			</nav>
			<main>
				{/* If user isLoggedIn render Dashboard */}
				<Home /> {/* If user !isLoggedIn render Home */}
			</main>
		</>
	)
}
