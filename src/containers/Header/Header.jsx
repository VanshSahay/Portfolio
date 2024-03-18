import React from 'react'

function Header() {
  return (
    <div className='flex flex-col h-screen'>
      <main className='grow'>
        <article className='grid grid-cols-[2fr_1fr] grid-rows-[2fr_1.5fr] h-full'>
          <div id='image-section' className='h-full border-l border-white/[0.1]'></div>
          <div id='description-section' className='h-full border-l border-white/[0.1]'></div>
          <div id='title-section' className='h-full border-t border-white/[0.1]'></div>
          <div id='nav-section' className='h-full border-t border-l border-white/[0.1]'></div>
        </article>
        <article className='grid h-full'></article>
        <article className='grid h-full'></article>
        <article className='grid h-full'></article>
      </main>          
    </div>
  )
}

export default Header