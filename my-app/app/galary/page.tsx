import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className='flex flex-wrap justify-center items-center gap-4'>
    <div className='bg-gray-100 px-5 py-10 text-black flex justify-center items-center mx-14 my-10 rounded-2xl'>
      <div>
        <Image src="/WhatsApp Image 2025-06-20 at 1.20.03 PM.jpeg" alt="Gallery Image" width={320} height={230} className='rounded-lg' />
      </div>
    </div>

     <div className='bg-gray-100 px-5 py-10 text-black flex justify-center items-center mx-14 my-10 rounded-2xl'>
      <div>
        <Image src="/WhatsApp Image 2025-06-20 at 1.20.03 PM.jpeg" alt="Gallery Image" width={320} height={230} />
      </div>
    </div>

     <div className='bg-gray-100 px-5 py-10 text-black flex justify-center items-center mx-14 my-10 rounded-2xl'>
      <div>
        <Image src="/WhatsApp Image 2025-06-20 at 1.20.03 PM.jpeg" alt="Gallery Image" width={320} height={230} />
      </div>
    </div>

    
    </div>
  )
}

export default page