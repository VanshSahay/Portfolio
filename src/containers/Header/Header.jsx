import React from 'react'

function Header() {
  return (
    <div className='flex flex-col h-screen'>
      <main className='grow'>
        <article className='grid grid-cols-[2fr_1fr] grid-rows-[2fr_1.5fr] h-full'>
          <div id='image-section' className='h-full w-full border-l border-white/[0.1] bg-cover bg-center' style={{backgroundImage: "url(../../../bg-1.jpg)"}}></div>
          <div id='description-section' className='flex items-end justify-center h-full border-l border-white/[0.1]'>
            <p className='px-20 py-16 text-lg tracking-wide leading-[160%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur consequatur reprehenderit reiciendis amet sapiente illum adipisci aspernatur itaque dolor dolorem quos doloremque eaq</p>
          </div>
          <div id='title-section' className='h-full border-t flex justify-between border-white/[0.1]'>
            <h1 className='text-7xl font-black tracking-widest text-white py-24 px-20' style={{fontFamily: "Bebas Neue"}}>RECREATING<br/>FUTURES</h1>
            <a href="#">
              <img src="../../../plus.svg" className='text-white py-24 px-24 transition hover:rotate-90 duration-300' alt="" />
            </a>
          </div>
          <div id='nav-section' className='grid grid-cols-2 h-full border-t border-l border-white/[0.1]'>
            <button>
              <div className='h-full w-full border-l border-white/[0.1] flex justify-center transition hover:bg-[#0a0f23] duration-300'>
                <a href="#">
                  <img src="../../../left-arrow.svg" className='py-36' alt="" />
                </a>
              </div>
            </button>
            <button>
              <div className='h-full w-full border-l border-white/[0.1] flex justify-center transition hover:bg-[#0a0f23] duration-300'>
                <a href="#">
                  <img src="../../../right-arrow.svg" className='py-36' alt="" />
                </a>
              </div>
            </button>
          </div>
        </article>
        <article className='grid h-full'></article>
        <article className='grid h-full'></article>
      </main>          
    </div>
  )
}

export default Header