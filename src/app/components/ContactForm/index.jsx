import React from 'react'

const index = () => {
    return (
        <div className="p-[5%] bg-[url('/bg-circle.png')] bg-left bg-cover">
            <h1 className="text-start pb-10 text-[#042182] text-xl font-semibold">Feel Free to Contact Us, We’re Here to Help You!</h1>
            <div className="flex flex-col items-center p-[5%]">
                <div className="sm:w-[50%] w-full flex flex-col items-start justify-center gap-2">
                    <h1 className=" w-full">Full Name:</h1>
                    <input type="text" className=" w-full rounded-full border-2 border-blue-800 py-1 px-3" placeholder='John David' />
                    <h1 className=" w-full">Phone Number:</h1>
                    <input type="text" className=" w-full rounded-full border-2 border-blue-800 py-1 px-3" placeholder='+1 234 567 89...' />
                    <h1 className=" w-full">Email:</h1>
                    <input type="text" className=" w-full rounded-full border-2 border-blue-800 py-1 px-3" placeholder='jhondavid@example.com' />
                    <h1 className=" w-full">Message</h1>
                    <textarea className="h-40 w-full rounded-3xl border-2 border-blue-800 py-1 px-3" placeholder='Enter you message here...' />
                    <div className="flex justify-end w-full">
                        <input type="submit" className=' rounded-full md:w-20 w-full h-8 border-2 border-blue-800 bg-blue-400 text-white items-end'  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
