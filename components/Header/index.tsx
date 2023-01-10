import React from 'react'
import LeftHeader from './LeftHeader'
import MiddleHeader from './MiddleHeader'
import RightHeader from './RightHeader'


const Header = (props:Object) => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10' >
       <LeftHeader/>
       <MiddleHeader/>
       <RightHeader/>
    
    </header>
  )
}



export default Header
