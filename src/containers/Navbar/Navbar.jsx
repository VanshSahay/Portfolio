import React from 'react'

function Navbar() {
  return (
    <nav  className='flex w-full border border-white/[0.1]'>
      <div id='nav-logo-section' className='flex gap-4 py-12 px-8 border-l border-white/[0.1] basis-1/3 box-border'>
        <a href="#">
          <img src="../../../vite.svg" alt="..." />
        </a>
      </div>
      <div id='nav-link-section' className='flex gap-4 py-12 px-8 border-l border-white/[0.1] basis-1/3 box-border'>
        <a href="#">ABOUT</a>
        <a href="#">WORK</a>
      </div>
      <div id='nav-social-section' className='flex gap-4 py-12 px-8 border-l border-white/[0.1] grow box-border'>
        <a href="#">
          <img src="../../../vite.svg" alt="..." />
        </a>
        <a href="#">
          <img src="../../../vite.svg" alt="..." />
        </a>
        <a href="#">
          <img src="../../../vite.svg" alt="..." />
        </a>
      </div>
      <div id='nav-contact-section' className='flex gap-4 py-12 px-8 border-l border-white/[0.1] grow box-border'>
        <a href="#">GET IN TOUCH</a>
      </div>
    </nav>
  )
}

export default Navbar