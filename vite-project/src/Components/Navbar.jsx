import React from 'react'

const Navbar = () => {
  return (
    <div>
    <nav >
      <ul className='flex gap-8 justify-center'>
        <li><a href="/" >Home</a></li>
        <li><a href="/login" >Login</a></li>
        <li><a href="/about" >About</a></li>
      
      </ul>
    </nav>
    </div>
  )
}

export default Navbar