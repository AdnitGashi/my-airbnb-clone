import React from 'react'
import {  GlobeAltIcon, UserCircleIcon  , Bars3Icon   } from '@heroicons/react/20/solid'


const RightHeader = (props:object)=> {
  return (
    <div className='flex items-center space-x-4 justify-end text-gray-600' >
        <p className='hidden md:inline cursor-pointer' >Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer'/>
        <div className='flex border-2 rounded-full items-center space-x-2 p-2 '>
          <Bars3Icon className='h-6 cursor-pointer' />
          <UserCircleIcon className='h-6 cursor-pointer'/>
        </div>
       </div>
  )
}

export default RightHeader
