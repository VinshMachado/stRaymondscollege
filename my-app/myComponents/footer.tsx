import React from 'react'
import Image from 'next/image'
const footer = () => {
  return (
    <div className="bg-red-900 text-white p-4 text-center h-auto mt-10">
        <div className='pl-20'>
<Image src="/Logo.png" alt="logo" width={100} height={40} />
</div>
<div className=''>
<p className='text-lg font-bold'>Contact Us</p>
<p className='text-sm'>St. Raymond's PU College,</p>
<p className='text-sm'>Bangalore, Karnataka, India</p>
<p className='text-sm'>Phone: +91 123 456 7890</p>
<p className='text-sm'>Email: info@straymonds.edu.in</p>
</div>
    </div>
  )
}

export default footer