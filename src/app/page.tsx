import TreeCare from '@/pages/tree-care/TreeCare'
import { AiOutlineMenu } from 'react-icons/ai'

export default function Home() {
	return (
		<>
			<nav>
				<h2>Bonsai Buddy</h2>
				<AiOutlineMenu />
			</nav>
			<main>
				<TreeCare />
			</main>
		</>
	)
}
