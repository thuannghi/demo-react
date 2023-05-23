import React from 'react'
import Profile from '../Profile/index'
import {IProfile} from '../Profile/type'

function Logo() {
	return <p>
        This is Fake Logo
	</p>
}

export default function Gallery() {
	const getData = (): Array<IProfile> => [
		{
			src: 'https://i.imgur.com/MK3eW3As.jpg',
			name: 'Cyan',
			age: 19,
			gender: 'female',
		},
		{
			src: 'https://i.imgur.com/MK3eW3As.jpg',
			name: 'Blue',
			age: 20,
			gender: 'male',
		},
		{
			src: 'https://i.imgur.com/MK3eW3As.jpg',
			name: 'Red',
			age: 30,
			gender: 'male',
		},
	]

	const data = getData()

	const renderProfiles = (user: IProfile, index: number) => (
		<Profile
			key={index}
			src={user.src}
			name={user.name}
			age={user.age}
			gender={user.gender}
			logoComponent={Logo}
		/>
	)

	return (
		<div>
			<p style={{textAlign: 'center'}}>
                Gallery
			</p>
			<br/>
			<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
				{data.map(renderProfiles)}
			</div>

		</div>
	)
}
