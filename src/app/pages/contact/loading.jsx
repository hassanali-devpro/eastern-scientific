import React from 'react'

const loading = () => {
	return (
		<div>
			<div class='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
				<img src="/logon.png" className='w-[30%]' alt="" />
				<div class='h-8 w-8 bg-blue-800 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
				<div class='h-8 w-8 bg-blue-800 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
				<div class='h-8 w-8 bg-blue-800 rounded-full animate-bounce'></div>
			</div>
		</div>
	)
}

export default loading
