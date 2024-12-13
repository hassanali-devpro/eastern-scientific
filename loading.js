import React from 'react'

const loading = () => {
	return (
		<div>
			<div class='flex space-x-2 justify-center items-center bg-black h-screen dark:invert'>
				<img src="/resource/images/codevector.png" className='w-[30%]' alt="" />
				<div class='h-8 w-8 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
				<div class='h-8 w-8 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
				<div class='h-8 w-8 bg-gray-400 rounded-full animate-bounce'></div>
			</div>
		</div>
	)
}

export default loading
