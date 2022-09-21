import React from 'react'
import "./Components.css"
function Carousel() {
  return (
    <div>
      <div>
        <div className="">
          <div className="">
            <div className="relative hidden target:block top-0 z-1" id="p1">
              <span className="absolute bottom-[50%] left-0 pl-2"> <a href="#p3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" /></svg></a> </span>
                <img src="../src/assets/carousel.png" className="block w-100" alt="one" />
                <label htmlFor="" className='absolute bottom-[40%] left-[40%] text-5xl'>Slider 1</label>
                <span className="absolute bottom-[50%] right-0 pr-2"> <a href="#p2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" /></svg></a>
                </span>
            </div>
            <div className="relative hidden target:block top-0 z-2" id="p2">
              <span className="absolute bottom-[50%] left-0 pl-2"> <a href="#p1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" /></svg></a> </span>
                <img src="../src/assets/carousel.png" className="block w-100" alt="two" />
                <label htmlFor="" className='absolute bottom-[40%] left-[40%] text-5xl'>Slider 2</label>
              <span className="absolute bottom-[50%] right-0 pr-2"> <a href="#p3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" /></svg></a> </span>
            </div>
            <div className="relative hidden target:block z-3" id="p3">
              <span className="absolute bottom-[50%] left-0 pl-2"> <a href="#p2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" /></svg></a> </span>
                <img src="../src/assets/carousel.png" className="block w-100" alt="three" />
                <label htmlFor="" className='absolute bottom-[40%] left-[40%] text-5xl'>Slider 3</label>
              <span className="absolute bottom-[50%] right-0 pr-2"> <a href="#p1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" /></svg></a> </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel