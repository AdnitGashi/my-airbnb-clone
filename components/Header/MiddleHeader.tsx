import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const MiddleHeader = (props: object) => {
  return (
    <div className='flex items-center rounded-full md:border-2 py-2 md:shadow-sm' >
      <input className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 ' type="text" placeholder='Start your search' />
      <MagnifyingGlassIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2 ' />
    </div>
  )
}

export default MiddleHeader
