'use client'

import React, { useState, ChangeEvent, MouseEvent } from 'react'
import styles from './treeCare.module.scss'
import exp from 'constants'

interface TreeInfo {
	tree_type: string
	grow_zone: string
	sun_exposure: string
	temperature: string
	watering: string
	growth_speed: string
	pruning: string
	wiring: string
	repotting: string
	propagation: string
	pests_diseases: string
}

const TreeCare = () => {
	const [treeType, setTreeType] = useState<string | null>(null)
	const [treeInfo, setTreeInfo] = useState<TreeInfo[] | null>(null)

	async function handleSubmit(event: MouseEvent<HTMLButtonElement>) {
		event.preventDefault()
		const options = {
			method: 'POST',
			body: JSON.stringify({
				message: treeType,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		}
		try {
			const response = await fetch('/api/chat', options)
			const rawData = await response.json()
			const data = JSON.parse(rawData.choices[0].message.content)
			setTreeInfo(data)
			console.log('data:', data)
		} catch (error) {
			console.error(error, 'An error occurred on the front end.')
		}
	}

	return (
		<>
			<div className={`${styles.container} ${styles.prompt}`}>
				<div className={styles['input-container']}>
					<input
						type='text'
						name='treeType'
						placeholder=' ex: Japanese Maple'
						value={treeType || ''}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setTreeType(e.target.value)
						}
					/>
				</div>
				<button onClick={(e) => handleSubmit(e)}>Search</button>
			</div>
			{/* CHAT GPT OUTPUT */}
			{treeInfo &&
				treeInfo.map((tree, index) => (
					<div
						key={index}
						className={styles['response-info']}
					>
						<h2>{tree.tree_type}</h2>

						<ul className={styles['response-info-items']}>
							<li className={styles['info-item']}>
								<h3>Growing Zone</h3>
								<p>{tree.grow_zone}</p>
							</li>

							<li className={styles['info-item']}>
								<h3>Sun Exposure</h3>
								<p>{tree.sun_exposure}</p>
							</li>

							<li className={styles['info-item']}>
								<h3>Temperature</h3>
								<p>{tree.temperature}</p>
							</li>

							<li className={styles['info-item']}>
								<h3>Watering</h3>
								<p>{tree.watering}</p>
							</li>

							<li className={styles['info-item']}>
								<h3>Growth Speed</h3>
								<p>{tree.growth_speed}</p>
							</li>

							<li className={styles['info-item']}>
								<h3>Pruning</h3>
								<p>{tree.pruning}</p>
							</li>

							<li className={styles['info-item']}>
								<h3>Wiring</h3>
								<p>{tree.wiring}</p>
							</li>

							<li className={styles['info-item']}>
								<h3>Repotting</h3>
								<p>{tree.repotting}</p>
							</li>

							<li className={styles['info-item']}>
								<h3>Propagation</h3>
								<p>{tree.propagation}</p>
							</li>

							<li className={styles['info-item']}>
								<h3>Pests & Disease</h3>
								<p>{tree.pests_diseases}</p>
							</li>
						</ul>
					</div>
				))}
		</>
	)
}

export default TreeCare
