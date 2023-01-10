import React from 'react'
import Image from 'next/image'

const LeftHeader = (props:object)=> {
  return (
    <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image 
            alt='foto'  
            src='/../public/airbnb-logo.png'
            fill
            style={{objectFit:"contain", objectPosition:"left"}}
        />
       </div>
  )
}

export default LeftHeader