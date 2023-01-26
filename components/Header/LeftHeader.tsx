import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const LeftHeader = (props:object)=> {
  const router = useRouter()
  const onLogoClick = () => {
    router.push('/')
  }
  return (
    <div className='relative flex items-center h-10 cursor-pointer my-auto' onClick={onLogoClick}>
        <Image 
            alt='foto'  
            src="https://links.papareact.com/qd3"
            fill
            style={{objectFit:"contain", objectPosition:"left"}}
        />
       </div>
  )
}

export default LeftHeader
