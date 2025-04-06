import React from 'react'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <div className='p-3 px-5 shadow-xl flex justify-between items-center'>
      <img src="logo.png" alt=""  className='w-16 h-15'/>
      <div>
      <Link to={"/create-trip"}>
            <Button>Get Started, it's Free</Button>
      </Link>
      </div>
    </div>
  )
}

export default Header
