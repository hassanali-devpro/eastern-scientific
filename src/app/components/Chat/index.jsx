import Link from 'next/link'
import React from 'react'

const Chat = () => {
  return (
    <div className='fixed z-10 right-5 bottom-5'>
      {/* <Link href="skype:live:.cid.70023ce0e8a7376d?chat" target="_blank"><img className='w-14' src="/resource/images/skype.png" alt="" /></Link> */}
      <Link href="https://wa.me/+923361113737" target="_blank"><img className='w-[65px] mt-2' src="/WhatsApp.png" alt="" /></Link>
    </div>
  )
}

export default Chat
