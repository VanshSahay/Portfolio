import React from 'react'

function Navbar() {
  return (
    <nav  className='flex w-full border border-white/[0.1]'>
      <div id='nav-logo-section' className='flex gap-4 py-10 px-8 pl-12 border-l border-white/[0.1] basis-1/3 box-border justify-start'>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
            <path d="M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z" />
          </svg>
        </a>
      </div>
      <div id='nav-link-section' className='flex gap-32 py-10 px-8 border-l border-white/[0.1] basis-1/3 box-border items-center justify-center'>
        <a href="#">ABOUT</a>
        <a href="#">WORK</a>
      </div>
      <div id='nav-social-section' className='flex gap-16 py-10 px-8 border-l border-white/[0.1] grow box-border items-center justify-center'>
        <a href="https://github.com/VanshSahay" target='_blank' rel="noreferrer noopener">
          <img src="../../../github-mark-white.svg" className='w-5 h-5' alt="..." />
        </a>
        <a href="https://twitter.com/vansh_sahay" target='_blank' rel="noreferrer noopener">
          <img src="../../../twitter.svg" className='w-5 h-5' alt="..." />
        </a>
      </div>
      <div id='nav-contact-section' className='flex gap-4 py-10 px-8 border-l border-white/[0.1] grow box-border items-center justify-center'>
        <a href="mailto:vansh.sahay1234@gmail.com">GET IN TOUCH</a>
      </div>
    </nav>
  )
}

export default Navbar