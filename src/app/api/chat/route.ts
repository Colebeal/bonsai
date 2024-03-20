import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
import promptData from '@/lib/promptData'

interface Options {
	method: string
	headers: {
		Authorization: string
		'Content-Type': string
	}
	body: string
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
	const options: Options = {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			model: 'gpt-3.5-turbo',
			messages: [
				{
					role: 'user',
					content: `${promptData(req.body.message)}`,
				},
			],
			max_tokens: 500,
		}),
	}
	try {
		const response = await fetch(
			'https://api.openai.com/v1/chat/completions',
			options
		)
		const data = await response.json()
		return NextResponse.json(data)

		res.status(200).json(data)
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: 'An error occurred.' })
	}

	// console.log(JSON.stringify('this endpoint works'))
	// if (req.method === 'POST') {
	// 	const options: Options = {
	// 		method: 'POST',
	// 		headers: {
	// 			Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify({
	// 			model: 'gpt-3.5-turbo',
	// 			messages: [
	// 				{
	// 					role: 'user',
	// 					content: `${promptData(req.body.message)}`,
	// 				},
	// 			],
	// 			max_tokens: 500,
	// 		}),
	// 	}
	// 	try {
	// 		const response = await fetch(
	// 			'https://api.openai.com/v1/chat/completions',
	// 			options
	// 		)
	// 		const data = await response.json()
	// 		res.status(200).json(data)
	// 	} catch (error) {
	// 		console.error(error)
	// 		res.status(500).json({ error: 'An error occurred.' })
	// 	}
	// } else {
	// 	// Handle any other HTTP method
	// 	res.setHeader('Allow', ['POST'])
	// 	res.status(405).end(`Method ${req.method} Not Allowed`)
	// }
}
