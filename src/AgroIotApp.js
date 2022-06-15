import React from 'react'
import { Conocenos } from './components/Conocenos'
import { Experiencia } from './components/Experiencia'
import { FooterBanner } from './components/FooterBanner'
import { HeaderBanner } from './components/HeaderBanner'

export const AgroIotApp = () => {
	return (
		<>
			<div>
				<HeaderBanner />
			</div>
			<div className='general'>
				<Conocenos />
			</div>
			<div>
				<Experiencia />
			</div>
			<div>
				<FooterBanner />
			</div>
		</>

	)
}
