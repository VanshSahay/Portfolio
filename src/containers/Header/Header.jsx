import React from 'react'

function Header() {
  let activeIndex = 0;

  const slides = document.getElementsByTagName("article");

  const handleLeftClick = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;
    
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
    nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
          
    currentSlide.dataset.status = "after";
    
    nextSlide.dataset.status = "becoming-active-from-before";
    
    setTimeout(() => {
      nextSlide.dataset.status = "active";
      activeIndex = nextIndex;
    });
  }

  const handleRightClick = () => {
    const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
    
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
    nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
    
    currentSlide.dataset.status = "before";
    
    nextSlide.dataset.status = "becoming-active-from-after";
    
    setTimeout(() => {
      nextSlide.dataset.status = "active";
      activeIndex = nextIndex;
    });
  }


  return (
    <div className='flex flex-col h-screen'>
      <main className='grow relative overflow-hidden'>
        <article className='grid grid-cols-[2fr_1fr] grid-rows-[2fr_1.5fr] h-full absolute left-0 top-0' data-index="0" data-status="active">
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
            <button onClick={handleLeftClick}>
              <div className='h-full w-full border-l border-white/[0.1] flex justify-center transition hover:bg-[#0a0f23] duration-300'>
                <a href="#">
                  <img src="../../../left-arrow.svg" className='py-36' alt="" />
                </a>
              </div>
            </button>
            <button onClick={handleRightClick}>
              <div className='h-full w-full border-l border-white/[0.1] flex justify-center transition hover:bg-[#0a0f23] duration-300'>
                <a href="#">
                  <img src="../../../right-arrow.svg" className='py-36' alt="" />
                </a>
              </div>
            </button>
          </div>
        </article>
        <article className='grid grid-cols-[2fr_1fr] grid-rows-[2fr_1.5fr] h-full absolute left-0 top-0' data-index="1" data-status="inactive">
          <div id='image-section' className='h-full w-full border-l border-white/[0.1] bg-cover bg-center' style={{backgroundImage: "url(../../../bg-2.jpg)"}}></div>
          <div id='description-section' className='flex items-end justify-center h-full border-l border-white/[0.1]'>
            <p className='px-20 py-16 text-lg tracking-wide leading-[160%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur consequatur reprehenderit reiciendis amet sapiente illum adipisci aspernatur itaque dolor dolorem quos doloremque eaq</p>
          </div>
          <div id='title-section' className='h-full border-t flex justify-between border-white/[0.1]'>
            <h1 className='text-7xl font-black tracking-widest text-white py-24 px-20' style={{fontFamily: "Bebas Neue"}}>WEEPING<br/>TEARS</h1>
            <a href="#">
              <img src="../../../plus.svg" className='text-white py-24 px-24 transition hover:rotate-90 duration-300' alt="" />
            </a>
          </div>
          <div id='nav-section' className='grid grid-cols-2 h-full border-t border-l border-white/[0.1]'>
            <button onClick={handleLeftClick}>
              <div className='h-full w-full border-l border-white/[0.1] flex justify-center transition hover:bg-[#0a0f23] duration-300'>
                <a href="#">
                  <img src="../../../left-arrow.svg" className='py-36' alt="" />
                </a>
              </div>
            </button>
            <button onClick={handleRightClick}>
              <div className='h-full w-full border-l border-white/[0.1] flex justify-center transition hover:bg-[#0a0f23] duration-300'>
                <a href="#">
                  <img src="../../../right-arrow.svg" className='py-36' alt="" />
                </a>
              </div>
            </button>
          </div>
        </article>
        <article className='grid grid-cols-[2fr_1fr] grid-rows-[2fr_1.5fr] h-full absolute left-0 top-0' data-index="2" data-status="inactive">
          <div id='image-section' className='h-full w-full border-l border-white/[0.1] bg-cover bg-center' style={{backgroundImage: "url(../../../bg-3.jpg)"}}></div>
          <div id='description-section' className='flex items-end justify-center h-full border-l border-white/[0.1]'>
            <p className='px-20 py-16 text-lg tracking-wide leading-[160%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur consequatur reprehenderit reiciendis amet sapiente illum adipisci aspernatur itaque dolor dolorem quos doloremque eaq</p>
          </div>
          <div id='title-section' className='h-full border-t flex justify-between border-white/[0.1]'>
            <h1 className='text-7xl font-black tracking-widest text-white py-24 px-20' style={{fontFamily: "Bebas Neue"}}>FIGHTING<br/>DEMONS</h1>
            <a href="#">
              <img src="../../../plus.svg" className='text-white py-24 px-24 transition hover:rotate-90 duration-300' alt="" />
            </a>
          </div>
          <div id='nav-section' className='grid grid-cols-2 h-full border-t border-l border-white/[0.1]'>
            <button onClick={handleLeftClick}>
              <div className='h-full w-full border-l border-white/[0.1] flex justify-center transition hover:bg-[#0a0f23] duration-300'>
                <a href="#">
                  <img src="../../../left-arrow.svg" className='py-36' alt="" />
                </a>
              </div>
            </button>
            <button onClick={handleRightClick}>
              <div className='h-full w-full border-l border-white/[0.1] flex justify-center transition hover:bg-[#0a0f23] duration-300'>
                <a href="#">
                  <img src="../../../right-arrow.svg" className='py-36' alt="" />
                </a>
              </div>
            </button>
          </div>
        </article>
      </main>          
    </div>
  )
}

export default Header